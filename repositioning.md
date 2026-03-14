# Website Repositioning: From Claude Code Practitioner to AI Adoption Guide

## Context for Claude Code

This is a development brief for jitangupta.com (Astro + Tailwind CSS, deployed on GitHub Pages). The goal is to reposition the site from "a guy who's really good at Claude Code" to "a senior engineer who deeply understands AI tools and helps teams adopt them responsibly." The site currently has two disconnected worlds — enterprise case studies (old identity) and Claude-specific builds (new identity) — that need to be woven into one coherent story.

**Do NOT change:** The page loading fix (point 1) is being handled separately. Nav structure, footer, and site framework stay as-is unless noted.

**Tech stack:** Astro, Tailwind CSS, MDX content, GitHub Pages.

---

## Problem: What the Site Currently Communicates

A first-time visitor sees:
1. **Homepage hero:** "I Build with AI. I Teach What I Learn." — generic, could be anyone
2. **3 videos:** All Claude Code tutorials (Claude Code production engineering, Cowork demo, Claude Code features)
3. **3 builds:** All Claude-branded tools (Cowork Boilerplate, File Safety Guard, Content Board)
4. **4 case studies:** Enterprise migrations (AKS, deployment orchestration, university credit system, user management) — zero connection to AI
5. **About page:** Still shows OLD identity — "Migration Specialist & Full-Stack Engineer", links to "Get a Free Strategy Call" and "Migration Approach" which are stale pages from the consulting era
6. **Case studies page:** Header says "Enterprise Migration Success Stories" — no AI angle at all

**The gap:** The enterprise experience proves depth and credibility. The AI builds prove hands-on practice. But they sit in separate universes. A visitor either sees "migration consultant" or "Claude fanboy" depending on which page they land on. Neither communicates "I can help your org adopt AI."

---

## Target Identity

**One line:** Jitan Gupta — Senior engineer with 10+ years of enterprise experience who now helps teams and individuals adopt AI tools responsibly.

**Three pillars of credibility:**
1. **Built at scale** — Enterprise systems, multi-tenant migrations, cloud architecture (the depth)
2. **Builds with AI daily** — Open-source tools, content workflows, real experiments (the practice)  
3. **Teaches what works** — YouTube, meetups, community (the accessibility)

**Key differentiator vs. other AI content creators:** He's not a prompt influencer. He has a decade of production engineering behind him. When he says "use AI responsibly," it comes from someone who's dealt with production incidents, scale problems, and enterprise constraints.

---

## Changes Required

### 1. Homepage — Rewrite the Hero Section

**Current:**
```
I Build with AI. I Teach What I Learn.
10+ years of enterprise engineering — migrations, multi-tenant systems, AI tools.
I build things, share what works, and help engineers level up.
```

**New direction:**
```
I Help Teams Adopt AI — Responsibly, Practically, and Without the Hype.
10+ years building enterprise systems. Now I teach professionals how to use AI tools 
in their actual work — not toy demos, not vibes, just what works.
```

The subtitle should emphasize the *outcome for the visitor*, not a self-description. The CTAs should be:
- Primary: "Watch on YouTube" (keep)
- Secondary: Change "See What I've Built" → "How I Can Help" (links to a new section or the About page)

### 2. Homepage — Bridge the Case Studies Section

**Current section title:** "Real Projects I've Built" with subtitle "Every lesson I share comes from something I've actually built. Here's the proof."

**Problem:** The case studies are presented as standalone portfolio pieces. They don't connect to the AI adoption narrative at all.

**New approach:** Reframe this section to tell the BRIDGE story. The section should communicate: "I've spent a decade solving hard engineering problems at scale. That's exactly why I understand what AI can and can't do in production."

**New section title:** "The Engineering Behind the Teaching"

**New subtitle:** "Before I taught AI adoption, I spent 10 years building enterprise systems — multi-tenant migrations, identity platforms, deployment orchestration. That background is why I know when AI helps and when it doesn't."

Each case study card should get a ONE-LINE AI bridge sentence appended below its existing title. These are editorial additions, not technical claims. Examples:

- **AKS Migration (400+ Tenants):** existing title + add a line like: "Today I'd use AI to automate the tenant-by-tenant migration validation. Back then, we did it manually."
- **AI-Powered Release Orchestration:** This one already has AI in the title — lean into it. Add: "This was AI in production before the hype cycle. Probabilistic models making real deployment decisions."
- **University Credit System:** Add: "Legacy modernization at its messiest. The kind of system complexity where AI-generated code breaks on day one if you don't understand the domain."
- **User Management Migration:** Add: "Identity systems have zero margin for error. AI accelerates the boring parts — but a human must own the critical path."

