import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card/Card";
import {
    Activity,
    Compass,
    Cpu,
    GitMerge,
    Layers,
    Sliders,
    Workflow,
} from "lucide-react";

export function Process() {
    const steps = [
        {
            number: "01",
            title: "Understand",
            subtitle: "User Intent & Scope",
            description:
                "Clarify domain requirements, user journeys, data flow models, and browser constraints before writing a single line of component code.",
            icon: Compass,
        },
        {
            number: "02",
            title: "Architect",
            subtitle: "Design Tokens & Tokens",
            description:
                "Establish strict design tokens, fluid typography scales, semantic color roles, and accessible wireframe layouts.",
            icon: Layers,
        },
        {
            number: "03",
            title: "Build",
            subtitle: "Typed Component Primitives",
            description:
                "Develop modular UI primitives using React 19, TypeScript, and CVA with strict prop interfaces and zero unnecessary re-renders.",
            icon: Cpu,
        },
        {
            number: "04",
            title: "Integrate",
            subtitle: "State & API Pipelines",
            description:
                "Wire endpoints with optimistic UI updates, resilient error boundaries, and defensive validation against runtime edge cases.",
            icon: GitMerge,
        },
        {
            number: "05",
            title: "Refine",
            subtitle: "Performance & Accessibility",
            description:
                "Benchmark Core Web Vitals, audit WCAG compliance, eliminate layout shifts, and refine micro-interactions for polish.",
            icon: Activity,
        },
    ];

    return (
        <Section id="process" className="py-20 sm:py-28 border-t border-border/60">
            <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
                <Badge variant="glass" size="sm" className="mb-4">
                    Engineering Methodology
                </Badge>
                <Heading level="h2" className="text-foreground tracking-tight">
                    How I approach frontend engineering.
                </Heading>
                <Text variant="md" className="mt-4 text-foreground-secondary leading-relaxed">
                    Reliable frontend software doesn&apos;t happen by accident. I apply a systematic 5-step process designed to ship resilient, maintainable, and high-performance digital products.
                </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {steps.map((step) => {
                    const Icon = step.icon;
                    return (
                        <Card
                            key={step.number}
                            className="p-5 bg-surface border border-border flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:shadow-card-hover"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-mono text-xs font-bold text-accent">
                                        {step.number}
                                    </span>
                                    <div className="h-7 w-7 rounded-lg bg-surface-subtle border border-border flex items-center justify-center text-primary">
                                        <Icon size={14} />
                                    </div>
                                </div>
                                <h3 className="font-bold text-sm sm:text-base text-foreground">
                                    {step.title}
                                </h3>
                                <div className="text-[11px] font-medium text-foreground-subtle mb-3">
                                    {step.subtitle}
                                </div>
                                <p className="text-xs text-foreground-secondary leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
}
