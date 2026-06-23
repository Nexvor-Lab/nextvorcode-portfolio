import { PROJECTS } from "@/lib/data/projects";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Calendar, Clock, Compass, Sparkles } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export function ProjectsPreview() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="px-6 py-24 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6"
        >
          <Sparkles className="h-3 w-3 text-primary animate-pulse" />
          <span>Our Shipped Work</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold leading-tight"
        >
          We build code that <span className="text-gradient">delivers.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative glass rounded-2xl p-6 hover-lift overflow-hidden flex flex-col justify-between"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`}
            />

            <div>
              <div className="h-40 w-full rounded-xl bg-card/60 border border-border/30 mb-6 flex items-center justify-center relative overflow-hidden">
                {p.category === "academic" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <svg
                      className="w-12 h-12 text-primary/50 group-hover:scale-110 transition-transform duration-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                {p.category === "mobile" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute h-24 w-24 rounded-full bg-secondary/10 blur-xl" />
                    <svg
                      className="w-12 h-12 text-secondary/50 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </div>
                )}
                {p.category === "ai-automation" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 radial-gradient opacity-25" />
                    <svg
                      className="w-12 h-12 text-emerald-400/50 group-hover:scale-110 transition-transform duration-500 animate-pulse"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 6v12M6 12h12M12 12l4-4M12 12L8 8M12 12l4 4M12 12l-4 4" />
                    </svg>
                  </div>
                )}
              </div>

              <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {p.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold hover:scale-105 transition-all animate-fade-in"
                  >
                    <Compass className="h-3.5 w-3.5" />
                    Live
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-foreground text-[10px] font-semibold hover:bg-card hover:scale-105 transition-all animate-fade-in"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-card text-sm font-medium transition-all hover:scale-105"
        >
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

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

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  snippet: string;
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
  };
};

export function BlogPreview() {
  const { data, isLoading, isError } = useQuery({
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
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const posts = (data || []).map(mapApiPostToBlogPost).slice(0, 3);

  return (
    <section id="blog-preview" className="px-6 py-24 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6"
        >
          <Sparkles className="h-3 w-3 text-secondary animate-pulse" />
          <span>Inside Our Engineering Pipeline</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold leading-tight"
        >
          Read our <span className="text-gradient">journal.</span>
        </motion.h2>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass rounded-2xl p-6 animate-pulse space-y-4">
              <div className="h-4 w-20 bg-muted/60 rounded-full" />
              <div className="h-6 w-3/4 bg-muted/60 rounded" />
              <div className="h-4 w-full bg-muted/40 rounded" />
              <div className="h-4 w-5/6 bg-muted/40 rounded" />
              <div className="pt-4 border-t border-border/40 flex justify-between items-center">
                <div className="h-3 w-16 bg-muted/40 rounded" />
                <div className="h-3 w-16 bg-muted/40 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : isError || posts.length === 0 ? (
        <div className="text-center py-12 glass rounded-2xl max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            The blog is currently offline. Check back soon for new articles!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass rounded-2xl p-6 hover-lift overflow-hidden flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-secondary uppercase tracking-wider block mb-3">
                  {post.category}
                </span>
                <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                  <a href="https://blog.nexvorcodelabs.me/">{post.title}</a>
                </h3>
                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {post.snippet}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                <div className="flex flex-col gap-0.5 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <a
                  href="https://blog.nexvorcodelabs.me/"
                  className="inline-flex items-center gap-1 text-[10px] font-mono tracking-wider uppercase text-primary group-hover:text-foreground transition-colors"
                >
                  Read
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-card text-sm font-medium transition-all hover:scale-105"
        >
          View All Publications
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
