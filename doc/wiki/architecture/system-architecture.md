---
title: System architecture — AdLetters
created: 2026-09-29
updated: 2026-09-29
type: architecture
tags: [architecture, deployment, testing]
project: ad-letters
status: active
confidence: high
sources: [angular.json, src/main.ts, src/main.server.ts, src/server.ts, src/app/app.config.ts, src/app/app.config.server.ts]
---

# System architecture — AdLetters

## Context

AdLetters is configured as a standalone Angular application with browser bootstrap, client hydration, server-side rendering through Angular SSR, Express static serving, and prerendering enabled in the Angular build configuration.

## Components

| Component | Responsibility | Technology | Links |
|---|---|---|---|
| Browser bootstrap | Starts the standalone root component | Angular platform browser | [[../modules/application-shell]] |
| Application config | Provides zone change detection, router, and client hydration | Angular providers | [[../modules/application-shell]] |
| Server bootstrap | Merges server rendering providers with application config | Angular platform server | [[../modules/application-shell]] |
| SSR server | Serves browser assets and renders unmatched requests | Express, `@angular/ssr/node` | [[../runbooks/local-development]] |

## Runtime flow

1. `src/main.ts` calls `bootstrapApplication(AppComponent, appConfig)`.
2. `appConfig` provides router configuration and client hydration with event replay.
3. The root component renders its template and an empty router outlet.
4. For SSR, `src/main.server.ts` bootstraps with the merged server config.
5. `src/server.ts` serves static browser output, then renders other requests with `CommonEngine`.

## Data and control boundaries

The repository currently contains no application API client, persistence layer, external service integration, or domain data contract. Angular and Express behavior is provided by dependencies and should not be documented as repository-owned business behavior.

## Failure modes

- Build failures can prevent browser/server bundles from being generated.
- Missing or invalid server output prevents the SSR server from serving the expected assets.
- Route behavior is currently limited because the declared route list is empty.

## Security boundaries

The server exposes generated browser assets and SSR output. No application authentication, authorization, or private configuration is present in the inspected source.

## Related pages

- [[../projects/ad-letters]]
- [[../modules/application-shell]]
- [[../runbooks/local-development]]

## Evidence

- `angular.json:16-40,66-99`
- `src/main.ts`, `src/main.server.ts`, `src/server.ts`
- `src/app/app.config.ts`, `src/app/app.config.server.ts`
