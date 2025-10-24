# Repository Guidelines

This package hosts the Smartlead community node for n8n; keep `dist/` reproducible, stick to the n8n CLI workflow, and cross-check Smartlead limits in `smartlead-api-reference.md`.

## Project Structure & Module Organization
- `nodes/Smartlead/Smartlead.node.ts` houses REST logic, with helpers/assets under `nodes/Smartlead/resources`; reuse this layout so utilities stay tree-shakeable.
- `nodes/SmartleadTrigger` is the trigger surface; share reusable logic through the `resources` folder instead of duplicating code.
- `credentials/SmartleadApi.credentials.ts` defines auth fields—extend scopes here, never inside node classes.
- Docs such as `IMPLEMENTATION_TRACKING.md` and `smartlead-api-reference.md` capture roadmap items and API nuances; update them whenever behavior changes.
- Built artifacts land in `dist/` via `npm run build`; never hand-edit compiled files.

## Build, Test, and Development Commands
- `npm run dev` starts `n8n-node dev` with live reload against a local n8n instance.
- `npm run build` (or `npm run build:watch`) compiles TypeScript to `dist/`.
- `npm run lint` / `npm run lint:fix` enforce ESLint 9 + Prettier 3 rules; run before every PR.
- `npm run release` and `npm run prepublishOnly` wrap lint, build, and version checks—reserve them for tagged releases.

## Coding Style & Naming Conventions
- TypeScript strict mode, 2-space indentation, and Prettier formatting are mandatory; avoid tabs or ad-hoc spacing.
- Name operations after Smartlead REST nouns (e.g., `prospect`, `campaign`) and keep helper files descriptive (`ProspectDescription.ts`).
- Parameter descriptions, icons, and copy live under `nodes/Smartlead/resources`; keep UI strings declarative so translations stay simple.

## Testing Guidelines
- No automated tests yet; validate endpoints by linking a local n8n instance to `npm run dev`, exercising each operation against Smartlead’s sandbox, and logging response IDs in the PR.
- Always finish with `npm run lint` and `npm run build`; reject PRs that skip either step.

## Commit & Pull Request Guidelines
- Use short, imperative commits such as `Add Smartlead prospect search`; squash noisy fixups.
- PRs must include a summary, linked issue or checklist entry, manual test notes, and screenshots or JSON samples for UI changes.
- Exclude generated `dist/` output unless preparing a release; reviewers rely on source diffs plus reproducible builds.

## Security & Configuration Tips
- Keep credentials out of git; rely on n8n’s credential store defined by `SmartleadApi.credentials.ts`.
- Document new OAuth scopes or rate-limit considerations in `README.md` before shipping.
