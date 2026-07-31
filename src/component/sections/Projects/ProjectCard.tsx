import { Card } from "@/component/ui/Card/Card";
import { Project } from "./Project.type";
import { Heading } from "@/component/ui/Heading";
import { Text } from "@/component/ui/Text";
import { Badge } from "@/component/ui/Badge";
import { Button } from "@/component/ui/Button";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    items: Project[];
}
export function ProjectCard({
    items,
}: ProjectCardProps) {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                {items.slice(0, 3).map((project, index) => (
                    <Card
                        key={project.id}
                        variant="elevated"
                        className="group overflow-hidden p-7 card-soft transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex h-full flex-col">
                            <div className="space-y-4">

                                <div className="flex items-center justify-between">

                                    <Badge
                                        variant="glass"
                                        size="xs"
                                    >
                                       🚀 {project.label}
                                    </Badge>

                                    <Text
                                        variant="xs"
                                        className="text-foreground-secondary"
                                    >
                                        2026
                                    </Text>

                                </div>

                                <Heading
                                    level="h5"
                                    className="leading-tight"
                                >
                                    {project.title}
                                </Heading>

                                <Text
                                    variant="sm"
                                    className=" text-foreground-secondary leading-7 line-clamp-3"
                                >
                                    {project.description}
                                </Text>

                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.slice(0, 3).map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="primary"
                                        size="xs"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                                {project.technologies.length > 3 && (
                                    <Badge variant="glass" size="xs">
                                        +{project.technologies.length - 3}
                                    </Badge>
                                )}
                            </div>
                            <div className="flex-1" />
                            <div className="mt-6 border-t border-border/60 pt-5 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <Button size="sm">
                                        Github
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="glass"
                                    >
                                        Live Preview
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </Card>
                ))}
            </div>
            <hr className="my-6 border-primary/30" />
            <Button
                variant="ghost"
                size="sm"
            >
                View All Project <ArrowUpRight size={15} />
            </Button>
        </div>
    )
}