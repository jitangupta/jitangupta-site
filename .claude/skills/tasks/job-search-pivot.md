# Task: Pivot Site from Consultant to Job-Search Portfolio

**Time budget:** 15-20 mins, minimal changes only.

## Context
Site is currently framed as consulting services. Need to reposition as Senior Engineer portfolio for job search.

## Changes Required

### 1. HERO SECTION (src/components/Hero.astro)
- Change "CLOUD & PLATFORM ENGINEER" → "SENIOR ENGINEER"
- Change headline: "I help SaaS companies scale Kubernetes infrastructure" → "Building Cloud Infrastructure, AI-Native Apps & .NET Systems"
- Change subhead: "I help SaaS companies running 50+ tenants migrate to Kubernetes without breaking production." → "10 years on Azure delivering multi-tenant platforms, Kubernetes migrations, and AI-powered solutions."
- Change "Let's Talk" button text → "Get in Touch"
- Keep "View Work" button as-is

### 2. NAVIGATION (likely in Layout or Header component)
- "Services" → "Expertise"
- "Process" → Remove or rename to "Background"
- "LET'S TALK" → "CONTACT"
- Keep "Work" and "About"

### 3. "PROBLEMS I SOLVE" SECTION (src/components/Services.astro or similar)
- Rename section title to "What I Build" or "Areas of Expertise"
- Reframe 3 boxes from client problems to capabilities:
  - Box 1: "Multi-Tenant Kubernetes" - AKS, tenant isolation, YARP routing, GitOps
  - Box 2: "AI-Native Infrastructure" - RAG, LLMOps, Azure AI Foundry, Qdrant
  - Box 3: ".NET & Backend Systems" - microservices, Identity, APIs, .NET Core

### 4. "RECENT WORK" SECTION (src/components/Projects.astro or similar)
- Rename to "Project Highlights" or "Featured Projects"
- Keep case studies as-is (they're portfolio pieces now)

### 5. "HOW WE WORK TOGETHER" SECTION
- REMOVE entirely, or rename to "My Approach" with single paragraph

### 6. "ABOUT ME" SECTION (src/components/About.astro or similar)
- Update text to: "Senior Engineer with 10 years on Azure, building cloud infrastructure and .NET applications. Currently architecting a 14-microservice AKS migration for a 400+ tenant SaaS platform. I focus on multi-tenant Kubernetes, AI-native infrastructure, and scalable .NET systems."
- Remove: "I design, build, document, and hand off. No long-term dependencies, no vendor lock-in."

### 7. CTA SECTION ("Ready to scale?")
- Change heading to "Let's Connect" or "Get in Touch"
- Change copy to: "Open to Senior Engineer and Platform Engineer roles. Let's talk."

### 8. DO NOT CHANGE
- Case study pages (keep as portfolio)
- Visual design/colors/styling
- Images
- Footer structure

## Priority Order
If time runs short: Hero → Navigation → CTA section → About → Services reframe

## Verify
```bash
npm run build
npm run dev
# Check localhost:4321
```