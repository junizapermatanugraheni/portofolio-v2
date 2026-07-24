import { Card } from "@/component/ui/Card/Card";
import { Project } from "./Project.type";
import Image from "next/image";

interface ProjectCardProps {
    items: Project[];
}
export function ProjectCard({
    items,
}: ProjectCardProps) {
    return (
        <div className="space-y-6">
            {items.map((project, index) => (
                <Card key={project.id} variant="elevated" hover>
                    <div>
                        {/* header  */}
                        <Image src={project.image} alt={project.title} width={600} height={400} />
                    </div>
                    <div>
                        {/* content */}
                    </div>
                    <div>
                        {/* footer */}
                    </div>
                </Card>
            ))}
        </div>
    )
}