import { Text } from "@/component/ui/Text";
import { Experience } from "./Experience.type";
import { Heading } from "@/component/ui/Heading";
import { ArrowUpRight, Dot } from "lucide-react";
import { Badge } from "@/component/ui/Badge";
import { Button } from "@/component/ui/Button";

interface ExperienceListProps {
    items: Experience[];
    selectedId: number;
    onSelect: (id: number) => void;
}

export function ExperienceList({
    items
}: ExperienceListProps) {
    return (
        <div className="space-y-6">
            <Badge variant="glass" className="mb-5">🚀 Career Journey</Badge>
            <Heading level="h2" className="space-x-3">
                <span className="text-foreground">Relevant</span>
                <span className="gradient-text">Experience</span>
            </Heading>
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-3 top-0 h-full w-px bg-accent/20" />
                {items.slice(0, 2).map((item) => (
                    <div key={item.id} className="relative pb-12 pl-10">
                        <div className="absolute left-3 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent" />
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Text variant="sm" weight="semibold">{item.position}</Text>
                                <Dot />
                                <Text variant="sm" weight="bold"> {item.company}</Text>
                                <Dot />
                                <Text variant="xs" weight="normal"> {item.period}</Text>
                            </div>
                            <Text variant="sm" weight="normal">{item.summary}</Text>
                            <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech) => (
                                    <Badge key={tech} variant="peach">{tech}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Button
                variant="ghost"
                size="sm"
            >
                View Full Resume <ArrowUpRight size={15} />
            </Button>
        </div>
    )
}