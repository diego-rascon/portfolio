# AGENTS.md

Single-page portfolio site for drascon.com. Astro 7 + Svelte 5 + Tailwind v4, deployed to Cloudflare Workers via the `@astrojs/cloudflare` adapter. Managed with pnpm (workspace root is the repo root).

## Commands

- `pnpm dev` — dev server at `localhost:4321`
- `pnpm build` — build to `dist/`; `pnpm preview` serves the build
- `pnpm astro check` — typecheck (no `check` script in package.json)
- `pnpm format:check` / `pnpm format:fix` — Prettier (astro plugin, repo has no Prettier config, defaults apply)
- `pnpm generate-types` — runs `wrangler types` to regenerate `worker-configuration.d.ts`

There are no tests and no lint script. Verification = `astro check` + `format:check` + `pnpm build`.

## Gotchas

- `worker-configuration.d.ts` is referenced by `tsconfig.json` but is not committed; generate it with `pnpm generate-types` when it's missing or after editing `wrangler.jsonc`.
- Node >= 22.12.0 required (package.json `engines`).
- Svelte components use Svelte 5 runes syntax (`$state`, `$derived`), not Svelte 4 lifecycle.
- Tailwind v4 is CSS-first: no `tailwind.config`; theme/custom utilities live in `src/styles/global.css` via `@import "tailwindcss"` and `@layer utilities`. `global.css` is imported once in `AppLayout.astro`.

## Architecture

- `src/pages/index.astro` is the only page; sections are mounted there in order (hero, experience, projects, skills, certifications).
- Feature-based layout: each section lives under `src/features/<name>/` with `components/`, `data/`, `types/`, `assets/`, and optional `utils/`. Follow this pattern for new sections.
- Barrel files `src/features/index.js`, `src/layouts/index.js`, `src/components/index.js` re-export sections/components; use `@/*` alias (maps to `./src/*`) for imports.
- Section content is typed arrays in `data/` `.ts` files (e.g. `src/features/experience/data/experienceList.ts`), which import the shared `skills` map from `src/data/skills.ts`. Update the data file, not the components, to change page content.
- Images are referenced by path string, not imported as Astro assets: files live in `public/images/{projects,certifications}/...` as `.webp` and are resolved via per-feature `resolveImagePath()` utils.
