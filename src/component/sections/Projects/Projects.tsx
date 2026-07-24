import { Section } from "../../layout/Section";
import { Heading } from "../../ui/Heading";
import { ProjectData } from "./Project.data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
    return (
        <Section id="project" className="pb-24 flex flex-col justify-center">
            <div className="space-y-3">
                <Heading level="h2" className="text-accent">Projects</Heading>
                <ProjectCard items={ProjectData} />
            </div>

        </Section>
    )
}