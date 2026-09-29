# Coding Project Wiki Log

> Append-only. Format: `## [YYYY-MM-DD] action | subject`
> Actions: `create`, `update`, `verify`, `archive`, `lint`, `query`.

## [2026-09-29] create | AdLetters wiki rebuilt

- Reorganized the reference document model under `doc/wiki/`.
- Replaced project-specific claims with evidence from the current Angular repository.
- Added project, architecture, module, and local-development pages; decision, bug, and raw areas remain empty placeholders.

## [2026-09-29] verify | Repository baseline

- `npm run build` passed and generated browser/server bundles with one prerendered static route.
- `npm run test -- --watch=false --browsers=ChromeHeadless` passed with 3 tests.
- No lint script is declared in `package.json`.

## [2026-09-29] update | Tattoo portfolio direction

- Replaced the Angular starter placeholder with the initial AD LETTERS tattoo portfolio.
- Added standalone header, hero, services, approach, work, contact, and footer components.
- Added responsive visual tokens and temporary Unsplash imagery.
- `npm run build`, headless tests, and a local HTTP smoke check passed.

## [2026-09-29] update | AD LETTERS identity and motion

- Replaced the provisional Noir Ink identity with Adrian's AD LETTERS brand.
- Localized the landing page in Italian and set the studio location to Piove di Sacco.
- Corrected the hero image to a tattoo photograph and updated the experience claim to two years.
- Added the animated specialty ticker, image shine, orbit badge, floating stamp, staggered section entrances, hover lifts, and reduced-motion fallbacks.

## [2026-09-29] update | Dark silver visual palette

- Replaced the gold/violet accent direction with a cool silver palette on graphite and blue-black surfaces.
- Updated shared tokens and component-level hardcoded animation/detail colors.
- `npm run build` passed; visual browser QA was not run in this session.
