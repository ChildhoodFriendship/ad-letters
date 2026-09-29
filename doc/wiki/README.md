# AdLetters Wiki

Knowledge base interlinked in Markdown for the AdLetters repository. It documents verified project behavior and provides operating rules for maintainers and coding agents.

## Start here

1. Read [[SCHEMA|SCHEMA]] for naming, frontmatter, evidence, and maintenance rules.
2. Read [[index|the index]] to locate the project, architecture, modules, and runbooks.
3. Read the project page before inspecting detailed pages.
4. Read the latest entries in [[log|the log]].
5. Read source files and build configuration before documenting behavior.

## Rules

- Add only durable knowledge: architecture, modules/APIs, decisions, bugs, concepts, and repeatable runbooks.
- Keep `index.md` and `log.md` synchronized with every page addition or substantive change.
- Record evidence and verification commands; mark incomplete or inferred claims with the appropriate confidence.
- Never store secrets, tokens, passwords, private keys, certificates, or customer configuration.

## Structure

- `projects/` — project purpose, repository shape, commands, constraints, and evidence.
- `architecture/` — system composition, runtime flow, boundaries, and failure modes.
- `modules/` — important modules, services, APIs, integrations, and data contracts.
- `decisions/` — durable architectural decision records.
- `runbooks/` — repeatable development, deployment, and troubleshooting procedures.
- `bugs/` — durable bug diagnoses and verified fixes.
- `raw/` — immutable source captures; do not edit captured sources after ingestion.
- `templates/` — page templates for future entries.

## Source precedence

Prefer current executable source and configuration verified by execution, then build/runtime evidence, explicit project documentation, and finally wiki statements or agent inference. Treat external services, generated artifacts, and deployment environments as boundaries unless this repository verifies their behavior.

Preserve exact route names, class names, configuration keys, and command names. Do not infer contracts from names alone.
