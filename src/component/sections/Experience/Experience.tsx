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
        <Section id="experience" className="pb-24 flex flex-col justify-center">
            <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
                    <ExperienceList
                        items={ExperienceData}
                        selectedId={selectedId}
                        onSelect={handleSelect}
                    />
                    <ExperienceDetail
                        experience={selectedExperience}
                    />
                </div>
            </div>
        </Section>
    )
}