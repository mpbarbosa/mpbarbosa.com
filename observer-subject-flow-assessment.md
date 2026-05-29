# ObserverSubject Pattern Flow Assessment

## Scope

This assessment focuses on the observer-style flow used by the `guia_js` / `guia_turistico` app, based on the original module paths recovered from the published source maps in `guia_js/assets/*.js.map`.

The main modules involved are:

- `src/application/ObserverSubject.ts` via `guia_js/assets/services-PjxALIog.js.map`
- `src/application/services/ReverseGeocoder.ts`
- `src/services/ChangeDetectionCoordinator.ts`
- `src/coordination/ServiceCoordinator.ts`
- `src/coordination/SpeechCoordinator.ts`
- `src/html/HTMLAddressDisplayer.ts`
- `src/html/HTMLHighlightCardsDisplayer.ts`
- `src/html/HTMLHeaderDisplayer.ts`
- `src/observers/AddressDisplayObserver.ts`
- `src/observers/AddressSpeechObserver.ts`
- `src/data/AddressCache.ts`
- `src/data/AddressChangeDetector.ts`

## Executive assessment

The project uses the Observer pattern successfully for the core location-to-UI pipeline, but in practice the runtime flow is a **hybrid of three mechanisms**:

1. a minimal `ObserverSubject` publish/subscribe core,
2. legacy callback-based change detection,
3. DOM-level `MutationObserver` synchronization.

That hybrid works, but it also means the observer flow is **not a single coherent event bus**. It is split across full-address updates, confirmation-buffered field-change updates, cache notifications, and DOM mutation mirroring. The result is functional but structurally fragile.

## High-level flow

```text
GeolocationService
  -> PositionManager (upstream publisher; referenced by ServiceCoordinator)
    -> ReverseGeocoder.update(...)
      -> ReverseGeocoder.fetchAddress()
        -> ReverseGeocoder.notifyObservers(currentAddress, standardizedAddress, ADDRESS_FETCHED_EVENT, false, null)
          -> HTMLAddressDisplayer
          -> HTMLHighlightCardsDisplayer
          -> speech displayer / AddressSpeechObserver chain

AddressCache / extractor / confirmation buffers
  -> ChangeDetectionCoordinator
    -> notify legacy observers with:
       observer.update(changeData, "MunicipioChanged|BairroChanged|LogradouroChanged", null, changeDetails)
          -> HTMLHighlightCardsDisplayer
          -> SIDRA displayer
          -> speech displayer / AddressSpeechObserver chain

HTMLHighlightCardsDisplayer
  -> writes municipio/bairro to DOM
    -> HTMLHeaderDisplayer MutationObserver
      -> mirrors text into hero header
```

## What each subject is doing

| Component | Role in pattern | Notes |
| --- | --- | --- |
| `ObserverSubject` | Core subject container | Very small and clean: `subscribe`, `unsubscribe`, `notifyObservers` |
| `ReverseGeocoder` | Primary subject for full address fetches | Publishes full address payloads after geocoding succeeds or fails |
| `ChangeDetectionCoordinator` | Adapter/broadcaster for confirmed field changes | Converts extractor callbacks into legacy observer notifications |
| `AddressCache` | Secondary subject plus callback hub | Has its own `observerSubject`, callback registry, and confirmation-buffer state |
| `ServiceCoordinator` | Central wiring point | Subscribes displayers to the right subjects |
| `SpeechCoordinator` | Secondary wiring point | Subscribes speech display to both full-address and field-change streams |
| `HTMLHeaderDisplayer` | Not on subject bus | Uses DOM `MutationObserver`, not `ObserverSubject` |

## Detailed flow assessment

### 1. Core subject implementation is simple and healthy

`ObserverSubject` is intentionally minimal:

- ignores duplicate subscriptions,
- supports unsubscribe cleanly,
- notifies a stable snapshot (`for (const observer of [...this.observers])`),
- keeps no business logic.

That part is solid. The project problems do **not** come from the subject container itself.

### 2. `ReverseGeocoder` is the main publisher for full-address updates

`ReverseGeocoder` is the clearest Subject in the system:

- it subscribes to upstream position changes,
- fetches / normalizes address data,
- publishes successful fetches with `ADDRESS_FETCHED_EVENT`,
- publishes failures with `GEOCODING_ERROR_EVENT`.

Its observer payload shape is positional and implicit:

```text
(currentAddress, standardizedAddress, eventName, loading, error)
```

That works, but observers must know argument order and event-name semantics ahead of time.

### 3. Confirmed field-change notifications are a second, separate stream

The project intentionally separates:

- **full address fetched** events from `ReverseGeocoder`,
- **confirmed per-field changes** from `ChangeDetectionCoordinator`.

That is why `HTMLHighlightCardsDisplayer` is subscribed to both:

- `ReverseGeocoder` for the initial address render,
- `observerSubject` for later confirmation-buffered changes.

This is a valid design choice, but it creates a split-brain model: one UI component has to understand two publishers with different payload semantics. The `_hasRenderedAddress` guard in `HTMLHighlightCardsDisplayer` is evidence that the overlap needs deduplication.

### 4. `ChangeDetectionCoordinator` reveals a legacy contract mismatch

