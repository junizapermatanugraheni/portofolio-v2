"use client"

import { Footer } from "@/component/layout/Footer"
import { Navbar } from "@/component/layout/Navbar"
import { Contact } from "@/component/sections/Contact"
import { Experience } from "@/component/sections/Experience"
import { Hero } from "@/component/sections/Hero"
import { Projects } from "@/component/sections/Projects"

export default function HomePage() {

  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  )
}