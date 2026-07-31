import { Badge } from "@/component/ui/Badge";
import { Section } from "../../layout/Section";
import { Heading } from "../../ui/Heading";
import { ProjectData } from "./Project.data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
    return (
        <Section id="projects" className="py-24 flex flex-col justify-center">
            <div className="space-y-6">
                <Badge variant="glass" className="mb-5">✨ My Recent Projects</Badge>
                <Heading level="h2" className="space-x-3">
                    <span className="text-foreground">Featured  </span>
                    <span className="gradient-text">Projects</span>
                </Heading>
                <ProjectCard items={ProjectData} />
            </div>
        </Section>
    )
}