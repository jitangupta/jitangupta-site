# jitangupta.com Portfolio Site

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

## Conventions
- Use dark theme colors: bg-[#0d1117], text-[#c9d1d9]
- Case studies use prose-invert styling
- All components use Tailwind utility classes, no separate CSS files
- SEO: Every page needs BaseHead with title, description, keywords

## Common Tasks
- Adding case study: Create .md in src/content/caseStudies/
- Adding article: Create .md in src/content/articles/
- Component pattern: Server components by default, client:load for interactivity