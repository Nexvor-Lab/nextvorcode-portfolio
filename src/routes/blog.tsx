import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { Contact } from "@/components/contact";
import { BLOG_POSTS } from "@/lib/data/blog";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Nexvor Blog | Software Engineering & Tech Insights" },
      {
        name: "description",
        content:
          "Read articles on software engineering, performance optimization, workflow automation, and frameworks like Next.js, React, NestJS, and Flutter by Nexvor Codelabs.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  // Let's take the first post as the featured post, and others as standard posts
  const [featuredPost, ...standardPosts] = BLOG_POSTS;

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />

      {/* Decorative Background Blobs */}
      <div className="absolute top-24 left-1/3 h-80 w-80 rounded-full bg-secondary/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-48 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10" />

      {/* Main Header */}
      <section className="pt-36 pb-12 px-6 text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6"
        >
          <Sparkles className="h-3 w-3 text-secondary animate-pulse" />
          <span>Inside Our Engineering Pipeline</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl font-bold leading-tight"
        >
          Our technical <span className="text-gradient">journal.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 mx-auto max-w-xl text-muted-foreground leading-relaxed"
        >
          Detailed engineering write-ups, architecture decisions, and workflow automation tips from
          our development studio.
        </motion.p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="px-6 pb-12 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass rounded-2xl p-8 md:p-12 hover-lift relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Ambient featured overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent pointer-events-none -z-10" />

            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/30 px-3 py-1 rounded-full bg-primary/5">
                Featured Article
              </span>

              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight hover:text-primary transition-colors">
                <Link to="/blog/$slug" params={{ slug: featuredPost.slug }}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base">
                {featuredPost.snippet}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-4 border-t border-border/40">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredPost.readTime}
                </span>
                <span>By {featuredPost.author.name}</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end">
              <Link
                to="/blog/$slug"
                params={{ slug: featuredPost.slug }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-violet transition-all hover:scale-105"
              >
                Read Article
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>
      )}

      {/* Standard Post Grid */}
      {standardPosts.length > 0 && (
        <section className="px-6 py-12 max-w-7xl mx-auto relative z-10">
          <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-secondary" /> Recent Publications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group glass rounded-2xl p-8 hover-lift overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-secondary">{post.category}</span>
                  </div>

                  <h4 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                    <Link to="/blog/$slug" params={{ slug: post.slug }}>
                      {post.title}
                    </Link>
                  </h4>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {post.snippet}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between">
                  <div className="flex flex-col gap-0.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="inline-flex items-center gap-1 text-xs font-mono tracking-wider uppercase text-primary group-hover:text-foreground transition-colors"
                  >
                    Read
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      <Contact />
    </main>
  );
}
