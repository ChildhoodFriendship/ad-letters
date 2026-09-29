---
title: Token usage — Efficient agent workflow
created: 2026-09-29
updated: 2026-09-29
type: query
tags: [guidance, workflow, performance, documentation]
project: ad-letters
status: active
confidence: high
sources: [SCHEMA.md, agent-guide.md, index.md, package.json]
---

# Token usage — Efficient agent workflow

Spend context on the smallest evidence set that supports a correct change.

## Orientation budget

Start with `SCHEMA.md`, `index.md`, `current-status.md`, the latest 20–30 lines of `log.md`, and `git status --short --branch`. Do not dump the repository or `node_modules`; use the map to select relevant pages and symbols.

## Investigation rules

- Search for a symbol, route, component, or configuration key before opening files.
- Read bounded ranges from large files.
- Trace definition → callers → types/contracts and stop when behavior and acceptance are clear.
- Batch independent searches and reads.
- Use programmatic summaries for repetitive inventories.
- Prefer one authoritative source over repeated paraphrases.
- Record durable findings in the appropriate wiki page with source paths.
- Never paste secrets or generated files into context or the wiki.

## Task sizing

| Task | Read first | Stop reading when |
|---|---|---|
| Small fix | status, index, target file, direct callers | root cause and verification path are known |
| Module change | status, module page, component/service files, types | data flow and boundary are clear |
| Cross-cutting change | status, architecture, affected symbols | every boundary has an acceptance check |
| Broad audit | status, targeted searches, scripted inventory | evidence is represented in a table |

## Avoidable waste

Avoid rereading settled manifests, generated `dist/`, `node_modules`, unrelated modules, or repeating a failed patch without rereading the current file. Do not claim runtime behavior from compilation alone.

Efficient completion means the smallest relevant change is applied, verification has run, durable knowledge is indexed, and the next agent can find the evidence without replaying the investigation. See [[agent-guide]].
