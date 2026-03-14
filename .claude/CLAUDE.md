# CLAUDE.md — jitangupta.com v2.0: Personal Brand Hub

## Context

Jitan Gupta builds real things with AI and teaches engineers how to do the same.

The site is a **personal brand hub** — YouTube content, open source projects, articles, and case studies. YouTube is central; the site supports and amplifies the channel.

**Positioning shift (complete):**
- ~~"Enterprise Migration Expert" (consulting)~~ → DELETED
- ~~"Cloud & AI Guide" (teacher-only)~~ → SUPERSEDED
- ~~"Builder & Teacher"~~ → SUPERSEDED
- **Current: "AI Adoption Practitioner"** — Senior engineer who helps teams and individuals adopt AI tools responsibly. The enterprise engineering background is the credibility; the AI practice is the proof; teaching is the channel.

---

## Stack

- **Framework:** Astro 5.3 + Tailwind CSS 4 + Flowbite + MDX
- **Hosting:** GitHub Pages
- **Repo:** https://github.com/jitangupta/jitangupta-site
- **Typography:** Recoleta (headings), Elza (body), Inter (code/UI) — no changes needed

---

## Color System — Cerulean Blue + Claude Orange + Bright Snow

### Design Intent
- **Blue (Cerulean `#0E7490`)** = primary action color — buttons, CTAs, nav highlights
- **Orange (Claude Burnt Peach `#D97757`)** = accent color — links, highlights, hover hints, card accents
- **Bright Snow (`#F8FAFC`)** = page background (replaces pure white/gray-100)
- **Teal (`#0F766E` / `#115E59`)** = available for dark sections/contrast
- **White (`#FFFFFF`)** = card surfaces (contrast against Bright Snow)

### What Was Removed
- All green secondary utilities (`bg-secondary-*`, `text-secondary-*`, `border-secondary-*`) — deleted
- Old orange primary scale — replaced with cerulean blue as primary
- Orange moved to `accent` utility class set

### Implementation in `src/styles/global.css`
All color classes defined in lines 1-71. Key find/replace rules:

| Search | Replace | Notes |
|--------|---------|-------|
| `bg-secondary-600` | `bg-primary-600` | Green buttons → blue buttons |
| `hover:bg-secondary-800` | `hover:bg-primary-700` | Button hover states |
| `text-secondary-600` | `text-primary-600` | Green text → blue text |
| `text-orange-500` | `text-accent-500` | Inline orange → accent token |
| `text-orange-600` | `text-accent-600` | Inline orange → accent token |
| `bg-gray-100` (page bg) | `bg-[#F8FAFC]` or `bg-page` | Page wrappers |
| `text-primary-500` (old orange) | `text-accent-500` | Old orange refs → accent |

---

## Site Structure

### Navigation (Header)

`YouTube | Builds | About | [Contact button]`

| Nav Item | Link | Notes |
|----------|------|-------|
| YouTube | `https://www.youtube.com/@jitangupta` (external) | Opens in new tab |
| Builds | `/builds` | New page — open source projects |
| About | `/about` | Full rewrite |
| Contact | `/contact` | Keep, minor update |

**Removed from nav:** Case Studies (accessible via homepage + footer + direct URL), Learn, Migration Approach

### Full Page Map

| Page | Status |
|------|--------|
| `/` | **Rework** — new hero, YouTube section, Builds section |
| `/about` | **Full rewrite** — story + builder-teacher identity |
| `/builds` | **New page** — open source projects showcase |
| `/case-studies` | **Keep** — removed from main nav only |
| `/case-studies/[slug]` | **Keep** |
| `/article` | **Keep & grow** |
| `/article/[slug]` | **Keep** |
| `/contact` | **Minor copy update** — remove consulting language |
| `/learn` | **Delete** — redundant |
| `/migration-approach` | **Delete** — old consulting |
| `/enterprise-migration-consultation` | **Delete** — old consulting |
| `/self-notes` | **Remove from public nav** — keep files |
| `/privacy-policy` | **Keep** |
| `/terms-of-use` | **Keep** |

### Footer

**Links:** `YouTube 🇮🇳 · Builds · Case Studies · Articles · About · Contact`
**Tagline:** "Building with AI. Teaching engineers."
**Social:** YouTube, LinkedIn, GitHub (keep all)

---

## Page Specifications

### Homepage (`/`) — Major Rework

**Section order:** Hero → Latest from YouTube → What I'm Building → What You'll Learn → Case Studies → CommonCTA

#### Hero
```
I Build with AI.
I Teach What I Learn.

10+ years of enterprise engineering — migrations, multi-tenant systems, AI tools.
I build things, share what works, and help engineers level up.

[Watch on YouTube]  [See What I've Built]
```
- Photo-left, text-right layout (keep)
- Primary CTA → YouTube (orange filled button)
- Secondary CTA → `/builds` (outlined button)
- No checkmarks, no "Hinglish" mention in hero

#### Latest from YouTube (NEW section)
- Heading: "Latest Videos"
- 2-3 video cards in responsive grid (md:grid-cols-3)
- Each card: thumbnail, title, description, "Watch →" link
- Bottom: "See all videos →" to YouTube channel
- Data source: `src/data/videos.ts`

#### What I'm Building (NEW section)
- Heading: "What I'm Building"
- 2-3 project cards with: name, description, tech stack tags, GitHub/demo links
- Bottom: "See all projects →" to `/builds`
- Data source: `src/data/builds.ts`

