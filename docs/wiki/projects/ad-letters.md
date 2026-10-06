---
title: Progetto AdLetters
updated: 2026-10-06
type: project
status: active
confidence: high
sources: [package.json, angular.json, README.md, src/main.ts, src/main.server.ts, src/server.ts, src/app/app.config.ts, src/app/app.routes.ts]
---

# Progetto AdLetters

## Scopo e perimetro

Applicazione Angular one-page per una landing/portfolio. Il repository contiene la UI e la configurazione SSR; non contiene backend, persistenza o integrazioni di contatto.

## Configurazione

| Voce | Valore |
|---|---|
| Package | `ad-letters`, versione `0.0.0` |
| Entry browser | `src/main.ts` |
| Entry SSR | `src/main.server.ts`, `src/server.ts` |
| Root component | `src/app/app.component.ts` |
| Routes | `src/app/app.routes.ts`, attualmente vuoto |
| Build | `npm run build` |
| Dev server | `npm start` (`ng serve`) |
| Test | `npm run test -- --watch=false --browsers=ChromeHeadless` |
| SSR compilato | `npm run serve:ssr:ad-letters` |
| Output | `dist/ad-letters` |

## Architettura runtime

- `bootstrapApplication` avvia `AppComponent` nel browser.
- `AppComponent` compone sette componenti di sezione e un ticker inline.
- Angular prerender/SSR usa Express e `CommonEngine`; gli asset browser sono serviti con cache `1y`.
- `provideClientHydration(withEventReplay())` abilita hydration lato client.
- Gli stili globali sono in `src/styles.css`; gli stili specifici sono accanto ai componenti.

## Vincoli e integrazioni

- Il contenuto è locale e statico; `ServiceItem` e `WorkItem` sono interfacce locali ai rispettivi componenti.
- Le immagini dei lavori sono remote e temporanee; la produzione richiede asset approvati e una decisione sul loro hosting.
- La pagina usa anchor interne e non ha route applicative.
- La procedura di deployment, health check e rollback non è definita nel repository.
- Non sono presenti segreti o configurazioni esterne da documentare.
