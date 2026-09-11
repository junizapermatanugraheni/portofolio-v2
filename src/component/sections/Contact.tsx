import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Badge } from "../ui/Badge";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export function Contact() {
    const contactLinks = [
        {
            icon: Mail,
            label: "Email",
            value: profile.email,
            href: `mailto:${profile.email}`,
        },
        {
            icon: Phone,
            label: "Phone / WhatsApp",
            value: "083842161224",
            href: "https://wa.me/6283842161224",
        },
        {
            icon: MapPin,
            label: "Location",
            value: profile.location,
            href: undefined,
        },
    ];

    return (
        <Section id="contact" className="py-20 sm:py-28 border-t border-border/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left: CTA copy */}
                <div className="lg:col-span-7 flex flex-col items-start">
                    <Badge variant="glass" size="sm" className="mb-4">
                        Open to Work
                    </Badge>
                    <Heading level="h2" className="text-foreground tracking-tight">
                        Have a project in mind?
                    </Heading>
                    <Text variant="md" className="mt-4 text-foreground-secondary leading-relaxed max-w-xl">
                        Let&apos;s build something useful together. Whether it&apos;s a new frontend architecture, a component system, an enterprise dashboard, or a product idea — I&apos;m available for full-time roles, freelance contracts, and technical consultations.
                    </Text>

                    <div className="mt-8 flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto">
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-primary-hover active:scale-[0.98] transition-all w-full sm:w-auto justify-center"
                        >
                            <Mail size={15} />
                            Send an Email
                        </a>
                        <a
                            href="https://wa.me/6283842161224"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-xs hover:border-primary/40 hover:bg-surface-subtle active:scale-[0.98] transition-all w-full sm:w-auto justify-center"
                        >
                            <Phone size={15} />
                            WhatsApp
                        </a>
                    </div>
                </div>

                {/* Right: Contact Details & Social Links */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="rounded-2xl border border-border bg-surface p-6 shadow-card space-y-4">
                        {contactLinks.map((link) => {
                            const Icon = link.icon;
                            const content = (
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-surface-subtle border border-border flex items-center justify-center text-primary shrink-0">
                                        <Icon size={16} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                                            {link.label}
                                        </div>
                                        <div className="text-sm font-medium text-foreground mt-0.5">
                                            {link.value}
                                        </div>
                                    </div>
                                </div>
                            );

                            return link.href ? (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="block rounded-xl p-3 hover:bg-surface-subtle transition-colors"
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={link.label} className="p-3">
                                    {content}
                                </div>
                            );
                        })}
                    </div>

                    {/* Social Links Block */}
                    <div className="rounded-2xl border border-border bg-surface p-5 shadow-card space-y-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                            Online Profiles
                        </span>
                        <div className="grid grid-cols-2 gap-3">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-subtle px-4 py-3 text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-surface transition-colors"
                            >
                                <FaGithub size={16} className="text-foreground" />
                                GitHub Repos
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-subtle px-4 py-3 text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-surface transition-colors"
                            >
                                <FaLinkedin size={16} className="text-[#0A66C2]" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}