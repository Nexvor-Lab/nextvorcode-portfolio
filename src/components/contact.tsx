import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import logoIcon from "@/assets/logo_dark_icon.png";
import { SVGProps } from "react";

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
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            // Let's talk
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
            Got an idea? <br />
            <span className="text-gradient">We'll build it.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            From a single landing page to a full AI-powered platform — tell us what you need and
            we'll get back within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:nexvorcodelabs@gmail.com"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-violet transition-all hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              nexvorcodelabs@gmail.com
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {[
              {
                icon: (props: SVGProps<SVGSVGElement>) => (
                  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
                href: "https://github.com/Nexvor-Lab",
                label: "GitHub",
              },
              {
                icon: (props: SVGProps<SVGSVGElement>) => (
                  <svg
                    {...props}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                ),
                href: "https://www.instagram.com/nexvorcodelabs/#",
                label: "Instagram",
              },
              {
                icon: (props: SVGProps<SVGSVGElement>) => (
                  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.894 0c3.18 0 6.171 1.242 8.425 3.496a11.861 11.861 0 0 1 3.49 8.43c-.003 6.57-5.328 11.894-11.896 11.894-1.998-.001-3.961-.508-5.707-1.472L0 24zm6.59-4.846c1.62.962 3.21 1.48 4.717 1.481 5.25 0 9.52-4.269 9.523-9.52.002-5.251-4.266-9.522-9.52-9.522-5.253 0-9.525 4.272-9.528 9.524-.001 1.77.476 3.498 1.38 5.04L1.7 21.03l4.947-1.876zm11.103-6.506c-.302-.15-1.78-.88-2.057-.98-.277-.1-.478-.15-.678.15-.2.3-.778.98-.953 1.18-.175.2-.35.225-.652.075-.302-.15-1.276-.47-2.43-1.499-.899-.8-1.505-1.79-1.282-2.18.225-.39.075-.6.225-.75.135-.135.302-.35.453-.525.15-.175.2-.3.302-.5.101-.2.051-.375-.025-.525-.075-.15-.678-1.635-.93-2.245-.245-.59-.495-.51-.678-.52-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.375-.276.3-.1.545-.1.545s-.167.33-.217.43c-.276.56-.376 1.09-.175 1.59.201.5.753 1.18 1.353 1.73 1.176 1.077 2.583 1.73 4.108 2.333.302.12.527.195.702.25.302.095.578.08.795.048.242-.036.78-.32 1.031-.63.252-.31.252-.575.176-.63-.076-.055-.277-.15-.579-.3z" />
                  </svg>
                ),
                href: "https://wa.me/94729546089",
                label: "WhatsApp",
              },
              {
                icon: Mail,
                href: "mailto:nexvorcodelabs@gmail.com",
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
          <div className="flex items-center gap-2.5">
            <img src={logoIcon} alt="Nexvor Code Labs Logo" className="h-5 w-auto" />
            <span className="font-display font-semibold text-foreground">Nexvor</span>
            <span>— Engineered by two, ready for many.</span>
          </div>

          {/* <div className="flex items-center gap-4">
            <a
              href="mailto:nexvorcodelabs@gmail.com"
              aria-label="Email"
              className="hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/nexvorcodelabs/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://wa.me/94729546089"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-primary transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.894 0c3.18 0 6.171 1.242 8.425 3.496a11.861 11.861 0 0 1 3.49 8.43c-.003 6.57-5.328 11.894-11.896 11.894-1.998-.001-3.961-.508-5.707-1.472L0 24zm6.59-4.846c1.62.962 3.21 1.48 4.717 1.481 5.25 0 9.52-4.269 9.523-9.52.002-5.251-4.266-9.522-9.52-9.522-5.253 0-9.525 4.272-9.528 9.524-.001 1.77.476 3.498 1.38 5.04L1.7 21.03l4.947-1.876zm11.103-6.506c-.302-.15-1.78-.88-2.057-.98-.277-.1-.478-.15-.678.15-.2.3-.778.98-.953 1.18-.175.2-.35.225-.652.075-.302-.15-1.276-.47-2.43-1.499-.899-.8-1.505-1.79-1.282-2.18.225-.39.075-.6.225-.75.135-.135.302-.35.453-.525.15-.175.2-.3.302-.5.101-.2.051-.375-.025-.525-.075-.15-.678-1.635-.93-2.245-.245-.59-.495-.51-.678-.52-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.375-.276.3-.1.545-.1.545s-.167.33-.217.43c-.276.56-.376 1.09-.175 1.59.201.5.753 1.18 1.353 1.73 1.176 1.077 2.583 1.73 4.108 2.333.302.12.527.195.702.25.302.095.578.08.795.048.242-.036.78-.32 1.031-.63.252-.31.252-.575.176-.63-.076-.055-.277-.15-.579-.3z"/>
              </svg>
            </a>
            <a
              href="https://github.com/Nexvor-Lab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div> */}

          <div className="font-mono">© {new Date().getFullYear()} Nexvor Studio</div>
        </div>
      </footer>
    </section>
  );
}
