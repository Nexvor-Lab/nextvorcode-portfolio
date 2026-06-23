import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { Contact } from "@/components/contact";
import { BLOG_POSTS, BlogPost } from "@/lib/data/blog";
import { motion, useScroll, useSpring } from "motion/react";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface ApiPost {
  id: number;
  title: string;
  slug: string;
  snippet: string;
  content: string;
  category: string;
  read_time: string;
  created_at: string;
  likes: number;
}

const mapApiPostToBlogPost = (post: ApiPost): BlogPost => {
  let formattedDate = "";
  try {
    const d = new Date(post.created_at);
    formattedDate = d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch (e) {
    formattedDate = post.created_at || "";
  }

  return {
    slug: post.slug,
    title: post.title,
    date: formattedDate,
    readTime: post.read_time || "2 min read",
    category: post.category || "Technology",
    snippet: post.snippet || "",
    author: {
      name: "Nexvor Team",
      role: "Core Engineers",
    },
    content: post.content || "",
  };
};

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const { slug } = params;
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 6000); // 6s timeout
      const res = await fetch(
        `https://nexvorcodelabs-blog-backend.onrender.com/api/posts/${slug}`,
        {
          signal: controller.signal,
        },
      );
      clearTimeout(id);
      if (!res.ok) throw new Error("Failed to fetch");
      const apiPost = await res.json();
      return mapApiPostToBlogPost(apiPost);
    } catch (err) {
      console.error("Failed to fetch blog post:", err);
      return null;
    }
  },
  head: ({ loaderData }) => {
    const post = loaderData;
    return {
      meta: [
        { title: `${post?.title || "Blog Post"} | Nexvor Blog` },
        {
          name: "description",
          content: post?.snippet || "Read technical insights from the Nexvor team.",
        },
      ],
    };
  },
  component: BlogPostDetailPage,
});

function BlogPostDetailPage() {
  const post = Route.useLoaderData();
  const { slug } = Route.useParams();

  // Setup scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Fetch all posts for recommended articles list
  const { data: allPostsData } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 6000); // 6s timeout
      try {
        const res = await fetch("https://nexvorcodelabs-blog-backend.onrender.com/api/posts", {
          signal: controller.signal,
        });
        clearTimeout(id);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        return (Array.isArray(json) ? json : json?.value || []) as ApiPost[];
      } catch (err) {
        clearTimeout(id);
        throw err;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes cache
    refetchOnWindowFocus: false,
    retry: 1,
  });

  if (!post) {
    return (
      <main className="relative min-h-screen bg-background text-foreground flex items-center justify-center">
        <Nav />
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-display">Article Not Found</h1>
          <p className="text-muted-foreground">The article you are looking for does not exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
        <Contact />
      </main>
    );
  }

  // Get other blog posts to recommend at the bottom
  const apiPosts = allPostsData || [];
  const postsToFilter = apiPosts.map(mapApiPostToBlogPost);

  const relatedPosts = postsToFilter.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />

      {/* Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-primary origin-left z-50"
      />

      {/* Decorative Blob */}
      <div className="absolute top-24 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      <article className="pt-36 pb-20 px-6 max-w-3xl mx-auto relative z-10">
        {/* Back Link */}
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>

        {/* Categories / Meta */}
        <div className="space-y-4 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {post.category}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-muted-foreground pt-4 border-b border-border/40 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {post.author.name} ({post.author.role})
            </span>
          </div>
        </div>

        {/* Content Render */}
        <div
          className="prose-custom leading-relaxed text-muted-foreground space-y-6 text-base md:text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Stylings for custom rendered blog HTML */}
        <style>{`
          .prose-custom p {
            margin-bottom: 1.5rem;
          }
          .prose-custom .lead {
            font-size: 1.25rem;
            color: var(--color-foreground);
            font-weight: 500;
          }
          .prose-custom h2 {
            font-family: var(--font-display);
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--color-foreground);
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }
          .prose-custom h3 {
            font-family: var(--font-display);
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--color-foreground);
            margin-top: 2rem;
            margin-bottom: 0.75rem;
          }
          .prose-custom blockquote {
            border-left: 4px solid var(--color-primary);
            padding-left: 1.5rem;
            font-style: italic;
            color: var(--color-foreground);
            margin: 2rem 0;
          }
          .prose-custom ul, .prose-custom ol {
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
            list-style-type: disc;
          }
          .prose-custom ol {
            list-style-type: decimal;
          }
          .prose-custom li {
            margin-bottom: 0.5rem;
          }
          .prose-custom code {
            font-family: var(--font-mono);
            font-size: 0.9em;
            background: var(--color-muted);
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            color: var(--color-primary);
          }
        `}</style>

        {/* Sharing / CTA divider */}
        <div className="my-16 border-t border-border/40" />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold">Recomended Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((r) => (
                <Link
                  key={r.slug}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="group block glass rounded-xl p-6 hover-lift"
                >
                  <span className="font-mono text-[10px] text-primary uppercase tracking-wider block mb-2">
                    {r.category}
                  </span>
                  <h4 className="font-display font-bold group-hover:text-primary transition-colors text-base line-clamp-2">
                    {r.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{r.snippet}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-primary mt-4 group-hover:text-foreground transition-colors">
                    Read Post{" "}
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Contact />
    </main>
  );
}
