# Public Assets

Static files served directly by the web server without processing by Vite. Contents are copied as-is to the build output (`dist/`).

## Contents

| File / Directory | Description |
|-----------------|-------------|
| `icon-192.png` | PWA app icon — 192 × 192 px (required by Web App Manifest) |
| `icon-512.png` | PWA app icon — 512 × 512 px (required by Web App Manifest) |
| `manifest.json` | Web App Manifest — defines PWA name, icons, display mode, and theme |
| `service-worker.js` | Service Worker for offline caching and PWA installation |
| `libs/` | Third-party libraries served statically (not bundled by Vite) |

## Guidelines

- Do not put source files here — use `src/` for anything processed by Vite.
- Keep icons optimised (compressed PNG).
- Update `manifest.json` when the app name, version, or icon paths change.