#### What You'll Learn (EXISTING — update)
- Keep 4-card grid
- Replace "Coming Soon →" with actual YouTube playlist links where content exists
- Update color classes to new tokens
- Consider renaming "Agents & Multi-Agent Systems" → "AI Tools for Engineers"

#### Case Studies (EXISTING — minor)
- Keep as-is, colors update automatically from global.css

#### CommonCTA (EXISTING — update)
- "10 years" → "10+ years"
- Add mention of building with AI / open source
- Button: orange (not green)

### About Page (`/about`) — Full Rewrite

**Title:** `About Jitan Gupta — From General Store to Platform Engineer to Teacher`
**Meta:** `12 years running a store, 5 startups, 10+ years engineering. Now building with AI and teaching engineers through YouTube and open source.`

**Sections:**
1. **The Story** — general store background, 5 startups, realization about teaching
2. **What I've Built** — proof checklist (AKS migration, RAG deployment, identity platform)
3. **What I Do Now** — YouTube in Hinglish, open source, articles, real patterns
4. **Connect** — YouTube, LinkedIn, GitHub CTAs (remove "Open to roles")

### Builds Page (`/builds`) — New Page

**File:** `src/pages/builds.astro`
**Hero:** "Things I've Built" + building in public message
**Content:** Project cards with image, title, description, tech stack tags, GitHub/demo/YouTube links, status badge
**Data source:** `src/data/builds.ts`

### Contact Page — Minor Update
Remove any consulting-era language. Keep simple.

---

## New Files to Create

| File | Purpose |
|------|---------|
| `src/data/videos.ts` | Featured YouTube videos data |
| `src/data/builds.ts` | Open source projects data |
| `src/pages/builds.astro` | Builds showcase page |

---

## Components to Update

| Component | Changes |
|-----------|---------|
| `Header.astro` | Nav: YouTube (external), Builds, About, Contact button (orange) |
| `Footer.astro` | Links update, tagline: "Building with AI. Teaching engineers." |
| `CommonCTA.astro` | Bio: "10+" years, AI mention. Button: orange |
| `BaseHead.astro` | Verify meta pulls from updated consts |

---

## Global File Updates

### `src/consts.ts`
```typescript
export const SITE_TITLE = 'Jitan Gupta — Builder & Teacher';
export const SITE_DESCRIPTION = 'I build with AI and teach engineers what I learn. 10+ years of real production experience shared through YouTube, open source, and case studies.';
export const SITE_URL = "https://jitangupta.com/";
```

---

## Voice & Tone

- Warm and approachable — senior colleague energy
- Confident but humble — "I've built this, let me share"
- Practical — "patterns that work" not "best practices"
- Lead with credibility — real projects, real numbers
- Avoid: "guru", "expert", "master", "consultant"
- Identity: **builder who teaches**, not teacher-only or consultant

### Key Phrases (use sparingly)
- "Building with AI. Teaching engineers."
- "Everything I teach comes from what I've built."
- "Real patterns from real systems."

---

## Content Language

- **Website:** English — warm, approachable, like explaining to a colleague
- **YouTube videos:** Hinglish (Hindi + English) — mentioned on About page and near YouTube links
- **Mention format:** "Videos in Hinglish 🇮🇳"

---

## What NOT to Change

- Overall layout structure (clean, works well)
- Case studies content (builds credibility)
- Profile photo (friendly, approachable)
- Typography (Recoleta + Elza + Inter)
- Footer structure (just update links/text/tagline)

---

## Implementation Priority

### Phase 1 — Fix the Broken
1. `global.css` — Replace color system, remove green secondary
2. Find/replace `bg-secondary-*` → `bg-primary-*` across all files
3. `about.astro` — Full rewrite
4. `Header.astro` — Update nav
5. `Footer.astro` — Update links + tagline
6. Delete `migration-approach.astro`
7. Delete `enterprise-migration-consultation.astro`
8. `consts.ts` — New title + description

### Phase 2 — Build the New
9. Create `src/data/builds.ts`
10. Create `src/data/videos.ts`
11. Create `src/pages/builds.astro`
12. `index.astro` — New hero, YouTube section, Builds section
13. `CommonCTA.astro` — Update bio + buttons
14. Delete `learn.astro`
15. `contact.astro` — Minor copy update

### Phase 3 — Polish
16. Test responsive (mobile + desktop)
17. Verify no broken links
18. Check meta tags all pages
19. Deploy + verify production

---

## Success Criteria

When someone lands on jitangupta.com, they should think:
> "This person actually builds stuff AND teaches. I want to follow him."

Not:
> "This is a consultant trying to sell me a strategy call."

---

## Notes for Claude Code

- Site is built with Astro 5.3 + Tailwind CSS 4
- Preserve existing styling and components where possible
- Bright Snow (`#F8FAFC`) is the correct page background
- Make incremental commits with clear messages
- Test locally before deployment (`npm run dev` / `npm run build`)
- Images are in appropriate directories — reuse existing icons where possible
- The spec file `jitangupta-site-update-spec.md` in repo root has full details including exact CSS, data types, and copy

---

## Future Additions (NOT in this update)

| Feature | Add When |
|---------|----------|
| Events/Meetups section | After 2-3 meetups hosted |
| Speaking/Guest Lectures | After 2-3 college talks |
| Corporate Training page | After first corporate gig |
| Testimonials | After real feedback collected |
| Newsletter | When clear value prop exists |
