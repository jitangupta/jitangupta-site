export interface Video {
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnail: string;
  publishedDate: string;
  category?: 'claude-code' | 'ai-tools' | 'engineering' | 'career';
}

export const featuredVideos: Video[] = [
  {
    title: "OpenClaw Tutorial: Build Your Own AI Agent (Setup to Security Explained)",
    description: "How OpenClaw actually works internally, why it burns 10,000 tokens before your first message, and what makes it fundamentally different from Claude Code or Cowork. Real use cases, honest security risks, and whether you should try it today.",
    youtubeUrl: "https://youtu.be/TCdpb3vLy-Q",
    thumbnail: "https://i.ytimg.com/vi/TCdpb3vLy-Q/hqdefault.jpg",
    publishedDate: "2026-03-27",
    category: "ai-tools"
  },
  {
    title: "I Built an AI Website Monitor in Minutes: Claude Cowork Tutorial (No Code)",
    description: "How Claude Cowork automates the entire workflow (reading websites, analyzing content, and delivering summaries directly to Slack) without a single line of code. The Brain, Eyes, Mouth mental model for AI automation.",
    youtubeUrl: "https://youtu.be/rKV2hparq14",
    thumbnail: "https://i.ytimg.com/vi/rKV2hparq14/hqdefault.jpg",
    publishedDate: "2026-03-19",
    category: "ai-tools"
  },
  {
    title: "Git Worktree + Claude Code: Run 3 AI Agents on One Repo",
    description: "One terminal, one agent, 15-minute wait per task. What if you ran 3 AI agents in parallel on the same codebase? Production-grade workflow for 3-4x development speed without sacrificing code quality or safety.",
    youtubeUrl: "https://youtu.be/yJWw4HAEqG0",
    thumbnail: "https://i.ytimg.com/vi/yJWw4HAEqG0/hqdefault.jpg",
    publishedDate: "2026-03-12",
    category: "claude-code"
  },
  // Previous featured — uncomment to swap back if needed
  // {
  //   title: "Context Engineering for Claude Code — Why Prompting Alone Isn't Enough",
  //   description: "Stop one-shot prompting. Engineer your AI context with CLAUDE.md, custom commands, skills, and task phases — then let Claude build a full React + Firebase app from structured context.",
  //   youtubeUrl: "https://youtu.be/7JVA1LjRNAw",
  //   thumbnail: "https://i.ytimg.com/vi/7JVA1LjRNAw/hqdefault.jpg",
  //   publishedDate: "2026-02-27",
  //   category: "claude-code"
  // },
  // {
  //   title: "Don't Ship AI Code Before These 5 Checks — AI Code Review Guide",
  //   description: "AI-generated code is easy to write, but will it survive production? The 5-guardrail framework that separates safe deployments from silent bugs.",
  //   youtubeUrl: "https://youtu.be/mP4igQr2R0E",
  //   thumbnail: "https://i.ytimg.com/vi/mP4igQr2R0E/hqdefault.jpg",
  //   publishedDate: "2026-03-05",
  //   category: "claude-code"
  // },
  // {
  //   title: "Claude Cowork: This AI Works On Your Computer — Not Just Chat",
  //   description: "Live demo: Claude Cowork running 4 real tasks on my laptop — browser automation, PPT creation, YouTube data analysis, and parallel multi-tasking. Not a simulation.",
  //   youtubeUrl: "https://youtu.be/xRHJZLep6tY",
  //   thumbnail: "https://i.ytimg.com/vi/xRHJZLep6tY/hqdefault.jpg",
  //   publishedDate: "2026-02-19",
  //   category: "claude-code"
  // },
  // {
  //   title: "3 Powerful Claude Code Features Every Developer Should Use (Hindi)",
  //   description: "3 features professionals use daily: /init for persistent memory, Plan Mode for think-before-code, and --add-dir for multi-project context. Live demo: 53 unit tests written automatically on a real .NET SaaS app.",
  //   youtubeUrl: "https://youtu.be/hkYEk-JqafQ",
  //   thumbnail: "https://i.ytimg.com/vi/hkYEk-JqafQ/hqdefault.jpg",
  //   publishedDate: "2026-02-12",
  //   category: "claude-code"
  // },
];