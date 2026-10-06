# Storico wiki

Formato: `## [YYYY-MM-DD] azione | oggetto`. Voci sintetiche e append-only.

## [2026-10-06] migrate | Wiki snella Hermes

- Ridotta `docs/wiki/` alla struttura richiesta: schema, guida agenti, stato, indice, log, catalogo componenti, progetto e cartella bug vuota.
- Separati i fatti verificabili di AdLetters dalle convenzioni generali della wiki di riferimento.
- Aggiornato `Agents.md` per puntare alla nuova struttura.
- Eliminati i file temporanei della wiki di riferimento insieme alla vecchia struttura.

## [2026-10-06] verify | Baseline del progetto

- `npm run build`: pass; bundle browser/server e una route prerenderizzata.
- `npm run test -- --watch=false --browsers=ChromeHeadless`: pass; 3 test Jasmine.
- `git diff --check`: pass; nessuno script lint dichiarato.
