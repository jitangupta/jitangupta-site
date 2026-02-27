# Add Build/Project Skill

## When to Use
When user wants to add a new open source project or build to the site.

## Steps

### 1. Edit Builds Data File
Location: `src/data/builds.ts`

### 2. Add Entry to Array
```typescript
{
  title: "Project Name",
  description: "2-3 sentence description of what it does and why",
  techStack: ["Astro", "TypeScript", "Tailwind"],  // relevant tech tags
  githubUrl: "https://github.com/jitangupta/repo-name",  // optional
  liveUrl: "https://example.com",  // optional
  youtubeUrl: "https://youtube.com/watch?v=...",  // optional
  image: "/images/builds/{slug}.png",  // optional
  status: "live"  // "live" | "in-progress" | "planned"
}
```

### 3. Status Badges
- `live` → Green badge
- `in-progress` → Orange/accent badge
- `planned` → Gray badge

### 4. Display Rules
- Homepage "What I'm Building" shows latest 2-3 projects
- `/builds` page shows all projects
- Each card: name, description, tech stack tags, action links, status badge

### 5. Color Classes (v2.0)
- Tech stack tags: `bg-primary-50 text-primary-700` (blue)
- Action buttons: `text-accent-500 hover:text-accent-600` (orange)
- Status badge (live): `bg-green-100 text-green-700`
- Status badge (in-progress): `bg-accent-100 text-accent-700`

### 6. Verify
```bash
npm run build
npm run dev
# Check /builds page and homepage "What I'm Building" section
```
