import { Footer } from "@/component/layout/Footer";
import { Navbar } from "@/component/layout/Navbar";
import { Hero } from "@/component/sections/Hero";
import { About } from "@/component/sections/About";
import { Projects } from "@/component/sections/Projects";
import { ProjectCaseStudy } from "@/component/sections/Projects/ProjectCaseStudy";
import { Experience } from "@/component/sections/Experience";
import { Contact } from "@/component/sections/Contact";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="space-y-4">
        <Hero />
        <About />
        <Projects />
        <ProjectCaseStudy />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}