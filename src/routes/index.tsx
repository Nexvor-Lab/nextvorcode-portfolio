import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { Process } from "@/components/process";
import { ProjectsPreview, BlogPreview } from "@/components/homepage-previews";
import { Contact } from "@/components/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexvor Codelabs | Software Engineering, Final Projects & Assignments" },
      {
        name: "description",
        content:
          "Nexvor Codelabs creates custom web pages, mobile apps, and backends using React, NextJS, NestJS, Node.js, Flutter, and Spring Boot. Get elite support for university assignments and computer science final projects.",
      },
      {
        name: "keywords",
        content:
          "final projects, assignments doing, university assignments doing, web pages create, react, next, flutter, springboot, node.js, nextjs, nest.js, computer science assignments, coding help, software studio, freelance developers",
      },
      {
        property: "og:title",
        content: "Nexvor Codelabs | Software Engineering & Academic CS Projects",
      },
      {
        property: "og:description",
        content:
          "High-performance web pages, mobile apps, and custom systems. React, NextJS, Node.js, NestJS, Flutter, and Spring Boot. Expert help for final projects and university assignments.",
      },
      { property: "og:image", content: "https://nexvorcodelabs.me/og-image.png" },
      {
        name: "twitter:title",
        content: "Nexvor Codelabs | Software Engineering & Academic CS Projects",
      },
      {
        name: "twitter:description",
        content:
          "Web pages, mobile apps, and backends. React, NextJS, Node.js, NestJS, Flutter, Spring Boot. Academic support for final projects and university assignments.",
      },
      { name: "twitter:image", content: "https://nexvorcodelabs.me/og-image.png" },
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
      {/* <ProjectsPreview /> */}
      <BlogPreview />
      <Contact />
    </main>
  );
}
