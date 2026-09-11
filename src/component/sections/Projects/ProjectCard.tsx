import { Project } from "./Project.type";
import { Heading } from "@/component/ui/Heading";
import { Text } from "@/component/ui/Text";
import { Badge } from "@/component/ui/Badge";
import { Button } from "@/component/ui/Button";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ProjectVisualMockup } from "./ProjectVisualMockup";

interface ProjectCardProps {
    items: Project[];
}

export function ProjectCard({ items }: ProjectCardProps) {
    const featuredProjects = items.filter((p) => p.featured);

    return (
        <div className="space-y-12 sm:space-y-16">
            {featuredProjects.map((project, index) => {
                const isEven = index % 2 === 1;

                return (
                    <div
                        key={project.id}
                        className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-card transition-all duration-300 hover:shadow-card-hover"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            {/* Visual Preview Side (Alternating on Desktop) */}
                            <div
                                className={`lg:col-span-6 w-full ${
                                    isEven ? "lg:order-2" : "lg:order-1"
                                }`}
                            >
                                <ProjectVisualMockup
                                    type={project.previewType}
                                    title={project.title}
                                    image={project.image}
                                    liveUrl={project.link}
                                />
                            </div>

                            {/* Content Side */}
                            <div
                                className={`lg:col-span-6 flex flex-col justify-center space-y-6 ${
                                    isEven ? "lg:order-1" : "lg:order-2"
                                }`}
                            >
                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Badge variant="glass" size="sm">
                                            {project.id === 1 && (
                                                <Sparkles
                                                    size={12}
                                                    className="text-accent mr-1"
                                                />
                                            )}
                                            {project.label}
                                        </Badge>
                                        <span className="text-xs font-mono text-foreground-subtle">
                                            {project.year}
                                        </span>
                                        {project.role && (
                                            <>
                                                <span className="text-border">
                                                    •
                                                </span>
                                                <span className="text-xs font-medium text-foreground-secondary">
                                                    {project.role}
                                                </span>
                                            </>
                                        )}
                                    </div>

                                    <Heading
                                        level="h3"
                                        className="text-foreground tracking-tight"
                                    >
                                        {project.title}
                                    </Heading>

                                    <Text
                                        variant="md"
                                        className="text-foreground-secondary leading-relaxed text-sm sm:text-base"
                                    >
                                        {project.description}
                                    </Text>
                                </div>

                                {/* Key Engineering Features */}
                                {project.keyFeatures && (
                                    <div className="space-y-2 pt-2 border-t border-border/80">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary">
                                            Key Engineering Deliverables
                                        </span>
                                        <ul className="space-y-1.5 text-xs text-foreground-secondary">
                                            {project.keyFeatures.map((feat) => (
                                                <li
                                                    key={feat}
                                                    className="flex items-start gap-2"
                                                >
                                                    <CheckCircle2
                                                        size={14}
                                                        className="text-primary shrink-0 mt-0.5"
                                                    />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="neutral"
                                            size="xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-4 flex flex-wrap items-center gap-3">
                                    {project.link === "#case-study" ? (
                                        <a href="#case-study">
                                            <Button
                                                size="md"
                                                className="gap-1.5 bg-primary hover:bg-primary-hover shadow-xs"
                                            >
                                                <span>Read Deep Case Study</span>
                                                <ArrowUpRight size={14} />
                                            </Button>
                                        </a>
                                    ) : (
                                        <a
                                            href={project.link || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button
                                                size="md"
                                                className="gap-1.5 bg-primary hover:bg-primary-hover shadow-xs"
                                            >
                                                <span>Live Demo</span>
                                                <ArrowUpRight size={14} />
                                            </Button>
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button
                                                variant="outline"
                                                size="md"
                                                className="gap-2"
                                            >
                                                <FaGithub size={14} />
                                                <span>Source Code</span>
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Archive Callout */}
            <div className="rounded-2xl border border-dashed border-border bg-surface-subtle/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">
                        Looking for more enterprise &amp; client work?
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground-secondary mt-1">
                        Explore complete project archive including ERP inventory
                        systems, mobile apps, and developer utilities.
                    </p>
                </div>
                <Link href="/projects" className="shrink-0">
                    <Button variant="outline" size="md" className="gap-2">
                        <span>View All Projects Archive</span>
                        <ArrowUpRight size={14} />
                    </Button>
                </Link>
            </div>
        </div>
    );
}