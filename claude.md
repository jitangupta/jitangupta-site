# jitangupta.com Redesign Requirements

## Project Overview
Static site built with Astro, hosted on GitHub Pages. Positioning: Cloud & Platform Engineer specializing in Kubernetes infrastructure and AI-powered operational tools for multi-tenant SaaS platforms.

**Target Audience:** Potential consulting clients (Type B) - SaaS companies needing scalable infrastructure and intelligent operational tooling.

---

## Site Structure & Content

### 1. Hero Section

**Headline:**
"I help SaaS companies scale their Kubernetes infrastructure and build AI-powered operational tools."

**Subhead:**
"I specialize in multi-tenant SaaS platforms where standard Kubernetes setups don't work."

**Qualifier:**
"I work with SaaS companies running 50+ tenants who need reliable, scalable infrastructure - not quick fixes."

**CTA:**
"Let's talk" → Link to email (hi@jitangupta.com)

---

### 2. Services Section

Title: "What I Build"

Three service blocks:

#### Service 1: Kubernetes Infrastructure for SaaS
- Multi-tenant cluster design (AKS, EKS, GKE)
- Version-based tenant routing (AGIC, YARP, Ingress controllers)
- Helm/ArgoCD GitOps pipelines
- Zero-downtime deployment strategies
- Multi-region rollout strategies
- Auto-scaling and cost optimization

#### Service 2: AI-Powered Operational Tools
- RAG-based release recommendation engines
- Tenant onboarding automation
- Upgrade impact analysis
- Deployment orchestration

#### Service 3: Documentation & Handoff
- Architecture documentation
- Team training and knowledge transfer
- Runbooks and operational guides
- Clean exits - no dependency lock-in

---

### 3. How I Work Section

Title: "How I Work"

**Engagement Model:**

**1. Discovery & Design (1-2 weeks)**
- Audit current infrastructure
- Document requirements and constraints
- Design architecture and migration strategy
- **Deliverable:** Architecture proposal with timeline

**2. Build & Implement (4-8 weeks typical)**
- Hands-on development and deployment
- Regular progress updates and demos
- Iterate based on feedback
- **Deliverable:** Working system in production

**3. Document & Handoff (1 week)**
- Architecture documentation
- Runbooks and troubleshooting guides
- Team training sessions
- **Deliverable:** Your team owns and operates it

---

### 4. Work/Projects Section

Title: "Recent Work"

**Project 1: AI-Powered Deployment Orchestration**

Description:
"Built a RAG-based system that analyzes Jira tickets, tenant usage patterns, and release notes to recommend upgrade sequencing. Reduced release planning from 2 hours to 10 minutes."

**Tech Stack:** Azure AI Foundry, Qdrant, .NET Core, Docker, Vector Database

**Visual:** Include the recommendation engine architecture diagram (demodeck-upgrade-recommendation-design)

---

**Project 2: Multi-Tenant AKS Migration**

Description:
"Migrated 14 microservices from Azure VMs to AKS for 400+ tenant SaaS platform. Implemented version-based routing allowing last 4 releases to run simultaneously. Zero-downtime cutover with region-by-region rollout."

**Tech Stack:** AKS, AGIC, YARP, Helm, ArgoCD, .NET Core

**Visual:** TBD - will provide architecture diagram if available

---

### 5. About Section

Title: "About"

Content:
"Cloud & Platform Engineer with 8+ years building scalable backend systems and modernizing SaaS infrastructure. Currently leading AKS migration for a 400+ tenant platform.

I design, build, document, and hand off. No long-term dependencies, no vendor lock-in.

Based in Mumbai, working remotely with global teams."

---

### 6. Contact/Footer

**Contact:**
- Email: hi@jitangupta.com
- GitHub: github.com/jitangupta
- LinkedIn: linkedin.com/in/jitangupta

**Footer:**
© 2025 Jitan Gupta. Built with Astro.

