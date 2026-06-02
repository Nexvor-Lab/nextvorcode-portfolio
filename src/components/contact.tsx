import { motion } from "motion/react";
import { Mail, GitBranch, Briefcase, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-aurora opacity-60 -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse -z-10" />

      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// Let's talk</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
            Got an idea? <br />
            <span className="text-gradient">We'll build it.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            From a single landing page to a full AI-powered platform — tell us what you need and we'll
            get back within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@nexvor.com"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-violet transition-all hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              hello@nexvor.com
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {[
              { icon: GitBranch, href: "#", label: "GitHub" },
              { icon: Briefcase, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@nexvor.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-11 w-11 inline-flex items-center justify-center rounded-full glass hover:bg-card hover:text-primary transition-colors"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="mt-32 pt-8 border-t border-border">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-gradient-primary" />
            <span className="font-display font-semibold text-foreground">Nexvor</span>
            <span>— Engineered by two, ready for many.</span>
          </div>
          <div className="font-mono">© {new Date().getFullYear()} Nexvor Studio</div>
        </div>
      </footer>
    </section>
  );
}
