import { Section } from "../../layout/Section";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { Badge } from "../../ui/Badge";
import { Card } from "../../ui/Card/Card";
import {
    AlertCircle,
    ArrowUpRight,
    CheckCircle2,
    Code2,
    Cpu,
    ExternalLink,
    GitCommit,
    Layers,
    Lightbulb,
    Sparkles,
    Trophy,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/component/ui/Button";

export function ProjectCaseStudy() {
    const techStack = [
        "Next.js (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "DummyJSON API",
        "Vercel Deployment",
    ];

    const challenges = [
        {
            title: "API Data Mapping & Category Filtering",
            problem:
                "DummyJSON returns products across distinct categories with varying attribute availability (brands, discount percentages, stock levels), requiring defensive typing.",
            resolution:
                "Defined TypeScript interfaces for product payloads and implemented utility mappers to guarantee consistent rendering across search, category filters, and product cards.",
        },
        {
            title: "Responsive Comparison Drawer UX",
            problem:
                "Displaying side-by-side product specs on mobile screens often leads to cramped, unreadable tables and bad user experience.",
            resolution:
                "Designed a collapsible bottom comparison bar that tracks selected items and opens a horizontally scrollable comparison matrix tailored for mobile and desktop screens.",
        },
    ];

    return (
        <Section id="case-study" className="py-20 sm:py-28 border-t border-border/60">
            {/* Header */}
            <div className="flex flex-col items-start max-w-3xl mb-12 sm:mb-16">
                <Badge variant="glass" size="sm" className="mb-4">
                    <Sparkles size={12} className="text-accent mr-1" />
                    Case Study · Featured Project
                </Badge>
                <Heading level="h2" className="text-foreground tracking-tight">
                    Mini Store: Building an AI-assisted shopping experience.
                </Heading>
                <Text variant="md" className="mt-4 text-foreground-secondary leading-relaxed">
                    A look at the frontend architecture, component composition, and responsive UX behind building a fast, modern e-commerce storefront with natural-language discovery.
                </Text>
            </div>

            {/* Case Study Grid */}
            <div className="space-y-10">
                {/* Problem vs. Solution Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 sm:p-8 bg-surface border border-border">
                        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-3">
                            <AlertCircle size={16} />
                            <span>The Problem</span>
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-3">
                            Search Friction in Traditional Catalogs
                        </h3>
                        <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                            Traditional e-commerce catalogs require users to guess exact keywords or navigate nested category menus. When shoppers have specific intent (e.g. &ldquo;Find a laptop under $1,000&rdquo; or &ldquo;Best rated beauty products&rdquo;), rigid filter menus slow down the shopping journey.
                        </p>
                    </Card>

                    <Card className="p-6 sm:p-8 bg-surface border border-border">
                        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-3">
                            <Lightbulb size={16} />
                            <span>The Solution</span>
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-3">
                            AI Assistant &amp; Interactive Shopping Tools
                        </h3>
                        <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                            Engineered an intuitive interface featuring an AI Shopping Assistant with quick-prompt chips, real-time catalog search, category filtering, a persistent comparison drawer, and instant wishlist and cart updates.
                        </p>
                    </Card>
                </div>

                {/* Core Architecture Breakdown */}
                <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-card space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
                        <div>
                            <span className="text-xs font-mono uppercase text-primary font-semibold">
                                Architecture &amp; Features
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1">
                                Technical Highlights
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <Badge key={tech} variant="neutral" size="xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                        <div className="space-y-2.5 p-4 rounded-2xl bg-surface-subtle border border-border-subtle">
                            <div className="flex items-center gap-2 font-bold text-foreground">
                                <Code2 size={16} className="text-primary" />
                                <span>AI Assistant Interface</span>
                            </div>
                            <p className="text-foreground-secondary leading-relaxed">
                                Natural-language query bar with suggested prompt chips (&ldquo;Find a laptop under $1,000&rdquo;, &ldquo;Best rated beauty products&rdquo;) connecting intent directly to catalog discovery.
                            </p>
                        </div>

                        <div className="space-y-2.5 p-4 rounded-2xl bg-surface-subtle border border-border-subtle">
                            <div className="flex items-center gap-2 font-bold text-foreground">
                                <Layers size={16} className="text-accent" />
                                <span>Wishlist &amp; Cart State</span>
                            </div>
                            <p className="text-foreground-secondary leading-relaxed">
                                Responsive client state with item counters, add/remove handlers, and clean badge notifications across desktop and mobile header navigation.
                            </p>
                        </div>

                        <div className="space-y-2.5 p-4 rounded-2xl bg-surface-subtle border border-border-subtle">
                            <div className="flex items-center gap-2 font-bold text-foreground">
                                <Cpu size={16} className="text-emerald-700" />
                                <span>Product Comparison Drawer</span>
                            </div>
                            <p className="text-foreground-secondary leading-relaxed">
                                Interactive side-by-side comparison allowing users to evaluate ratings, discounts, stock availability, and specs for up to 4 selected items simultaneously.
                            </p>
                        </div>
                    </div>

                    {/* Engineering Challenges & Decisions */}
                    <div className="space-y-4 pt-4 border-t border-border">
                        <h4 className="font-bold text-sm text-foreground uppercase tracking-wider">
                            Engineering Challenges &amp; Solutions
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {challenges.map((c, i) => (
                                <div
                                    key={c.title}
                                    className="p-4 rounded-xl border border-border bg-white space-y-2"
                                >
                                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                                        <GitCommit size={14} className="text-primary" />
                                        <span>Focus {i + 1}: {c.title}</span>
                                    </div>
                                    <p className="text-xs text-foreground-secondary">
                                        <span className="font-medium text-foreground">Problem: </span>
                                        {c.problem}
                                    </p>
                                    <p className="text-xs text-foreground-secondary">
                                        <span className="font-medium text-emerald-800">Solution: </span>
                                        {c.resolution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Outcomes & Metrics */}
                    <div className="rounded-2xl bg-primary-light/60 border border-primary/20 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                                <Trophy size={20} />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-foreground">
                                    Deployed &amp; Live on Vercel
                                </h5>
                                <p className="text-xs text-foreground-secondary mt-0.5">
                                    Fast page load, responsive on mobile and desktop devices, and connected to live DummyJSON API.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <a
                                href="https://mini-store-ashy.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button size="sm" variant="primary" className="w-full sm:w-auto gap-1.5">
                                    <span>Live Preview</span>
                                    <ExternalLink size={13} />
                                </Button>
                            </a>
                            <a
                                href="https://github.com/junizapermatanugraheni/mini-store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button size="sm" variant="outline" className="w-full sm:w-auto gap-1.5">
                                    <FaGithub size={13} />
                                    <span>Source Code</span>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
