export interface Project {
  id: string;
  title: string;
  category: "fullstack" | "mobile" | "ai-automation" | "academic";
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  featured: boolean;
}

export const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "fullstack", label: "Full-Stack Web" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "academic", label: "Academic Support" },
] as const;

export const PROJECTS: Project[] = [
  {
    id: "nexus-campus",
    title: "Nexus Campus Assignment & Grading Portal",
    category: "academic",
    description:
      "A complete academic portal built for university labs. Supports secure assignment submissions, automated grading scripts integration, and real-time dashboard analytics for professors.",
    tags: ["React", "NestJS", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://nexus-campus.nexvorcodelabs.me",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    featured: true,
  },
  {
    id: "swiftride",
    title: "SwiftRide Driver-Passenger Matcher",
    category: "mobile",
    description:
      "A cross-platform mobile ride-hailing app. Utilizes geo-location queries, websockets for driver coordination, and Firebase Auth with Stripe processing.",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps SDK"],
    liveUrl: "https://swiftride.nexvorcodelabs.me",
    githubUrl: "https://github.com/Nexvor-Lab/swiftride-app",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    featured: true,
  },
  {
    id: "cognitivedoc",
    title: "CognitiveDoc AI Summarizer",
    category: "ai-automation",
    description:
      "An AI document processing assistant that ingests large academic PDFs, highlights core conclusions, and outputs fully formatted BibTeX and IEEE citation records.",
    tags: ["React", "FastAPI", "Gemini API", "Python", "LlamaIndex"],
    liveUrl: "https://cognitivedoc.nexvorcodelabs.me",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    featured: true,
  },
  {
    id: "devflow-automation",
    title: "DevFlow Deployment Automator",
    category: "fullstack",
    description:
      "An automated release pipeline connecting GitHub webhooks, n8n workflows, AWS ECS, and Slack reports. Provides developers with zero-friction build alerts.",
    tags: ["Next.js", "n8n", "AWS ECS", "Docker", "Node.js"],
    liveUrl: "https://devflow.nexvorcodelabs.me",
    githubUrl: "https://github.com/Nexvor-Lab/devflow-pipeline",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    featured: false,
  },
];
