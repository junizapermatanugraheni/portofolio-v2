export interface Project{
    id: number;
    title: string;
    label: string;
    year: string;
    description: string;
    // image: string;
    technologies: string [];
    github?: string;
    link?: string;
}