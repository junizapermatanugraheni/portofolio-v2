"use client"

import { Navbar } from "@/component/layout/Navbar"
import { Experience } from "@/component/sections/Experience"
import { Hero } from "@/component/sections/Hero"
import { Projects } from "@/component/sections/Projects"

export default function HomePage() {

  return (
    <div className="mx-auto flex gap-20">
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <Experience></Experience>
        <Projects></Projects>
      </main>
    </div>

  )
}
