import { motion } from "motion/react";
import { useState, useEffect } from "react";
import logoIcon from "@/assets/logo_dark_icon.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all ${scrolled ? "scale-95" : ""}`}>
        <div className={`flex items-center justify-between ${scrolled ? "glass rounded-full px-6 py-3" : ""}`}>
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center">
              <img
                src={logoIcon}
                alt="Nexvor Code Labs Logo"
                className="h-8 w-auto relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -inset-1 rounded-full bg-primary/25 blur-md opacity-60 animate-glow-pulse z-0" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              Nexvor
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:shadow-glow-violet transition-all hover:scale-105"
          >
            Start a project
          </a>
        </div>
      </div>
    </motion.header>
  );
}
