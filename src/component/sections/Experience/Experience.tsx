import { Section } from "@/component/layout/Section";
import { ExperienceList } from "./ExperienceList";
import { ExperienceDetail } from "./ExperienceDetail";
import { useState } from "react";
import { ExperienceData } from "./Experience.data";



export function Experience() {
    const [selectedId, setSelectedId] = useState(1);
    const selectedExperience = ExperienceData.find(
        (item) => item.id === selectedId
    );

    if (!selectedExperience) {
        return null;
    }

    const handleSelect = (id: number) => {
        console.log(id);
        setSelectedId(id);
    };

    return (
        <Section id="experience" className="py-24 flex flex-col justify-center bg-primary-light/40">
            <div className="space-y-6">
                <ExperienceList
                    items={ExperienceData}
                    selectedId={selectedId}
                    onSelect={handleSelect}
                />
            </div>
        </Section>
    )
}