"use client"
import { Footer } from "@/component/layout/Footer";
import { Navbar } from "@/component/layout/Navbar";
import { About } from "@/component/sections/About";
import { Contact } from "@/component/sections/Contact";
import { Experience } from "@/component/sections/Experience";
import { Hero } from "@/component/sections/Hero";
import { Projects } from "@/component/sections/Projects";
import { Button } from "@/component/ui/Button";
import { Heading } from "@/component/ui/Text";
import { useState } from "react";


export default function HomePage() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-background p-10">
      <div className="rounded-lg bg-primary p-6 text-foreground mb-3">
        Hello this is Test
      </div>
      <div className="flex flex-row gap-3">
        <Button size="sm" loading={loading} loadingText="Saving..." onClick={() => setLoading(true)}>Save</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex flex-row gap-3 mt-4">
        <Button size="sm">Small</Button>
        <Button size="lg" variant="secondary">Large</Button>
        <Button disabled>Outline</Button>
      </div>
      <div className="flex flex-row gap-3 mt-4">
        <Button size="sm" variant="danger">Small</Button>
        <Button size="sm" variant="success">Large</Button>
        <Button size="sm" variant="warning">Outline</Button>
      </div>

      <Heading level="h1">Heading 1</Heading>


      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
