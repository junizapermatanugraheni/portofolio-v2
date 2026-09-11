import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card/Card";
import {
    Code,
    Database,
    Palette,
    Workflow,
} from "lucide-react";

export function About() {
    const skillGroups = [
        {
            category: "Frontend Core",
            icon: Code,
            description: "Component architecture, declarative UI, and type-safe systems.",
            skills: ["React", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "HTML5 & Web APIs"],
            badgeTone: "primary" as const,
        },
        {
            category: "Styling & Design Systems",
            icon: Palette,
            description: "Modular styling, token pipelines, and responsive micro-layouts.",
            skills: ["Tailwind CSS v4", "CVA (Class Variance Authority)", "Responsive Design", "CSS Variables", "Accessible UI (a11y)"],
            badgeTone: "mint" as const,
        },
        {
            category: "Data & API Integration",
            icon: Database,
            description: "Efficient fetching, optimistic updates, and clean state handling.",
            skills: ["REST API", "JSON Contract Modeling", "Zustand & Context", "Async State", "Client-Side Caching"],
            badgeTone: "accent" as const,
        },
        {
            category: "Tools & Engineering Workflow",
            icon: Workflow,
            description: "Modern toolchain for shipping reliable software with speed.",
            skills: ["Git & GitHub", "Figma Handoff", "Vite & Webpack", "Chrome DevTools", "Storybook Basics"],
            badgeTone: "secondary" as const,
        },
    ];

    return (
        <Section id="about" className="py-20 sm:py-28 border-t border-border/60">
            {/* Section Header */}
            <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
                <Badge variant="glass" size="sm" className="mb-4">
                    About &amp; Core Competencies
                </Badge>
                <Heading level="h2" className="text-foreground tracking-tight">
                    Engineering thoughtful web products from concept to production.
                </Heading>
                <Text variant="md" className="mt-4 text-foreground-secondary leading-relaxed">
                    I treat frontend development as the intersection of system engineering and human interaction. My goal is to build interfaces that stay maintainable as codebases scale, while delivering frictionless, fast experiences for end users.
                </Text>
            </div>

            {/* Grid: Narrative Summary + Skills System */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left: Structured Profile & Engineering Values */}
                <div className="lg:col-span-4 space-y-4">
                    <Card className="p-6 bg-surface border border-border">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-primary-light text-primary flex items-center justify-center font-bold text-sm">
                                    JN
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-foreground">
                                        Juniza Permata Nugraheni
                                    </h4>
                                    <p className="text-xs text-foreground-subtle">
                                        Frontend Developer · Indonesia
                                    </p>
                                </div>
                            </div>

                            <hr className="border-border" />

                            <div className="space-y-2.5 text-xs text-foreground-secondary">
                                <div className="flex items-start justify-between">
                                    <span className="text-foreground-subtle">Primary Stack</span>
                                    <span className="font-medium text-foreground text-right">
                                        React · Next.js · TS
                                    </span>
                                </div>
                                <div className="flex items-start justify-between">
                                    <span className="text-foreground-subtle">Industry Domain</span>
                                    <span className="font-medium text-foreground text-right">
                                        Enterprise ERP, SaaS, E-Commerce
                                    </span>
                                </div>
                                <div className="flex items-start justify-between">
                                    <span className="text-foreground-subtle">Core Philosophy</span>
                                    <span className="font-medium text-foreground text-right">
                                        Component Reusability &amp; Speed
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-xl bg-surface-subtle p-3.5 border border-border-subtle">
                                <p className="text-xs leading-relaxed text-foreground-secondary italic">
                                    &ldquo;Great frontend code isn&apos;t just about visuals; it is about resilient component APIs, predictable state, and zero friction for users.&rdquo;
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Quick Metric Pills */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl border border-border bg-surface text-center">
                            <div className="text-xl font-bold text-primary font-mono">
                                4+
                            </div>
                            <div className="text-[11px] text-foreground-secondary mt-1">
                                Years Building Web UIs
                            </div>
                        </div>
                        <div className="p-4 rounded-xl border border-border bg-surface text-center">
                            <div className="text-xl font-bold text-accent font-mono">
                                10+
                            </div>
                            <div className="text-[11px] text-foreground-secondary mt-1">
                                Production Systems
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Categorized Technical Proficiency Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skillGroups.map((group) => {
                        const Icon = group.icon;
                        return (
                            <Card
                                key={group.category}
                                className="p-5 bg-surface border border-border transition-all duration-200 hover:border-primary/40 hover:shadow-card-hover flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-2.5 mb-2">
                                        <div className="h-8 w-8 rounded-lg bg-surface-subtle border border-border flex items-center justify-center text-primary">
                                            <Icon size={16} />
                                        </div>
                                        <h3 className="font-semibold text-sm text-foreground">
                                            {group.category}
                                        </h3>
                                    </div>
                                    <p className="text-xs text-foreground-secondary leading-relaxed mb-4">
                                        {group.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/70">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface-subtle text-foreground border border-border/80"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}