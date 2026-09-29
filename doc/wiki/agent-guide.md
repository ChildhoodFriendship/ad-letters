---
title: Agents — Working guide
created: 2026-09-29
updated: 2026-09-29
type: query
tags: [guidance, workflow, documentation, testing, security]
project: ad-letters
status: active
confidence: high
sources: [SCHEMA.md, current-status.md, token-usage.md, package.json, angular.json, tsconfig.json]
---

# Agents — Working guide

This is the operating agreement for coding agents working in AdLetters. The goal is to make each task safe, small, verifiable, and easy for the next agent to resume. The repository-level `Agents.md` must remain aligned with this page.

## 1. Orient before acting

1. Read [[SCHEMA|SCHEMA]], [[index|index]], [[current-status|current status]], and the latest 20–30 lines of [[log|log]].
2. Run `git status --short --branch` before changing anything.
3. Locate exact symbols and usages with targeted searches.
4. Read relevant source, configuration, and tests before choosing an implementation.
5. Treat the existing working-tree diff as user-owned unless explicitly asked to change it.

## 2. Execute requests by default

Treat repository questions as actionable coding requests unless the maintainer explicitly asks only for discussion. Inspect, make the smallest useful change, and verify it. If runtime evidence is unavailable, add only focused diagnostic logging when appropriate; do not add speculative behavior changes.

## 3. Scope contract

Before editing, identify outcome, scope, constraints, and acceptance checks. Choose the smallest coherent implementation when details are open; ask only when interpretations would change files or behavior. Keep unrelated cleanup out of the patch.

## 4. Source of truth

Use current source/configuration and successful execution first, then build/test/runtime evidence, explicit documentation, wiki claims, and finally labeled inference. A component folder proves code presence, not live behavior or production readiness.

## 5. Change discipline

- Touch only required files and preserve existing Angular/TypeScript patterns.
- Inspect diffs before editing dirty files; never overwrite unrelated changes.
- Never reset, commit, push, or rewrite history unless explicitly requested.
- Never put credentials, tokens, passwords, private keys, or private endpoints in code or wiki.
- Inspect `package.json` before adding imports or dependencies.
- Keep frontend naming in `camelCase`; preserve external contract names exactly and map explicitly when needed.
- Use explicit access modifiers on methods and members where the surrounding Angular style supports it.
- Put new child components in their own subdirectories.
- Add comments only where names do not explain non-obvious behavior.

## 6. Conditional lifecycle and integration rules

When realtime, subscriptions, dialogs, settings flows, or external integrations are introduced, trace every existing mode, lifecycle, caller, and side effect first. Keep one canonical implementation path, clean subscriptions explicitly, and verify transitions and destruction. Do not retain duplicate functions that own the same behavior. For data flows, record `source -> parser -> state -> renderer -> guard` before editing when useful.

For settings-style components, keep UI preparation separate from persistence (`requestEdit`/`requestAdd` versus `submitSave`), keep persistence canonical, type dialog results, and avoid mutating selected rows through dialogs. These are conditional rules for future modules, not claims that such modules currently exist.

## 7. Verification gates

Run narrow checks first, then the project gates:

- `npm run build`
- `npm run test -- --watch=false --browsers=ChromeHeadless`
- Manual `npm start` smoke testing when UI behavior changes

There is currently no lint script. Report commands that were not run or are unavailable. A passing build does not prove browser behavior, backend integration, or production readiness.

Final reports contain only:

- **Changed:** files and behavior actually modified;
- **Verified:** commands and real results;
- **Blocked/remaining:** failures, warnings, or manual checks still needed.

## 8. Wiki maintenance and handoff

After substantive work, update the relevant page, links, `index.md`, and one concise `log.md` entry. Keep durable guidance here, project facts in project/module pages, temporary focus in `current-status.md`, and history in `log.md`. Before finishing, run `git status --short --branch` and `git diff --check`.

A handoff includes scope, evidence, current state, remaining risk, and one concrete next action.
