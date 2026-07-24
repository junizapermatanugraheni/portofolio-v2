"use client"

import { Navbar } from "@/component/layout/Navbar"
import { Experience } from "@/component/sections/Experience"
import { Hero } from "@/component/sections/Hero"
import { Projects } from "@/component/sections/Projects"

export default function HomePage() {

  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Experience></Experience>
      <Projects></Projects>
    </main>
  )
}
