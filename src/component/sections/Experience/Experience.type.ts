export interface Experience {
    id: number;
    company: string;
    position: string;
    period: string;
    location?: string;
    technologies: string[];
    summary: string;
    highlights?: string[];
}