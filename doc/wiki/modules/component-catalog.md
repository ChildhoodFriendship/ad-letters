---
title: Catalogo componenti
updated: 2026-10-06
type: module
status: active
confidence: high
sources: [src/app/app.component.ts, src/app/app.component.html, src/app/components, src/styles.css]
---

# Catalogo componenti

Tutti i componenti sono standalone, usano template e stylesheet dedicati e `ChangeDetectionStrategy.OnPush`. Non sono presenti servizi, utility applicative o contratti HTTP nel codice corrente.

| Componente | Scopo | Input/output | Vincoli |
|---|---|---|---|
| `AppComponent` | Shell della pagina; ordina tutte le sezioni e il ticker | Nessun input/output; stato `title` readonly | È il solo compositore della landing page |
| `SiteHeaderComponent` | Header e navigazione interna | Nessun input/output | Dipende da anchor presenti nella pagina |
| `HeroSectionComponent` | Hero iniziale e CTA | Nessun input/output | Contenuto statico nel template |
| `ServicesSectionComponent` | Elenco dei tre servizi | Stato locale `ServiceItem[]` con `number`, `title`, `description`, `tags` | Nessuna sorgente dati esterna |
| `ProcessSectionComponent` | Sezione descrittiva del processo | Nessun input/output | Contenuto statico nel template |
| `WorkSectionComponent` | Elenco dei lavori selezionati | Stato locale `WorkItem[]` con `title`, `category`, `image`, `tone` | Le immagini correnti sono URL Unsplash remoti |
| `ContactSectionComponent` | CTA e contatto | Nessun input/output | Non invia dati a un backend |
| `SiteFooterComponent` | Footer e informazioni finali | Nessun input/output | Contenuto statico nel template |

## Utility e infrastruttura

- `src/styles.css`: token colore, tipografia globale, reset, scroll e preferenza reduced-motion.
- `app.config.ts`: zone event coalescing, router, client hydration ed event replay.
- `app.config.server.ts`: abilita server rendering sopra la configurazione browser.
- `server.ts`: serve gli asset compilati e renderizza tutte le richieste con Angular `CommonEngine`; porta `PORT` o `4000`.
- `app.routes.ts`: array vuoto; non documentare route applicative non presenti.

## Regole di estensione

Per un nuovo contenuto statico preferire un componente standalone nella propria cartella. Introdurre servizi, modelli condivisi, API o stato globale solo con una necessità verificabile e aggiornare questo catalogo insieme ai test.