**Implementation:** Add an optional `aiBridge` field to the case study frontmatter/data model. Render it as a small italicized line below each card title on the homepage. If `aiBridge` is empty, don't render anything (backward compatible).

### 3. Homepage — Diversify the "Latest Videos" Section

**Current:** All 3 videos are Claude Code specific.

**Change:** Rename section to "Latest from YouTube" (already fine) but add a subtitle: "AI tools, engineering workflows, and lessons from building in production."

**Content note:** This is a content strategy issue, not a code change. But structurally, if the video data comes from a config/content file, add a `category` tag to each video entry (e.g., "claude-code", "ai-tools", "engineering", "career"). This enables future filtering and signals breadth even when the current videos are Claude-heavy.

**Implementation:** Add optional `category` field to video data model. No visual filtering needed yet — just the data structure for future use.

### 4. Homepage — Reframe "What I'm Building"

**Current:** All builds are Claude-branded (Cowork Boilerplate, File Safety Guard, Content Board).

**Change the section title** from "What I'm Building" → "Open Source & Tools"

**Add tag diversity:** The tags on each build currently say things like "Claude Cowork", "Claude Code", "MCP". Keep those (they're accurate) but also add broader tags where applicable:
- Content Board: add "Workflow Automation" tag
- Cowork Boilerplate: add "AI Workflow" tag  
- File Safety Guard: add "Developer Safety" tag

The point is that someone scanning tags doesn't see "Claude Claude Claude" — they see a mix of specific tools and general concepts.

### 5. Homepage — Add "Community & Events" Section

This is a NEW section on the homepage. Place it AFTER the "What I'm Building" / "Open Source & Tools" section and BEFORE the case studies section.

**Purpose:** This section bridges the homepage identity (broad AI adoption) to the meetup page (Claude-specific). Without it, the meetup is an orphan page that contradicts the homepage. With it, the meetup becomes proof that Jitan goes deep on the tools he recommends.

**Section title:** "Community"

**Section subtitle:** "I teach in-person, not just on screen. Hands-on sessions where people build real things with AI."

**Content — single featured event card:**

```
Claude at Work — Mumbai Meetup
A hands-on session where developers use Claude Code and non-technical 
professionals use Claude Cowork to build an MVP together, live. 
Currently looking for sponsors and venue partners.

CTA: "Learn more →" (links to /meetup/)
```

**Below the card, add a one-line editorial note styled as small/muted text:**
"I teach AI adoption broadly. Claude is where I go deepest — so that's where the first meetup starts."

This single sentence is the bridge. It resolves the tension between the vendor-neutral homepage and the Claude-branded meetup. It tells the Anthropic reader "this guy is a Claude advocate" and tells everyone else "he's not locked into one vendor." Both readings are honest.

**Implementation:** Create a simple card component or section. One event for now, but structure the data so future events can be added (e.g., an array of event objects with title, description, link, status). The status field should support values like "upcoming", "looking-for-venue", "past" for future use.

**Data model for event:**
```
{
  title: "Claude at Work — Mumbai Meetup",
  description: "A hands-on session where developers use Claude Code and non-technical professionals use Claude Cowork to build an MVP together, live.",
  status: "looking-for-venue",  // upcoming | looking-for-venue | past
  link: "/meetup/",
  statusLabel: "Accepting sponsors & venue partners"
}
```

---

### 6. About Page — Full Rewrite

The About page is the most broken part of the site. It still says "Migration Specialist & Full-Stack Engineer" and links to stale pages ("/migration-approach", "/enterprise-migration-consultation").

**New About page structure:**

```
# About Jitan Gupta

## The Short Version
I'm a Senior Platform Engineer with 10+ years in enterprise software. 
I now teach teams and individuals how to adopt AI tools — practically, 
responsibly, and in ways that actually stick in daily work.

Based in Mumbai. Teaching globally through YouTube, meetups, and open source.

## The Long Version

### The General Store (12 years before tech)
Before I wrote a line of code, I ran a general store for 12 years. 
That's where I learned operations, customer problems, and the difference 
between what people say they need and what actually helps them.

### The Engineering Years (2015–2024)
I spent 9+ years as a .NET developer and then platform engineer — 
building multi-tenant SaaS, leading Kubernetes migrations for 400+ tenants, 
designing identity platforms handling 50K daily authentications, and 
architecting cloud infrastructure on Azure.

I worked on the kind of systems where downtime costs real money and 
shortcuts create production incidents. That's the lens I bring to AI adoption — 
not everything needs AI, and the things that do need it done carefully.

### The Startup Attempts (2018–2022)
I tried to build 5 startups in parallel with my engineering career. 
One scaled a SaaS product to 30K monthly active users before shutting down. 
The others taught me what most AI hype skips over — distribution, 
sustainability, and knowing when to stop.

### Now: Teaching AI Adoption
On January 1, 2026, I found the thread connecting all of it: 
I'm a guide who transmits understanding so others can build their lives.

I build with AI tools daily — Claude, Cursor, Copilot, open-source models. 
I publish what works on YouTube (in Hinglish), ship open-source tools, 
and run hands-on meetups in Mumbai where people build real things with AI.
Claude is the tool I go deepest on — which is why my first meetup series 
starts there — but I teach across the AI tooling landscape.

I don't sell hype. I teach from practice.

## What I Focus On
- **AI-Assisted Development:** How engineering teams can use AI tools 
  without losing code quality or architectural control
- **AI for Non-Technical Professionals:** Document automation, workflow 
  optimization, and task management using AI — no coding required
- **Responsible Adoption:** When to use AI, when not to, and how to 
  evaluate tools without getting locked into vendor hype

## Connect
- YouTube: @jitangupta (Hinglish — Cloud, Kubernetes, AI)
- LinkedIn: /in/jitangupta
- GitHub: /jitangupta
- Email: hi@jitangupta.com
```

**Implementation notes:**
- Remove all links to "/migration-approach" and "/enterprise-migration-consultation" — these are dead identity pages
- Remove the old footer that links to those pages
- Use the same layout/template as the current About page but with this new content
- The photo can stay as-is

### 7. Case Studies Page — Reframe the Header

**Current:**
```
Real-World Enterprise Migration Success Stories
Strategic migration initiatives that transformed enterprise technology landscapes...
```

**New:**
```
Case Studies
Engineering work from 10 years of building enterprise systems. Multi-tenant 
migrations, cloud architecture, identity platforms, and AI-powered deployment. 
These are the problems that shaped how I think about technology — and why I 
approach AI adoption the way I do.
```

**Also:** The case studies page currently uses the OLD nav (Migration Approach, Case Studies, Get a Free Strategy Call). It needs to use the NEW nav (YouTube, Builds, About, Contact) — same as the homepage. This is likely a layout/template mismatch in Astro.

### 8. Nav Consistency Fix

Two different navs exist across the site:
- **Homepage, Builds:** YouTube, Builds, About, Contact (correct — new identity)
- **About, Case Studies:** Migration Approach, Case Studies, Get a Free Strategy Call (wrong — old identity)

**Fix:** Ensure ALL pages use the new nav. Remove any references to the old nav layout.

### 9. Footer Consistency Fix

Same issue as nav. The old footer has links to:
- "Get a Free Strategy Call"
- "Migration Approach"  
- "Newsletter"
- "Self Notes"

**New footer** (matching homepage): YouTube, Builds, Case Studies, Articles, About, Contact.

Ensure all pages use the new footer template.

### 10. Sitewide Meta/SEO Update

**Current page title (About):** "Jitan Gupta | Migration Specialist & Full-Stack Engineer | Legacy to Cloud"

**New pattern:** "Jitan Gupta — AI Adoption Practitioner | [Page-specific subtitle]"

Update `<title>` and `<meta description>` for:
- **Homepage:** "Jitan Gupta — Helping Teams Adopt AI Responsibly"
- **About:** "About Jitan Gupta — Engineer, Builder, AI Adoption Teacher"
- **Builds:** "Builds — Open Source Tools by Jitan Gupta"
- **Case Studies:** "Case Studies — Enterprise Engineering by Jitan Gupta"

---

## Execution Order

This is the recommended order for Claude Code to work through these changes:

1. **Nav + Footer consistency** (items 8, 9) — fixes the broken experience first
2. **About page rewrite** (item 6) — establishes the new identity narrative  
3. **Homepage hero rewrite** (item 1) — first impression change
4. **Case studies bridge** (items 2, 7) — connects the two worlds
5. **Community & Events section** (item 5) — bridges homepage to meetup page
6. **Builds section reframe** (item 4) — tag and title adjustments
7. **Video section structure** (item 3) — data model addition
8. **SEO/meta updates** (item 10) — final polish

---

## What NOT to Change

- **Case study content itself** — don't rewrite the actual case study pages. They're employer IP presented carefully. Only change how they're INTRODUCED on listing pages.
- **Video embeds/thumbnails** — keep current videos. The diversity issue is a content problem solved by making new videos, not by hiding existing ones.
- **Color scheme, typography, overall design language** — the visual identity is fine. This is a narrative/content repositioning, not a redesign.
- **Builds page structure** — keep the current card layout. Just update tags and section title.