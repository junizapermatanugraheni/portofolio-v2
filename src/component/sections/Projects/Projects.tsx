import { Badge } from "@/component/ui/Badge";
import { Section } from "../../layout/Section";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { ProjectData } from "./Project.data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
    return (
        <Section id="projects" className="py-20 sm:py-28 border-t border-border/60">
            <div className="space-y-10">
                <div className="flex flex-col items-start max-w-2xl">
                    <Badge variant="glass" size="sm" className="mb-4">
                        Featured Projects
                    </Badge>
                    <Heading level="h2" className="text-foreground tracking-tight">
                        What I&apos;ve built in production.
                    </Heading>
                    <Text variant="md" className="mt-4 text-foreground-secondary leading-relaxed">
                        Selected enterprise and product work — each project demonstrates specific frontend engineering decisions, architecture choices, and real-world problem solving.
                    </Text>
                </div>
                <ProjectCard items={ProjectData} />
            </div>
        </Section>
    );
}