# AGENTS.md - jitangupta.com

## Agent Source Of Truth

This file is the canonical instruction source for agents working in this repo.

- Shared agent context belongs in `.agents/shared/`
- Claude-specific runtime config, commands, and skills belong in `.claude/`
- Codex-specific runtime config belongs in `.codex/`
- App-specific project structure belongs in `apps/`

If both Claude and Codex need to know something, update this file or `.agents/shared/` first.

## Site Purpose

jitangupta.com is Jitan Gupta's personal brand hub for AI adoption in real engineering work. The site supports the YouTube channel and connects visitors to builds, articles, case studies, and ways to contact Jitan.

Core positioning:
- AI adoption practitioner
- Senior engineer who builds with AI and teaches what he learns
- Enterprise engineering experience is credibility, not the primary offer
- Avoid consulting-era positioning

Primary message:
> Building with AI. Teaching engineers.

## Stack

- Astro 5 + Tailwind CSS 4 + Flowbite + MDX
- Hosted on GitHub Pages
- Typography: Recoleta for headings, Elza for body, Inter for code/UI
- Main content lives under `src/pages`, `src/components`, `src/data`, and `src/content`

## Brand And Voice

Write like a warm senior colleague:
- Practical, clear, and grounded in real work
- Confident but humble
- Focused on patterns that work, not abstract best practices
- Builder-first, teacher-second, consultant-never

Use sparingly:
- "Building with AI. Teaching engineers."
- "Everything I teach comes from what I've built."
- "Real patterns from real systems."

Avoid:
- "guru", "expert", "master", "consultant"
- Strategy-call or agency-style copy
- Overstating claims without proof

Language:
- Website copy is English
- YouTube content may be described as "Videos in Hinglish"

## Current Navigation

Header:
- YouTube -> `https://www.youtube.com/@jitangupta`
- Builds -> `/builds`
- About -> `/about`
- Contact button -> `/contact`

Footer:
- YouTube
- Builds
- Case Studies
- Articles
- About
- Contact

Keep case studies and articles available, but do not make consulting the center of the site.

## Page Roles

- `/` introduces Jitan, highlights YouTube, builds, learning areas, and case studies
- `/builds` showcases open source and public projects
- `/about` tells the story: general store, startups, engineering, AI building, teaching
- `/case-studies` and `/case-studies/[slug]` provide proof from real systems
- `/article` and `/article/[slug]` hold written learning material
- `/contact` should stay simple and avoid consulting-era language
- `/privacy-policy` and `/terms-of-use` are utility pages

Do not recreate removed consulting pages such as migration approach or enterprise migration consultation unless explicitly requested.

## Design System

Use the existing global tokens in `src/styles/global.css`.

Important colors:
- Primary blue: `#0E7490`
- Accent orange: `#D97757`
- Page background: `#F8FAFC`
- Dark teal: `#0F766E` / `#115E59`
- Card surface: `#FFFFFF`

Guidelines:
- Primary actions generally use blue
- Accent highlights and selected CTA moments may use orange
- Page backgrounds should use Bright Snow instead of plain gray
- Do not reintroduce old green secondary utility classes
- Preserve the existing clean layout and typography unless the task asks for a redesign

## Content Data

Reusable content should live in data files when possible:
- `src/data/videos.ts` for featured YouTube videos
- `src/data/builds.ts` for builds/projects

Prefer updating data over hardcoding repeated cards into pages.

## Development Notes

- Preserve existing components and patterns unless there is a clear reason to change them
- Keep edits scoped to the requested work
- Reuse existing images and assets where possible, including the profile photo
- Run `npm run build` before finishing meaningful site changes
- Check responsive behavior for homepage, builds, about, and contact changes
- Do not delete self-notes or private content unless explicitly asked; keep it out of public navigation

## Repo Constants

Current site metadata should align with:

```ts
export const SITE_TITLE = "Jitan Gupta - Builder & Teacher";
export const SITE_DESCRIPTION = "I build with AI and teach engineers what I learn. 10+ years of real production experience shared through YouTube, open source, and case studies.";
export const SITE_URL = "https://jitangupta.com/";
```
