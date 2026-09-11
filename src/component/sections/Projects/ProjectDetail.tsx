"use client";

import { Section } from "@/component/layout/Section";
import { Badge } from "@/component/ui/Badge";
import { Heading } from "@/component/ui/Heading";
import { Text } from "@/component/ui/Text";
import { ProjectData } from "./Project.data";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectDetail() {
    return (
        <Section className="py-16 sm:py-24">
            <main className="space-y-8">
                <div className="flex flex-col gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-foreground-secondary hover:text-primary transition-colors w-fit"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Home Portfolio</span>
                    </Link>

                    <div className="space-y-2 mt-2">
                        <Badge variant="glass" className="w-fit" size="sm">
                            Complete Work Archive
                        </Badge>
                        <Heading level="h2" className="text-foreground tracking-tight">
                            All Projects &amp; Experiments
                        </Heading>
                        <Text className="max-w-2xl text-foreground-secondary text-sm sm:text-base">
                            Chronological archive of enterprise applications, SaaS interfaces, open-source experiments, and client systems.
                        </Text>
                    </div>
                </div>

                {/* Responsive Table Wrapper */}
                <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-card">
                    <table className="w-full min-w-180 text-left text-xs">
                        <thead className="bg-surface-subtle border-b border-border text-foreground-secondary uppercase tracking-wider font-semibold">
                            <tr>
                                <th className="py-3.5 px-4 font-mono w-20">Year</th>
                                <th className="py-3.5 px-4 min-w-50">Project</th>
                                <th className="py-3.5 px-4 min-w-70">Description</th>
                                <th className="py-3.5 px-4 min-w-45">Tech Stack</th>
                                <th className="py-3.5 px-4 text-right w-24">Links</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60 text-foreground-secondary">
                            {ProjectData.map((project) => (
                                <tr
                                    key={project.id}
                                    className="hover:bg-surface-subtle/50 transition-colors"
                                >
                                    <td className="py-4 px-4 font-mono font-semibold text-primary">
                                        {project.year}
                                    </td>
                                    <td className="py-4 px-4 font-semibold text-foreground">
                                        <div className="flex items-center gap-2">
                                            <span>{project.title}</span>
                                            {project.featured && (
                                                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-accent-light text-accent">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-[11px] text-foreground-subtle block mt-0.5">
                                            {project.label}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-xs leading-relaxed text-foreground-secondary">
                                        {project.description}
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 rounded bg-surface-subtle text-foreground text-[10px] font-medium border border-border-subtle"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        <div className="inline-flex items-center justify-end gap-1.5">
                                            {project.github && project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`GitHub for ${project.title}`}
                                                    className="p-1.5 rounded-lg border border-border hover:border-primary/40 hover:text-foreground transition-colors"
                                                >
                                                    <FaGithub size={13} />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a
                                                    href={project.link === "#case-study" ? "/#case-study" : project.link}
                                                    aria-label={`Link for ${project.title}`}
                                                    className="p-1.5 rounded-lg border border-border hover:border-primary/40 hover:text-foreground transition-colors"
                                                >
                                                    <ArrowUpRight size={13} />
                                                </a>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </Section>
    );
}