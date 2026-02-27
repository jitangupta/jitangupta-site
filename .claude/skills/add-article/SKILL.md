# Add Article Skill

## When to Use
When user wants to add a new article or blog post to the site.

## Steps

### 1. Create MDX File
Location: `src/content/article/{slug}.mdx`

### 2. Required Frontmatter
```yaml
---
title: "Article Title"
seoTitle: "SEO Title | Jitan Gupta"
description: "SEO description 150-160 chars"
pubDate: "YYYY-MM-DD"
heroImage: "/images/{image-name}.png"
articleTag: "Category"  # e.g., "AI", "Kubernetes", "Cloud", "Engineering"
keywords: "keyword1, keyword2"
author: "Jitan Gupta"
robots: "index, follow"
ogType: "article"
canonicalUrl: "https://jitangupta.com/article/{slug}/"
---
```

### 3. Content Guidelines
- Use ## for main sections, ### for subsections
- Include code blocks with language specifier
- Add images with descriptive alt text
- Link to related YouTube videos where relevant
- Link to related case studies where relevant

### 4. Voice & Tone
- Warm, approachable — explaining to a colleague
- Practical — "patterns that work" not "best practices"
- Lead with credibility — real projects, real numbers
- Avoid: "guru", "expert", "master", "consultant"

### 5. Verify
```bash
npm run build
npm run dev
# Visit http://localhost:4321/article/{slug}
```
