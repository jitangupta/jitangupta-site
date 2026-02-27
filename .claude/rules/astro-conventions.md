---
paths:
  - "src/**/*.astro"
  - "src/**/*.ts"
  - "src/**/*.tsx"
---

# Astro Project Conventions

## Stack
- Astro 5.3 + Tailwind CSS 4 + Flowbite + MDX

## Layout
- All pages use `BaseLayout.astro` which includes `BaseHead.astro`
- `BaseHead.astro` pulls title/description from `src/consts.ts`

## Data Files
- `src/data/builds.ts` — open source projects (Build interface)
- `src/data/videos.ts` — featured YouTube videos (Video interface)
- `src/data/caseStudies.ts` — case study metadata

## Commands
- Dev: `npm run dev` (localhost:4321)
- Build: `npm run build`
- Preview: `npm run preview`

## Typography (do not change)
- Headings: Recoleta
- Body: Elza
- Code/UI: Inter
