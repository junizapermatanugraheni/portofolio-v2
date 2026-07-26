import { Card } from "@/component/ui/Card/Card";
import { Project } from "./Project.type";
import Image from "next/image";
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {items.map((project, index) => (
                    <Card key={project.id} variant="outlined" className="overflow-hidden">
                        <div className="flex h-full flex-col overflow-hidden">
                            <div className="relative">
                                {/* header  */}
                                <Image src={project.image} alt={project.title} width={600} height={400} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl" />
                                <div className="absolute -bottom-5 right-6 flex h-13 w-13 items-center justify-center rounded-sm bg-gradient-to-b from-[#fd5e36] to-[#e07a5f] text-white font-bold shadow-lg">
                                    {(index + 1).toString().padStart(2, "0")}
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-1 flex-col p-6">
                                    {/* content */}
                                    <Heading level="h5">{project.title}</Heading>
                                    <Text variant="sm" className="mt-2 leading-7 line-clamp-2">{project.description}</Text>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.map((items) => (
                                            <Badge key={items} variant="accent">{items}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-auto pt-6 p-6 space-x-2 border-t border-gray-200">
                                    {/* footer */}
                                    <Button size="sm">Github <ArrowUpRight size={15} /></Button>
                                    <Button size="sm" variant="secondary" className="mt-2 lg:mt-0">Live Preview <ArrowUpRight size={15} /></Button>

                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}