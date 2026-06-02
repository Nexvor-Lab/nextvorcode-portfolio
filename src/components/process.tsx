import { motion } from "motion/react";

const steps = [
  { n: "01", t: "Discover", d: "We sit with the problem before the keyboard. Goals, constraints, edges." },
  { n: "02", t: "Design", d: "Architecture, data flow, UI. Tight loops with you, no surprises later." },
  { n: "03", t: "Build", d: "Two senior engineers shipping in parallel — frontend, backend, AI, infra." },
  { n: "04", t: "Launch", d: "Deploy, monitor, iterate. We stay around once it's live." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// How we work</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            A small team. <span className="text-gradient">Tight loops.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* connecting line on lg */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 inline-flex h-12 items-center justify-center px-4 rounded-full glass shadow-glow font-mono text-sm text-primary">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
