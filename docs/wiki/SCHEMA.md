# Schema della documentazione

## Scopo

`docs/wiki/` contiene conoscenza durevole, verificabile e sintetica del progetto. La wiki non sostituisce il codice, i test o la configurazione.

## Struttura obbligatoria

| Percorso | Contenuto |
|---|---|
| `index.md` | Mappa completa delle pagine |
| `agent-guide.md` | Regole operative per agenti e manutentori |
| `current-status.md` | Stato verificato, lacune e prossimi riscontri |
| `log.md` | Storico sintetico delle modifiche documentali e decisioni |
| `modules/component-catalog.md` | Catalogo di componenti, servizi e utility |
| `projects/<nome>.md` | Perimetro, configurazione e integrazioni del progetto |
| `bugs/` | Schede di bug durevoli; vuota finché non esiste una diagnosi verificata |

## Convenzioni

- Nomi file minuscoli, con trattini e senza spazi.
- Ogni pagina Markdown informativa usa frontmatter YAML con `title`, `updated`, `type`, `status`, `confidence` e `sources`.
- Ogni pagina va aggiunta a `index.md`; ogni modifica sostanziale va aggiunta a `log.md`.
- Usare link relativi Markdown; preferire percorsi di repository, simboli, comandi e test come evidenza.
- Non salvare segreti, credenziali, token, chiavi private, certificati o configurazioni cliente.
- Tenere le pagine sotto circa 200 righe; eliminare ridondanze e note temporanee.

## Confidenza

- **high**: confermato da codice/configurazione e da una verifica pertinente.
- **medium**: supportato dal codice, ma runtime, browser, servizi esterni o flusso completo non sono verificati.
- **low**: inferito, obsoleto o contraddittorio; indicare quale prova manca.

Quando le fonti divergono, prevalgono: codice/configurazione correnti, output di build/test/runtime, documentazione esplicita, wiki e infine inferenze dichiarate. La presenza di un componente non prova la sua prontezza produttiva.

## Manutenzione

1. Leggere `SCHEMA.md`, `index.md`, `current-status.md` e le ultime righe di `log.md`.
2. Cercare pagine e simboli correlati prima di modificare.
3. Aggiornare pagina, link, `index.md` e una voce concisa in `log.md`.
4. Registrare i comandi eseguiti e i blocchi reali; non trasformare una build riuscita in una garanzia browser o di produzione.
