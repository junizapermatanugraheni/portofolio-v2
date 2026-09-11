import { Experience } from "./Experience.type";

export const ExperienceData: Experience[] = [
    {
        id: 1,
        company: "PT Dinamika Mediakom",
        position: "Front End Developer",
        period: "Jan 2025 - Present",
        location: "Indonesia",
        summary:
            "Engineered internal enterprise dashboards, inventory tracking tools, and reporting modules. Refactored spaghetti code into modular component trees while integrating complex RESTful APIs.",
        highlights: [
            "Refactored legacy monolithic dashboards into reusable Vue/React components, reducing UI maintenance debt by 35%.",
            "Integrated complex REST APIs with optimistic client state, error fallbacks, and retry mechanisms.",
            "Standardized responsive breakpoints ensuring seamless operation across field tablets and desktop monitors.",
        ],
        technologies: [
            "Vue.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "REST API",
            "Zustand",
        ],
    },
    {
        id: 2,
        company: "CV Seven Smarts Indonesia",
        position: "Mobile Developer",
        period: "Jan 2023 - Jan 2024",
        location: "Indonesia",
        summary:
            "Engineered mobile solutions across tracking, reporting, and planning applications. Modernized existing Flutter codebases for better maintainability and integrated RESTful APIs to deliver seamless user experiences",
        highlights: [
            "Design and implemented responsive mobile user interface (UI) using flutter, integrating them seamlessly with RESTful APIs provided by the CodeIgniter backend team.",
            "Developed new features and enhanced existing app interfaces to optimize usability and improve overall user experience (UX).",
            "Engaged directly with clients to identify usability challenges, gather functional requirements, and provide effective technical solutions.",
            "Guided and supported clients during the initial rollout and adoption phase to ensure smooth operational integration"
        ],
        technologies: [
            "Flutter",
            "Dart",
            "REST API",
            "State Management",
            "Location Services (GPS)",
            "Git & GitHub",
            "Offline Caching"
        ],
    },
];