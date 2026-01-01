# jitangupta.com Portfolio Site

## Site Purpose
Senior Engineer portfolio showcasing Azure infrastructure, Kubernetes, and .NET expertise. Optimized for job search.

## Design Direction (Active Revamp)
- **Dark mode with vibrant accent colors** - Like sedai.io, not muted GitHub-dark
- **Kubernetes/migration stack iconography** in hero section
- **Professional consulting practice** feel with energetic, modern aesthetic

Reference: https://www.sedai.io/

## Tech Stack
- Framework: Astro 5.3 with MDX
- Styling: Tailwind CSS 4.0
- Content: MDX collections (articles, caseStudies, notes)
- Deployment: Static build

## Project Structure
- `src/content/` - MDX content collections
- `src/components/` - Astro components (Hero, Services, Projects, etc.)
- `src/layouts/` - Page layouts (CaseStudyLayout, ArticlePost, etc.)
- `src/pages/` - Route pages

## Color Palette (Dark + Vibrant Accents)
**Backgrounds:**
- Primary dark: #0A0A0F or #0D0D12
- Card/elevated: #12121A or #1A1A24

**Vibrant Accents:**
- Electric Cyan: #00D4FF
- Vivid Purple: #8B5CF6
- Hot Pink: #EC4899
- Bright Green: #10B981
- Orange Energy: #F97316

**Tech Brand Colors:**
- Kubernetes Blue: #326CE5
- Azure Blue: #0078D4
- Docker Blue: #2496ED
- ArgoCD Orange: #EF7B4D

## Conventions
- Case studies follow Code-Maze technical narrative style
- All components use Tailwind utility classes, no separate CSS files
- SEO: Every page needs BaseHead with title, description, keywords
- Hero icons should feature K8s, Docker, Azure, ArgoCD, Helm visuals with glow effects

## Common Tasks
- Adding case study: Create .md in src/content/caseStudies/ (use case-study-writer agent)
- Adding article: Create .md in src/content/articles/
- Component work: Use astro-component agent for design context