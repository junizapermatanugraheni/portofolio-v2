"use client"
import { Section } from "@/component/layout/Section"
import { Badge } from "@/component/ui/Badge"
import { Heading } from "@/component/ui/Heading"
import { Text } from "@/component/ui/Text"
import { ProjectData } from "./Project.data"
import { ArrowLeft, ArrowUpLeft } from "lucide-react"
import Link from "next/link"
import { IconButton } from "@/component/ui/Button/IconButton"
import { FaGithub } from "react-icons/fa"

export default function ProjectDetail() {

    return (
        <Section className="py-24">
            <main className="space-y-6">
                <div className="flex flex-col gap-6">
                    <Link
                        href="/"
                        className="
                        inline-flex
                        items-center
                        gap-2

                        text-foreground-secondary
                        hover:text-primary

                        transition-colors
                    "
                    >
                        <ArrowLeft size={18} />
                        <span>Back to Portfolio</span>
                    </Link>
                    <Badge variant="glass" className="w-fit">
                        🚀 Portfolio Collection
                    </Badge>

                    <Heading level="h2">
                        Explore <span className="gradient-text"> My Projects</span>
                    </Heading>

                    <Text className="mt-3 max-w-2xl text-foreground-secondary">
                        Browse through my work, from ERP systems to modern web
                        applications built with React, Next.js and TypeScript.
                    </Text>
                </div>


                <table className="table-fixed mt-10">
                    <thead className="sticky top-0 z-20 bg-primary-light/80 backdrop-blur-xl">
                        <tr className="border-b border-border">
                            <th className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-secondary">Year</th>

                            <th className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-secondary text-left">Project Name</th>
                            <th className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-secondary text-left">Description</th>
                            <th className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-secondary text-left">Technologies</th>
                            <th className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-secondary">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ProjectData.map((project) => (
                            <tr
                                key={project.id}
                                className="border-b border-border hover:bg-surface transition-colors"
                            >
                                <td className="p-5 text-primary font-bold">{project.year}</td>

                                <td className="p-5 font-semibold">
                                    {project.title}
                                </td>

                                <td className="p-5 text-foreground-secondary">
                                    {project.description}
                                </td>

                                <td className="p-5">
                                    {project.technologies.join(" • ")}
                                </td>

                                <td className="p-5">
                                    <div className="flex gap-2">
                                        <IconButton variant="glass" size="sm">
                                            <FaGithub size={16} />
                                        </IconButton>

                                        <IconButton variant="solid" size="sm">
                                            <ArrowUpLeft size={16} />
                                        </IconButton>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <tr></tr>
                    </tbody>
                </table>
            </main>
        </Section>
    )
}