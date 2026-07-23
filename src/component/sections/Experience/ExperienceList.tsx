import { Text } from "@/component/ui/Text";
import { Experience } from "./Experience.type";
import { Heading } from "@/component/ui/Heading";
import { cn } from "@/lib/cn";

interface ExperienceListProps {
    items: Experience[];
    selectedId: number;
    onSelect: (id: number) => void;
}

export function ExperienceList({
    items, selectedId, onSelect
}: ExperienceListProps) {
    return (
        <div className="space-y-3">
            <div className="flex gap-3 items-center my-3">
                <div className="flex-grow border-t border-accent"></div>
                <Heading level="h5">Experience</Heading>
                <div className="flex-grow border-t border-accent"></div>
            </div>
            {items.map((item) => (
                <div key={item.id} onClick={() => onSelect(item.id)} className={cn(" cursor-pointer p-3 transition-all duration-200 rounded-sm text-foreground-secondary hover:bg-accent/10 hover:border-accent hover:text-accent", item.id == selectedId && "p-3 text-accent bg-accent/10 rounded-sm")}>
                    <Text variant="sm" weight="bold">{item.company}</Text>
                    <Text variant="xs" weight="normal">{item.period}</Text>
                </div>
            ))}
        </div>
    )
}