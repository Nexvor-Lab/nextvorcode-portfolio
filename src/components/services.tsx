import { motion } from "motion/react";
import { Globe, Smartphone, Brain, Server, Workflow, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Platforms",
    desc: "Production-grade web apps with React, Next.js, Angular, Tailwind & MUI — fast, accessible, beautiful.",
    tags: ["React", "Next.js", "Angular"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform and native mobile experiences with Flutter, Dart and Kotlin that ship to both stores.",
    tags: ["Flutter", "Dart", "Kotlin"],
  },
  {
    icon: Brain,
    title: "AI / ML Models",
    desc: "From data pipelines to deployed inference — custom models, fine-tuning, and AI-powered features.",
    tags: ["PyTorch", "FastAPI", "LLMs"],
  },
  {
    icon: Server,
    title: "Backends & APIs",
    desc: "Robust services with NestJS, Express, Spring Boot, FastAPI and .NET — SQL & NoSQL, AWS connected.",
    tags: ["NestJS", "Spring", ".NET"],
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Eliminate repetitive work. n8n workflows, integrations and AI agents that run your operations.",
    tags: ["n8n", "AWS", "Agents"],
  },
  {
    icon: GraduationCap,
    title: "Academic Projects",
    desc: "Assignments, coursework, research and final-year projects engineered with the same craft.",
    tags: ["Research", "Reports", "Code"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            // What we ship
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            One studio. <span className="text-gradient">Every layer</span> of your product.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative glass rounded-2xl p-7 hover-lift overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-muted/60 text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
