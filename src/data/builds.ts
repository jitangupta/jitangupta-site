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
    title: "cb-mcp-server",
    description: "An MCP server that connects Content Board (my Firebase PWA for YouTube production) to Cowork, Claude's desktop agent. I built it live on the channel, episode by episode, so the whole thing is documented end to end. It's the working proof that the MCP tutorials on this site come from a server I actually ship and use every week.",
    techStack: ["Model Context Protocol", "TypeScript", "Cowork", "Firebase", "Content Board"],
    githubUrl: "https://github.com/jitangupta/cb-mcp-server",
    status: "live"
  },
  {
    title: "PromptMate",
    description: "Chrome extension that adds a personal prompt library sidebar to ChatGPT and Claude. Save prompts with tone and format settings, insert them in one click, and sync across devices via Google Drive. No backend server.",
    techStack: ["Chrome Extension", "JavaScript", "Google Drive API", "ChatGPT", "Claude"],
    githubUrl: "https://github.com/jitangupta/PromptMate",
    liveUrl: "https://chromewebstore.google.com/detail/promptmate/oknglgpcglngpaobpjndcaaljdchmgai",
    status: "live"
  },
  {
    title: "Cowork Boilerplate",
    description: "A folder-based workflow automation system for Claude Cowork. Define repeatable AI workflows once: manual pipelines with approval gates, scheduled tasks, multi-stage projects. Includes a YouTube content pipeline and daily community scout out of the box.",
    techStack: ["Claude Cowork", "Claude Code", "MCP", "AI Workflow"],
    githubUrl: "https://github.com/jitangupta/cowork-boilerplate",
    status: "live"
  },
  {
    title: "File Safety Guard",
    description: "A plugin for Claude Code and Cowork that prevents accidental file deletion and overwrites. Adds automatic backups, dry-run planning, and activity logging. A safety layer for AI-assisted development.",
    techStack: ["Claude Code", "Cowork", "Plugin", "Developer Safety"],
    githubUrl: "https://github.com/jitangupta/file-safety-guard",
    status: "live"
  },
  {
    title: "Content Board",
    description: "YouTube content management PWA for tracking ideas, scripts, feedback, and publishing workflow. Built to solve my own problem of managing 20+ video ideas at once.",
    techStack: ["React", "Firebase", "PWA", "Workflow Automation"],
    githubUrl: "https://github.com/jitangupta/content-board",
    status: "live"
  },
  {
    title: "jitangupta.com",
    description: "This site. A personal brand hub built with Astro and Tailwind CSS. Open source, deployed via GitHub Pages. Every design decision is documented.",
    techStack: ["Astro", "Tailwind CSS", "MDX"],
    githubUrl: "https://github.com/jitangupta/jitangupta-site",
    liveUrl: "https://jitangupta.com",
    status: "live"
  },
];
