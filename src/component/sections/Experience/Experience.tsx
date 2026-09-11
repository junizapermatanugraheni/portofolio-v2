import { Section } from "@/component/layout/Section";
import { Badge } from "@/component/ui/Badge";
import { Heading } from "@/component/ui/Heading";
import { Text } from "@/component/ui/Text";
import { ExperienceData } from "./Experience.data";
import { Calendar, CheckCircle2, MapPin } from "lucide-react";
import { ResumeButton } from "@/component/layout/Navbar/ResumeButton";

export function Experience() {
    return (
        <Section id="experience" className="py-20 sm:py-28 border-t border-border/60">
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
                <div className="flex flex-col items-start max-w-2xl">
                    <Badge variant="glass" size="sm" className="mb-4">
                        Career Trajectory
                    </Badge>
                    <Heading level="h2" className="text-foreground tracking-tight">
                        Professional Experience
                    </Heading>
                    <Text variant="md" className="mt-4 text-foreground-secondary leading-relaxed">
                        Track record of building real-world enterprise web systems, driving performance optimizations, and translating complex business requirements into elegant interfaces.
                    </Text>
                </div>
                <div className="shrink-0">
                    <ResumeButton />
                </div>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-border pl-6 sm:pl-8 space-y-12 ml-2 sm:ml-4">
                {ExperienceData.map((item) => (
                    <div key={item.id} className="relative group">
                        {/* Timeline Node */}
                        <div className="absolute -left-7.75 sm:-left-9.75 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-surface bg-primary shadow-xs transition-transform duration-200 group-hover:scale-125" />

                        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-card transition-all duration-200 hover:border-primary/40 hover:shadow-card-hover">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/70">
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                                        {item.position}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-foreground-secondary">
                                        <span className="font-semibold text-primary">
                                            {item.company}
                                        </span>
                                        {item.location && (
                                            <>
                                                <span className="text-border">•</span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={11} /> {item.location}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-1.5 rounded-lg bg-surface-subtle px-3 py-1 text-xs font-mono font-medium text-foreground-secondary border border-border-subtle self-start sm:self-auto">
                                    <Calendar size={12} className="text-accent" />
                                    <span>{item.period}</span>
                                </div>
                            </div>

                            {/* Summary */}
                            <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed mt-4">
                                {item.summary}
                            </p>

                            {/* Highlights */}
                            {item.highlights && item.highlights.length > 0 && (
                                <div className="mt-4 space-y-2 pt-3 border-t border-border/60">
                                    <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground-secondary">
                                        Key Contributions &amp; Impact
                                    </span>
                                    <ul className="space-y-1.5 text-xs text-foreground-secondary">
                                        {item.highlights.map((highlight) => (
                                            <li
                                                key={highlight}
                                                className="flex items-start gap-2"
                                            >
                                                <CheckCircle2
                                                    size={13}
                                                    className="text-primary shrink-0 mt-0.5"
                                                />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technologies */}
                            <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                                {item.technologies.map((tech) => (
                                    <Badge key={tech} variant="neutral" size="xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}