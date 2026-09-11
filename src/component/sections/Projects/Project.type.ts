export interface Project {
    id: number;
    title: string;
    label: string;
    year: string;
    description: string;
    role?: string;
    keyFeatures?: string[];
    technologies: string[];
    github?: string;
    link?: string;
    featured?: boolean;
    previewType?: "insightfull" | "erp" | "journal" | "dashboard";
    image?: string;
}