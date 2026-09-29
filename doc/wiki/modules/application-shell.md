---
title: Module — Application shell
created: 2026-09-29
updated: 2026-09-29
type: module
tags: [module, architecture, testing]
project: ad-letters
status: active
confidence: high
sources: [src/app/app.component.ts, src/app/app.component.html, src/app/app.component.css, src/app/app.routes.ts, src/app/app.config.ts, src/app/app.component.spec.ts]
---

# Module — Application shell

## Responsibility

Provides the current standalone root component, its placeholder presentation, router outlet, and application-level providers. It does not currently provide product-specific feature modules or navigation routes.

## Public surface

- Root selector: `app-root`
- Root class: `AppComponent`
- Route configuration: `routes: Routes = []`
- Application configuration: `appConfig`

## Internal structure

| Component | Responsibility | Source |
|---|---|---|
| `AppComponent` | Holds the displayed title and template metadata | `src/app/app.component.ts` |
| Root template | Renders starter placeholder content and router outlet | `src/app/app.component.html` |
| Component stylesheet | Styles the starter placeholder | `src/app/app.component.css` |
| Route config | Declares application routes; currently empty | `src/app/app.routes.ts` |
| Application config | Registers router, zone change detection, and hydration | `src/app/app.config.ts` |

## Runtime and data flow

1. Browser or server bootstrap creates `AppComponent`.
2. Angular evaluates the root template and its static links/content.
3. The empty router outlet is available for future routes.

## Dependencies and boundaries

- Angular core, router, platform-browser, and platform-server.
- No repository-owned data store, API, authentication, or external service is wired into this module.

## Failure modes and diagnostics

- A template or TypeScript compilation error blocks the application build.
- Route navigation cannot target application pages until routes are declared.
- Verify with `npm run build` and the root component spec.

## Verification

- `npm run test -- --watch=false --browsers=ChromeHeadless`: 3 tests passed at the snapshot.
- `npm run build`: passed at the snapshot.
- Browser behavior beyond compilation and unit tests remains manually unverified.

## Related pages

- [[../projects/ad-letters]]
- [[../architecture/system-architecture]]
- [[../runbooks/local-development]]

## Evidence

- `src/app/app.component.ts`, `src/app/app.component.html`, `src/app/app.component.css`
- `src/app/app.routes.ts`, `src/app/app.config.ts`
- `src/app/app.component.spec.ts`
