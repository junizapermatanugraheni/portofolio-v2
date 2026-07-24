import { Heading } from "@/component/ui/Heading";
import { Experience } from "./Experience.type";
import { Text } from "@/component/ui/Text";
import { Badge } from "@/component/ui/Badge";
import { Dot } from "lucide-react";

interface ExperienceDetailProps {
    experience: Experience;
}
export function ExperienceDetail({
    experience,
}: ExperienceDetailProps) {
    return (
        <div className="space-y-3">
            <div className="flex gap-3 items-center my-3">
                <div className="flex-grow border-t border-accent"></div>
                <Heading level="h5">Description</Heading>
                <div className="flex-grow border-t border-accent"></div>
            </div>
            <div>
                <Heading level="h5"> {experience.position} </Heading>
                <Text variant="sm"> {experience.company} </Text>
                <Text variant="sm"> {experience.period}</Text>
            </div>
            <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="success">{tech}</Badge>
                ))}
            </div>
        </div>

    );
}