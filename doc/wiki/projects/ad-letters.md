---
title: AdLetters
created: 2026-09-29
updated: 2026-09-29
type: project
tags: [project, deployment, testing]
project: ad-letters
status: active
confidence: high
sources: [package.json, angular.json, README.md, src/main.ts, src/main.server.ts, src/server.ts]
---

# AdLetters

## Purpose

The repository contains an Angular one-page tattoo portfolio for Adrian, whose tattoo nickname is AD LETTERS.

## Repository

- Repository path: current repository root
- Main branch at snapshot: `master`
- Build: `npm run build`
- Test: `npm run test -- --watch=false --browsers=ChromeHeadless`
- Development server: `npm start`
- SSR server after build: `npm run serve:ssr:ad-letters`

## System shape

- Browser entry point: `src/main.ts`
- Server entry point: `src/server.ts`
- Root component: `src/app/app.component.ts`
- Routes: `src/app/app.routes.ts` (currently empty)
- Architecture: [[../architecture/system-architecture]]
- Module: [[../modules/application-shell]]

## Local development

1. Install dependencies with the repository's package manager.
2. Start the development server with `npm start`.
3. Build with `npm run build`.
4. Run headless tests with `npm run test -- --watch=false --browsers=ChromeHeadless`.

## Deployment and operations

No repository-verifiable deployment procedure, environment matrix, health check, or rollback contract is present. The built SSR server can be started through the declared npm script; production hosting details remain unverified.

## Known constraints and open questions

- Product requirements and user flows are not present in the inspected repository.
- No application routes or project-specific service boundaries are currently defined.
- Browser/manual smoke behavior is not covered by the automated baseline.

## Evidence

- `package.json`, `angular.json`, `src/main.ts`, `src/main.server.ts`, `src/server.ts`
- `src/app/app.component.spec.ts`
