---
title: Runbook — Local development
created: 2026-09-29
updated: 2026-09-29
type: runbook
tags: [runbook, workflow, testing]
project: ad-letters
status: active
confidence: high
sources: [package.json, angular.json, README.md]
---

# Runbook — Local development

## When to use

Use this runbook to install dependencies, run the development server, build the application, or run the repository's automated tests.

## Preconditions

- Node.js and npm compatible with the Angular 19 toolchain.
- Repository dependencies installed with `npm install` when `node_modules` is absent or stale.
- No credentials or external services are required by the inspected application baseline.

## Procedure

1. From the repository root, install dependencies if needed: `npm install`.
2. Start development mode: `npm start`.
3. Open the URL reported by Angular CLI, normally `http://localhost:4200/`.
4. Build production artifacts: `npm run build`.
5. Run headless unit tests: `npm run test -- --watch=false --browsers=ChromeHeadless`.
6. To run the built SSR server, use `npm run serve:ssr:ad-letters` after a successful build.

## Verification

A successful baseline currently consists of a completed Angular build and three passing Jasmine tests. Confirm the actual command output rather than relying on this snapshot.

## Rollback / recovery

No deployment rollback procedure is defined in the repository. For local recovery, stop the running process, correct the reported source/configuration issue, and rerun the build or tests.

## Troubleshooting

- If the build fails, inspect the first TypeScript/Angular diagnostic and rerun `npm run build` after the smallest correction.
- If headless Chrome cannot start, record the environment blocker; do not claim tests passed.
- If SSR cannot find generated assets, run `npm run build` before starting the SSR script.

## Related pages

- [[../projects/ad-letters]]
- [[../architecture/system-architecture]]
- [[../modules/application-shell]]
