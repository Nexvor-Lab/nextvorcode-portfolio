export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  snippet: string;
  author: {
    name: string;
    role: string;
  };
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "optimizing-webgl-performance-in-react",
    title: "Optimizing WebGL Raymarching Performance in React Applications",
    date: "June 23, 2026",
    readTime: "5 min read",
    category: "Graphics & Performance",
    snippet:
      "How we optimized a custom WebGL raymarching canvas to run at 60 FPS across mobile and desktop devices without breaking GPU pipelines.",
    author: {
      name: "Nexvor Team",
      role: "Core Engineers",
    },
    content: `
      <p class="lead">3D graphics on the web are incredibly engaging, but if not managed correctly, WebGL raymarching shaders can easily choke mobile devices and older laptops. Here's a breakdown of how we fixed a viewport lag on our landing page background.</p>
      
      <h2>The Problem: 50 Billion GPU Operations Per Second</h2>
      <p>Our landing page featured a custom refraction Prism drawing using a Raymarching Fragment shader. At a default Device Pixel Ratio (DPR) of 2 on a standard 1080p viewport, the shader was computing 100 loops of ray-intersection coordinates for over 8 million pixels. This ran smoothly on dedicated GPUs, but caused severe layout-scroll lag on integrated chips.</p>

      <h2>The Solution</h2>
      <ol>
        <li><strong>Dynamic DPR Capping:</strong> We restricted the DPR to <code>1.0</code> on desktop and <code>0.75</code> on mobile devices. Since the backdrop uses a heavy CSS blur, reducing the canvas resolution by 4x is visually indistinguishable but yields massive performance gains.</li>
        <li><strong>Shader Step Tuning:</strong> We trimmed the raymarching loops from <code>100</code> steps to <code>60</code>, directly reducing shader complexity by 40% with no loss in shape integrity.</li>
        <li><strong>Offscreen Suspension:</strong> By wrapping the canvas rendering loop with an <code>IntersectionObserver</code>, we successfully pause rendering (calling <code>cancelAnimationFrame</code>) whenever the canvas scrolls out of the viewport.</li>
      </ol>

      <blockquote>
        "Optimizing for performance doesn't mean removing beautiful visual assets. It means managing GPU cycles intelligently."
      </blockquote>

      <h2>Conclusion</h2>
      <p>Applying these adjustments brought our animations back to a solid 60 FPS on low-end devices and completely freed up the rendering thread for the rest of the portfolio sections.</p>
    `,
  },
  {
    slug: "why-we-chose-tanstack-start",
    title: "Why We Chose TanStack Start for Our Production Client Stack",
    date: "June 15, 2026",
    readTime: "4 min read",
    category: "Web Frameworks",
    snippet:
      "An engineering breakdown of why TanStack Start is the perfect modern framework for building high-performance, SEO-friendly startup landing pages.",
    author: {
      name: "Nexvor Team",
      role: "Core Engineers",
    },
    content: `
      <p class="lead">Vite and React are standards in modern web dev, but when building startup projects, we needed the SEO advantages of SSR (Server-Side Rendering) combined with the extreme simplicity of React SPA routing. TanStack Start hit the perfect sweet spot.</p>

      <h2>What is TanStack Start?</h2>
      <p>TanStack Start is a full-stack React framework built on top of Vite and TanStack Router. It implements standard hydration, SSR out-of-the-box, and handles route trees automatically through a Vite file-system routing compiler plugin.</p>

      <h2>Key Features We Love</h2>
      <ul>
        <li><strong>Type-Safe Routing:</strong> No more magic strings in URLs. Every route parameter, search query, and navigation link is fully type-checked.</li>
        <li><strong>Fast Prerendering:</strong> Static generation of the index file during build time ensures immediate PageSpeed load metrics.</li>
        <li><strong>SEO-Friendly:</strong> We can easily specify metadata headers, keywords, and Open Graph attributes for each route inside clean <code>head()</code> config methods.</li>
      </ul>

      <h2>The Verdict</h2>
      <p>For modular, highly animated studio pages that require lightning-fast loading and strong SEO rankings, TanStack Start is a developer's dream.</p>
    `,
  },
  {
    slug: "building-robust-automation-with-n8n",
    title: "From Scripts to Workflows: Designing Robust Automation with n8n",
    date: "May 28, 2026",
    readTime: "6 min read",
    category: "Workflow Automation",
    snippet:
      "A deep-dive into how we use self-hosted n8n instances to build production-grade automation workflows and Slack report systems for our clients.",
    author: {
      name: "Nexvor Team",
      role: "Core Engineers",
    },
    content: `
      <p class="lead">Writing cron-job scripts for databases, Slack alerts, and API webhooks gets messy quickly. We've shifted our studio's backend pipelines and automation systems to self-hosted n8n. Here is our architectural guide.</p>

      <h2>Why n8n Over Custom Scripts?</h2>
      <p>n8n is an extendable, node-based automation tool. It provides a visual canvas but allows writing custom JavaScript / TypeScript expressions inside any node. This combines the speed of low-code tools with the unlimited power of code.</p>

      <h2>Our Blueprint for Slack Notifications</h2>
      <p>We leverage webhooks to catch GitHub commits or contact forms, funnel them through data parsing nodes, and trigger formatted Slack attachments detailing build statuses and user requests.</p>

      <blockquote>
        "By replacing complex custom scripts with visual nodes, we've reduced error-recovery and debugging times by over 70%."
      </blockquote>

      <h2>Key Architecture Tips</h2>
      <ul>
        <li><strong>Error Triggers:</strong> Always hook up global error-handler workflows to alert your team immediately when a API limit is hit.</li>
        <li><strong>Docker Hosting:</strong> Deploying n8n in a lightweight Docker container on AWS ECS ensures cheap, reliable scaling.</li>
      </ul>
    `,
  },
];
