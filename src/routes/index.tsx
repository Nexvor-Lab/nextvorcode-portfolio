import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexvor — Full-stack engineering studio for modern startups" },
      {
        name: "description",
        content:
          "Nexvor is a two-founder engineering studio building web platforms, mobile apps, AI/ML systems and automation pipelines end to end.",
      },
      { property: "og:title", content: "Nexvor — Full-stack engineering studio" },
      {
        property: "og:description",
        content: "Web, mobile, AI/ML and automation — engineered by two senior founders.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Stack />
      <Process />
      <Contact />
    </main>
  );
}