---

## Design Requirements

### Visual Style
- Clean, minimal, technical aesthetic
- Dark mode preferred (matches GitHub profile)
- Code-like design - engineer first, not corporate
- Fast loading, no unnecessary animations or bloat
- Mobile responsive

### Typography
- Monospace or technical font for headings
- Clean, readable body text
- Code-style syntax highlighting for tech stack tags

### Color Palette
- Dark background (#0d1117 or similar GitHub dark)
- Accent color for CTAs and links (suggest: blue or cyan)
- Muted text colors for readability
- Tech stack tags: subtle background with border

### Layout
- Single page, scroll-based navigation
- Clear section separation
- Generous whitespace
- Content max-width: ~1200px, centered

### Components Needed
- Navigation (sticky/fixed)
- Service cards (3-column on desktop, stack on mobile)
- Project cards with image support
- Timeline/process visualization for "How I Work"
- Contact form or mailto link

---

## Content Tone & Voice

**Principles:**
- Direct and concise
- No marketing fluff or buzzwords
- Concrete examples over vague claims
- Technical accuracy
- Confidence without arrogance

**Avoid:**
- "Passionate about technology"
- "Cutting-edge solutions"
- "Thought leader"
- Testimonials (don't have consulting clients yet)
- Pricing information (discuss case-by-case)
- Long personal backstory

---

## Technical Requirements

**Platform:** Astro static site generator
**Hosting:** GitHub Pages
**Domain:** jitangupta.com

**Performance:**
- Lighthouse score target: 95+ across all metrics
- Optimized images (WebP format)
- Minimal JavaScript (Astro default behavior)
- Fast Time to First Byte

**SEO:**
- Meta descriptions for main page
- Open Graph tags for social sharing
- Semantic HTML structure
- Alt text for all images

---

## Assets Needed

**Images:**
1. Professional headshot (if available) - for About section
2. Architecture diagram: AI-powered recommendation engine (already have: recommendation-engine-architecture2.png)
3. Architecture diagram: Multi-tenant AKS setup (TBD - create or provide)
4. Favicon (technical/minimal design)

**Optional:**
- Simple iconography for service cards
- Process flow diagram for "How I Work" section

---

## Implementation Notes

**Priority Order:**
1. Hero + Services (core value prop)
2. Work/Projects (proof)
3. How I Work (process clarity)
4. About + Contact (trust signals)
5. Polish: animations, micro-interactions

**Content Updates:**
- Once RAG recommendation engine repo is public, link to it from Project 1
- Projects section should be easy to update (consider dynamic import from JSON/markdown)

**Future Expansion:**
- Blog section (only if actively writing content)
- Case studies (when consulting clients exist)
- Newsletter signup (if building audience)

---

## Success Criteria

**For Clients:**
- Clear understanding of services offered
- Confidence in technical capability (projects + tech stack)
- Easy path to contact
- Understanding of engagement process

**For Developer (Jitan):**
- Easy to maintain and update
- Fast deployment pipeline
- Content separated from code where possible
- Professional presence that matches Turing/Gun.io/GitHub positioning

---

## Next Steps After Implementation

1. Link to site from:
   - GitHub profile
   - Turing profile (if portfolio section exists)
   - Gun.io profile
   - LinkedIn

2. Create content:
   - Technical blog post about AKS migration or RAG system (optional but valuable for SEO)
   - LinkedIn post announcing site launch with link

3. Monitor:
   - Google Analytics or simple analytics (privacy-focused)
   - Track where traffic comes from
   - Identify which sections get most engagement

---

## Questions to Resolve During Development

1. Do you have architecture diagram for AKS multi-tenant setup, or should we create a simplified version?
2. Professional headshot available, or prefer no photo?
3. Any specific color preferences beyond dark mode?
4. Should "How I Work" section include estimated pricing ranges, or keep it fully custom?

---

**End of Requirements Document**