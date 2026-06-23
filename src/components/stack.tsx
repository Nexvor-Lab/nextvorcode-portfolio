import { motion } from "motion/react";

const stack = [
  "React",
  "Next.js",
  "Angular",
  "Flutter",
  "Dart",
  "Kotlin",
  "NestJS",
  "Express",
  "Spring Boot",
  "FastAPI",
  ".NET / C#",
  "Python",
  "TypeScript",
  "Tailwind",
  "MUI",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "n8n",
  "AI / ML",
  "LangChain",
];

export function Stack() {
  // duplicate for seamless marquee
  const row = [...stack, ...stack];

  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            // The stack
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Tools we wield, <span className="text-gradient">fluently</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            We pick the right tech per problem — not per trend. Below is a slice of what we work
            with daily.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee w-max">
          {row.map((t, i) => (
            <div
              key={`${t}-${i}`}
              className="glass rounded-full px-6 py-3 font-mono text-sm whitespace-nowrap hover:bg-card hover:text-primary transition-colors"
            >
              {t}
            </div>
          ))}
        </div>

        <div
          className="flex gap-4 animate-marquee w-max mt-4"
          style={{ animationDirection: "reverse", animationDuration: "40s" }}
        >
          {row.map((t, i) => (
            <div
              key={`r-${t}-${i}`}
              className="glass rounded-full px-6 py-3 font-mono text-sm whitespace-nowrap hover:bg-card hover:text-secondary transition-colors"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
