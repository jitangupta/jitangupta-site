export interface Build {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  youtubeUrl?: string;
  image?: string;
  status: 'live' | 'in-progress' | 'planned';
}

export const builds: Build[] = [
  {
    title: "Cowork Boilerplate",
    description: "A folder-based workflow automation system for Claude Cowork. Define repeatable AI workflows once — manual pipelines with approval gates, scheduled tasks, multi-stage projects. Includes a YouTube content pipeline and daily community scout out of the box.",
    techStack: ["Claude Cowork", "Claude Code", "MCP"],
    githubUrl: "https://github.com/jitangupta/cowork-boilerplate",
    status: "live"
  },
  {
    title: "File Safety Guard",
    description: "A plugin for Claude Code and Cowork that prevents accidental file deletion and overwrites. Adds automatic backups, dry-run planning, and activity logging — a safety layer for AI-assisted development.",
    techStack: ["Claude Code", "Cowork", "Plugin"],
    githubUrl: "https://github.com/jitangupta/file-safety-guard",
    status: "live"
  },
  {
    title: "Content Board",
    description: "YouTube content management PWA for tracking ideas, scripts, feedback, and publishing workflow. Built to solve my own problem of managing 20+ video ideas at once.",
    techStack: ["React", "Firebase", "PWA"],
    githubUrl: "https://github.com/jitangupta/content-board",
    status: "in-progress"
  },
  {
    title: "jitangupta.com",
    description: "This site — personal brand hub built with Astro and Tailwind CSS. Open source, deployed via GitHub Pages. Every design decision is documented.",
    techStack: ["Astro", "Tailwind CSS", "MDX"],
    githubUrl: "https://github.com/jitangupta/jitangupta-site",
    liveUrl: "https://jitangupta.com",
    status: "live"
  },
];
