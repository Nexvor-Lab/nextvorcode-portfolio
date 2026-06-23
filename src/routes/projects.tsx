import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { Contact } from "@/components/contact";
import { PROJECTS, CATEGORIES } from "@/lib/data/projects";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Code, Compass, Sparkles } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Shipped Work | Nexvor Codelabs" },
      {
        name: "description",
        content:
          "Browse projects built by Nexvor Codelabs. From full-stack web platforms and cross-platform Flutter apps to custom n8n automations and academic support projects.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />

      {/* Decorative Background Blobs */}
      <div className="absolute top-20 left-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[120px] pointer-events-none -z-10" />

      {/* Main Header */}
      <section className="pt-36 pb-12 px-6 text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6"
        >
          <Sparkles className="h-3 w-3 text-primary animate-pulse" />
          <span>Our Portfolio & Shipped Products</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl font-bold leading-tight"
        >
          We build code that <br />
          <span className="text-gradient">delivers value.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 mx-auto max-w-xl text-muted-foreground leading-relaxed"
        >
          Explore a curated selection of systems, mobile apps, and developer automations built from
          the ground up by our co-founders.
        </motion.p>
      </section>

      {/* Category Tabs */}
      <section className="px-6 pb-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/40 pb-6">
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                activeCategory === cat.id
                  ? "text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-full bg-gradient-primary -z-10 shadow-glow"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-10 max-w-7xl mx-auto relative z-10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5 }}
                className="group relative glass rounded-2xl p-8 hover-lift overflow-hidden flex flex-col justify-between"
              >
                {/* Glow Backdrop */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`}
                />

                <div>
                  {/* Custom Graphic Header */}
                  <div className="h-44 w-full rounded-xl bg-card/60 border border-border/30 mb-6 flex items-center justify-center relative overflow-hidden">
                    {/* Abstract SVG graphics matching project themes */}
                    {p.category === "academic" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 grid-bg opacity-30" />
                        <svg
                          className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-500"
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
                        <div className="absolute h-32 w-32 rounded-full bg-secondary/10 blur-xl" />
                        <svg
                          className="w-16 h-16 text-secondary/50 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
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
                          className="w-16 h-16 text-emerald-400/50 group-hover:scale-110 transition-transform duration-500 animate-pulse"
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
                    {p.category === "fullstack" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5" />
                        <svg
                          className="w-16 h-16 text-pink-400/50 group-hover:scale-110 transition-transform duration-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-glow hover:shadow-glow-violet hover:scale-105 transition-all"
                      >
                        <Compass className="h-3.5 w-3.5" />
                        Live Preview
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass text-foreground text-xs font-semibold hover:bg-card hover:scale-105 transition-all"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Contact />
    </main>
  );
}
