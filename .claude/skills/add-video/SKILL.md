# Add YouTube Video Skill

## When to Use
When user wants to add a new featured YouTube video to the site.

## Steps

### 1. Edit Video Data File
Location: `src/data/videos.ts`

### 2. Add Entry to Array
```typescript
{
  title: "Video Title",
  description: "1-2 sentence description of what the video covers",
  youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  thumbnail: "/images/videos/{slug}.jpg",  // or YouTube thumbnail URL
  publishedDate: "YYYY-MM-DD"
}
```

### 3. Thumbnail Options
- Option A: Use YouTube thumbnail directly: `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`
- Option B: Save custom thumbnail to `public/images/videos/`

### 4. Display Rules
- Homepage shows latest 3 videos (sorted by publishedDate descending)
- Each card shows: thumbnail, title, description, "Watch →" link
- Link opens YouTube in new tab

### 5. Verify
```bash
npm run build
npm run dev
# Check homepage "Latest Videos" section
```
