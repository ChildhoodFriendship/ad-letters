---
title: Guida operativa per agenti
updated: 2026-10-06
type: guidance
status: active
confidence: high
sources: [Agents.md, package.json, angular.json, tsconfig.json, SCHEMA.md]
---

# Guida operativa per agenti

## Prima di agire

1. Leggere `SCHEMA.md`, `index.md`, `current-status.md` e le ultime 20–30 righe di `log.md`.
2. Eseguire `git status --short --branch`; trattare le modifiche già presenti come dell'utente.
3. Cercare definizione e usi dei simboli interessati e leggere codice, configurazione e test prima di scegliere la soluzione.
4. Definire outcome, scope, vincoli e controlli di accettazione. Chiedere chiarimenti solo se l'interpretazione cambia file o comportamento.

## Disciplina della modifica

- Fare il cambiamento minimo coerente; niente refactoring estraneo.
- Preservare struttura Angular standalone, stile TypeScript/HTML/CSS e confini dei componenti.
- Non resettare, committare, fare push o riscrivere la storia senza richiesta esplicita.
- Non copiare segreti o endpoint privati nella repo o nella wiki.
- Controllare `package.json` prima di aggiungere import o dipendenze.
- Usare `camelCase` per lo stato frontend; preservare esattamente i nomi dei contratti esterni.
- Dichiarare modificatori di accesso espliciti quando coerente con lo stile esistente.
- Mettere ogni nuovo child component in una sottocartella propria.
- Per ogni nuova funzione aggiungere JSDoc con `@param` e `@returns` quando applicabile; usare graffe negli `if`, anche per una sola istruzione.
- Mantenere un solo percorso canonico per comportamento, stato, lifecycle o integrazione; prima di introdurre logica realtime, dialog o subscription tracciare chiamanti, side effect, transizioni e cleanup.
- Separare preparazione UI e persistenza nei futuri flussi di form; tipizzare i risultati dei dialog e non mutare righe selezionate attraverso il dialog.

## Verifica

Eseguire prima i controlli mirati, poi:

```bash
npm run build
npm run test -- --watch=false --browsers=ChromeHeadless
```

`npm run lint` non è dichiarato in `package.json`. Per modifiche UI, eseguire anche uno smoke test manuale con `npm start` quando possibile. Una build riuscita non dimostra il comportamento visivo, SSR in produzione o eventuali integrazioni future.

## Wiki e consegna

Dopo una modifica sostanziale aggiornare la pagina pertinente, i link, `index.md` e `log.md`. Prima della consegna eseguire `git status --short --branch` e `git diff --check`.

Il resoconto finale contiene solo:

- **Changed:** file e comportamento realmente modificati;
- **Verified:** comandi e risultato reale;
- **Blocked/remaining:** errori, avvisi o controlli manuali ancora necessari.
