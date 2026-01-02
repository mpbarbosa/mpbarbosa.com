# Public Directory - DEPRECATED

**Status:** ⚠️ DEPRECATED as of v2.3.0 (2025-12-27)

## What Happened?

The `public/` folder has been **merged into `src/`** to simplify the project structure.

## Migration Summary

All files from `public/` have been moved to `src/`:

- ✅ `public/index.html` → `src/index.html`
- ✅ `public/vendor/` → `src/vendor/`
- ✅ `public/sw.js` → `src/sw.js`
- ✅ `public/favicon.ico` → `src/favicon.ico`
- ✅ `public/archived-versions/` → `src/archived-versions/`

## Why This Change?

1. **Simplification**: Single source folder is easier to maintain
2. **No Symlinks Needed**: CSS files co-located with source
3. **Cleaner Structure**: Unified approach to all files
4. **Better Developer Experience**: Everything in one place

## New Structure

```
src/                      # All application files (was split between public/ and src/)
├── index.html           # Main entry point
├── vendor/              # Third-party libraries
├── js/                  # JavaScript modules
├── styles/              # CSS files
├── services/            # API services
├── config/              # Configuration
└── assets/              # Static assets
```

## What To Do?

- 🔄 Update any references from `public/` to `src/`
- 🔄 Use `http://localhost:8080/src/` instead of `http://localhost:8080/public/`
- 🔄 Update production URLs to point to `src/` directory

## Related Changes

- **Version**: 2.3.0
- **Date**: 2025-12-27
- **See**: CHANGELOG.md for full details

---

**This directory can be safely deleted after verifying all systems work with the new structure.**
