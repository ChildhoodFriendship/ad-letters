# Agent instructions

This repository's durable documentation and operating agreement live in [`doc/wiki/`](doc/wiki/README.md). Read the wiki before changing code, especially:

1. [`doc/wiki/SCHEMA.md`](doc/wiki/SCHEMA.md) — documentation structure, evidence, confidence, and maintenance rules;
2. [`doc/wiki/index.md`](doc/wiki/index.md) — page map;
3. [`doc/wiki/agent-guide.md`](doc/wiki/agent-guide.md) — coding-agent workflow and verification rules;
4. [`doc/wiki/current-status.md`](doc/wiki/current-status.md) — verified repository baseline;
5. the latest entries in [`doc/wiki/log.md`](doc/wiki/log.md).

## Repository rules

- Inspect `git status --short --branch` and the relevant source/configuration before editing.
- Treat pre-existing working-tree changes as user-owned.
- Make the smallest coherent change; do not perform unrelated cleanup.
- Do not invent behavior, contracts, integrations, or deployment details that are not supported by source, configuration, documentation, or execution evidence.
- Do not copy secrets, tokens, passwords, private keys, or private endpoints into code or documentation.
- Do not reset, commit, push, or rewrite history unless the user explicitly requests it.
- Run the narrowest relevant checks, then `npm run build` and `npm run test -- --watch=false --browsers=ChromeHeadless` when applicable. There is currently no lint script.
- Before finishing, run `git diff --check`, update affected wiki pages, keep `index.md` and `log.md` synchronized, and report only actual changes, verification results, and remaining blockers.

When these instructions and the wiki disagree, update both in the same change; the wiki is the detailed source of reference for agent workflow and documentation conventions.
