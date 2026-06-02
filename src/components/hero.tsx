import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from 'react';

// client-only loader for Prism
const ClientPrism = (props: any) => {
  const [PrismComp, setPrismComp] = useState<any>(null);
  useEffect(() => {
    let mounted = true;
    import('./Prism').then((m) => {
      if (mounted) setPrismComp(() => m.default);
    });
    return () => {
      mounted = false;
    };
  }, []);
  if (!PrismComp) return null;
  return <PrismComp {...props} />;
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      {/* Prism background (client only) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <ClientPrism
            animationType="3drotate"
            timeScale={0.4}
            height={3}
            baseWidth={6}
            scale={2}
            glow={0.8}
            Noice={0}
            hueShift={-0.7}
            colorFrequency={1}
          />
        </div>
      </div>

      {/* Floating aurora blobs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-aurora -z-10" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl animate-aurora -z-10" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-6xl px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground mb-8"
        >
          <Sparkles className="h-3 w-3 text-primary" />
          <span>A software studio by two engineers</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight"
        >
          We build the <br />
          <span className="text-gradient inline-block animate-gradient-shift bg-[length:200%_auto]">
            digital backbone
          </span>{" "}
          <br />
          of modern startups.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          Nexvor is a two-founder engineering studio shipping web platforms, mobile apps,
          AI/ML systems, and automation pipelines — end to end, production grade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-violet transition-all hover:scale-105"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-foreground font-medium hover:bg-card transition-all"
          >
            What we do
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { v: "20+", l: "Technologies" },
            { v: "2", l: "Co-founders" },
            { v: "∞", l: "Possibilities" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
