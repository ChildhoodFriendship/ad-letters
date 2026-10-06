---
title: Stato corrente — AdLetters
updated: 2026-10-06
type: status
status: active
confidence: medium
sources: [package.json, angular.json, src/app/app.component.ts, src/app/app.component.html, src/app/components, src/styles.css, src/app/app.component.spec.ts]
---

# Stato corrente — AdLetters

Snapshot del 2026-10-06: descrive evidenze del repository, non una certificazione di rilascio.

## Baseline

| Area | Stato verificabile |
|---|---|
| Framework | Angular 19 standalone, TypeScript 5.7, RxJS 7.8 |
| Superficie | Landing page one-page composta da header, hero, servizi, processo, lavori, contatti e footer |
| Routing | `Routes` vuoto; la navigazione è interna alla pagina |
| Rendering | Browser bootstrap e SSR Angular/Express configurati; prerender abilitato |
| Dati | Array locali `ServiceItem` e `WorkItem`; nessun servizio/API/CMS |
| Asset | Favicon locale e immagini remote Unsplash temporanee |
| Test | Spec Jasmine per creazione, sezioni principali e brand |

## Verifica documentata

Verificata il 2026-10-06 su questo working tree:

- `npm run build`: **pass**; bundle browser/server generati e 1 route prerenderizzata.
- `npm run test -- --watch=false --browsers=ChromeHeadless`: **pass**; 3 test Jasmine superati.
- `npm run lint`: **non disponibile**; lo script non è dichiarato.

- Il browser QA a dimensioni desktop/mobile e la verifica del server SSR in esecuzione restano controlli manuali.

## Gap aperti

- Copy, immagini, link social, identità finale e destinazione del contatto sono ancora provvisori o da confermare.
- Le immagini remote dipendono da rete e da URL esterni.
- Non sono presenti backend, form provider, analytics, CMS o configurazione di deployment.
- Va chiarita la coerenza del naming di brand tra `AD LETTERS` nei contenuti/test e `NOIR INK` nel titolo interno di `AppComponent`.
- Prima del rilascio servono asset approvati, flusso di contatto reale e smoke test browser.
