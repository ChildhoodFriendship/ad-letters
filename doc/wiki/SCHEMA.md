# Coding Project Wiki Schema

## Purpose

A durable, searchable knowledge base for software projects. Keep verified facts, architecture, modules/APIs, data contracts, decisions, workflows, operational procedures, and durable debugging knowledge here.

## Conventions

- File names are lowercase, hyphen-separated, and contain no spaces.
- Every content page starts with YAML frontmatter and is listed in `index.md`.
- Use `[[wikilinks]]` and useful outbound links.
- Update `updated` whenever a page changes.
- Append every structural or substantive content action to `log.md`.
- Prefer repository-relative source paths, line ranges, commits, tests, logs, and official documentation.
- Never store secrets, tokens, passwords, private keys, certificates, or customer configuration.
- Keep temporary task notes out of durable pages.
- Keep pages below approximately 200 lines; split deep dives when necessary.

## Frontmatter

```yaml
---
title: Page title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: project | architecture | module | api | decision | workflow | bug | runbook | concept | query
tags: [project, architecture]
project: project-slug
status: active | superseded | resolved | open | archived
confidence: high | medium | low
sources: [repository-relative/path, https://example.invalid/docs]
---
```

## Confidence semantics

- `high` — directly confirmed by current source/configuration and relevant successful verification.
- `medium` — supported by source or documentation, but runtime behavior or a complete user flow is not fully verified.
- `low` — inferred, stale, contradictory, or dependent on missing evidence; state what would verify it.

Preserve contradictions instead of silently choosing a convenient claim.

## Page rules and source precedence

Create pages for projects, important modules/APIs, non-obvious integrations, durable bugs, operational procedures, domain concepts, and architectural decisions. Do not create pages for trivial details. Document repository-owned behavior separately from libraries, generated artifacts, and deployment-specific configuration. Mark unresolved boundaries as open questions.

When sources disagree, use: (1) current executable source/configuration, (2) build/test/runtime evidence, (3) checked-in contracts, (4) explicit documentation, (5) wiki prose, and (6) labeled agent inference. Do not infer external schemas, authorization, rate limits, or deployment contracts from identifiers alone.

## Maintenance

1. Check `index.md` and search for related terms.
2. Read relevant source, configuration, and tests.
3. Update the page and useful links.
4. Update `index.md` and append a concise `log.md` entry.
5. Include verification evidence and state blocked checks honestly.
