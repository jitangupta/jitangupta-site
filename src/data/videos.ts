export interface Video {
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnail: string;
  publishedDate: string;
}

export const featuredVideos: Video[] = [
  {
    title: "Engineering Claude Code for Production - Beyond Prompting",
    description: "Stop one-shot prompting. I engineered Claude Code with CLAUDE.md, custom commands, skills, and task phases — then let it build a full React + Firebase app from structured context.",
    youtubeUrl: "https://youtu.be/7JVA1LjRNAw",
    thumbnail: "https://i.ytimg.com/vi/7JVA1LjRNAw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBcIfNYVZ6gRu3EJd69pGUTtKu6bw",
    publishedDate: "2026-02-27"
  },
  {
    title: "Claude Cowork: This AI Works On Your Computer — Not Just Chat",
    description: "Live demo: Claude Cowork running 4 real tasks on my laptop — browser automation, PPT creation, YouTube data analysis, and parallel multi-tasking. Not a simulation.",
    youtubeUrl: "https://youtu.be/xRHJZLep6tY",
    thumbnail: "https://i.ytimg.com/vi/xRHJZLep6tY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCZmSW67uK1XFWv2pmNKCqVASVOAQ",
    publishedDate: "2026-02-19"
  },
  {
    title: "3 Powerful Claude Code Features Every Developer Should Use (Hindi)",
    description: "3 features professionals use daily: /init for persistent memory, Plan Mode for think-before-code, and --add-dir for multi-project context. Live demo: 53 unit tests written automatically on a real .NET SaaS app.",
    youtubeUrl: "https://youtu.be/hkYEk-JqafQ",
    thumbnail: "https://i.ytimg.com/vi/hkYEk-JqafQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBWxJDJzQhpyEDuz9YLpiZ4LtLkYg",
    publishedDate: "2026-02-12"
  },
  // {
  //   title: "Fluent Bit Failed on Half My AKS Cluster — Here's What I Did",
  //   description: "Step-by-step walkthrough of building a production-ready RAG pipeline using Azure AI Foundry and vector databases.",
  //   youtubeUrl: "https://youtu.be/xk8F-uzq0ko",
  //   thumbnail: "https://i.ytimg.com/vi/xk8F-uzq0ko/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLADiFT3RO01ew8M785atyGSV6j6dg",
  //   publishedDate: "2026-01-29"
  // },
];