The strongest architectural smell is here.

The extracted `ObserverSubject` only exposes:

- `observers[]`
- `subscribe`
- `unsubscribe`
- `notifyObservers`

But `ChangeDetectionCoordinator` expects a richer legacy shape:

- `observers`
- `functionObservers`

and it manually iterates both.

That means the coordinator is not really speaking to the minimal `ObserverSubject` contract. It is speaking to an older, broader contract that still leaks through the system. This is a sign of an incomplete migration.

## 5. `AddressCache` is both domain service and event hub

`AddressCache` currently combines:

- caching,
- current/previous address state,
- field change detection,
- callback registration,
- confirmation buffering,
- pending-confirmation throttling signals,
- its own observer notifications.

That makes it the most overloaded participant in the flow.

Its observer publication:

```text
{ type: 'addressUpdated', address, cacheSize }
```

is also a third payload style, different from both:

- `ReverseGeocoder` tuple payloads,
- `ChangeDetectionCoordinator` legacy change payloads.

So the project is not using one Observer payload model; it is using several.

### 6. Header synchronization bypasses the subject chain entirely

`HTMLHeaderDisplayer` does not subscribe to the address subjects.

Instead, it watches `#municipio-value` and `#bairro-value` with `MutationObserver`, then mirrors that text into `#header-location-text`.

That means:

- header state is derived from DOM side effects, not domain events,
- the header depends on `HTMLHighlightCardsDisplayer` updating those nodes first,
- the flow is harder to reason about because it is indirect.

This is the least explicit part of the architecture.

### 7. The speech flow is observer-based, but multi-source and event-string driven

`SpeechCoordinator` subscribes the speech displayer to:

- `ReverseGeocoder`,
- the confirmed-change `observerSubject`.

`AddressSpeechObserver` then branches on string events such as:

- `ADDRESS_FETCHED_EVENT`
- `MunicipioChanged`
- `BairroChanged`
- `LogradouroChanged`
- `PositionManager.strCurrPosUpdate`

This works, but it couples speech behavior tightly to event-name strings and argument positions rather than a typed event object.

## Strengths

- **Central wiring exists.** `ServiceCoordinator` makes the main observer relationships discoverable.
- **Observer infrastructure is lightweight.** The core subject is simple and predictable.
- **Change noise is intentionally reduced.** Confirmation buffers in `AddressCache` are a meaningful improvement for location jitter.
- **Backward compatibility is preserved.** Adapters allow old payloads and old observer consumers to keep working.

## Main risks

### 1. Too many event shapes

Current payload styles include:

- tuple payloads from `ReverseGeocoder`,
- legacy change payloads from `ChangeDetectionCoordinator`,
- object event payloads from `AddressCache`,
- DOM mutations consumed by `HTMLHeaderDisplayer`.

This increases cognitive load and makes new observers harder to implement correctly.

### 2. Hidden contract drift

`ChangeDetectionCoordinator` expects more than the minimal `ObserverSubject` API. That hidden dependency is easy to break during refactors.

### 3. Observer responsibilities are mixed with presentation concerns

Some displayers are true observers, while others are façades around internal observer helpers, and one (`HTMLHeaderDisplayer`) is not a subject observer at all. The pattern is conceptually inconsistent at the UI layer.

### 4. Stringly typed event routing

Observers frequently branch on raw event names. This is fragile and makes refactors riskier than necessary.

## Recommendations

### 1. Standardize on typed event envelopes

Replace positional argument tuples with one event object shape, for example:

```ts
{
  type: 'address-fetched' | 'logradouro-changed' | 'bairro-changed' | 'municipio-changed' | 'geocoding-error',
  currentAddress,
  standardizedAddress,
  changeDetails,
  error,
  source
}
```

This would eliminate most observer branching ambiguity immediately.

### 2. Split streams explicitly by concern

Keep two explicit subjects if needed:

- `addressFetchSubject`
- `confirmedAddressChangeSubject`

but stop overloading a generic `observerSubject` name across unrelated responsibilities.

### 3. Remove DOM mutation as an integration mechanism

`HTMLHeaderDisplayer` should subscribe directly to the same address/change stream as the highlight cards, instead of depending on DOM mutations from another displayer.

### 4. Retire `functionObservers`

If legacy function observers are still required, wrap them behind the same typed-event subscriber interface as object observers. Do not keep two parallel observer APIs inside the same coordinator.

### 5. Reduce `AddressCache` responsibilities

`AddressCache` should ideally publish one thing only: confirmed address state transitions. Cache maintenance and throttling coordination could be moved behind smaller collaborators.

## Final assessment

The project does use the Observer / Subject pattern in a real and meaningful way, and the main flow is understandable:

- upstream position updates,
- reverse geocoding,
- observer notifications,
- confirmation-buffered field changes,
- UI and speech reactions.

However, the implementation is currently a **mixed architecture**, not a pure Observer design. The most important issue is not correctness; it is **consistency**. The observer flow is split across:

- multiple subjects,
- multiple payload contracts,
- callback adapters,
- and a DOM mutation side channel.

So the pattern is **working but overgrown**. The next architectural win would be to unify event contracts and make every subscriber react to explicit domain events instead of a mix of tuples, callbacks, and DOM mutations.
