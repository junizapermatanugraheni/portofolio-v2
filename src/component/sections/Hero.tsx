import { ArrowRight, Mail } from "lucide-react";
import { Section } from "../layout/Section/Section";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconButton } from "../ui/Button/IconButton";

export function Hero() {
    return (
        <Section id="hero" className="min-h-screen flex items-center">
            <div className="max-w-2xl space-y-6">
                <div>
                    <Text variant="sm" tone="foreground">Hi, I`m</Text>
                    <Heading level="h2" className="text-accent">Juniza Permata Nugraheni</Heading>
                    <Heading level="h5" className="text-foreground">Front End Developer</Heading>
                </div>
                <div className="space-y-6">
                    <Text variant="sm" tone="foreground" className="max-w-xl">Saya Front End Developer yang berfokus pada
                        pengembangan antarmuka web modern, responsif,
                        dan user-friendly menggunakan React,
                        Next.js, dan TypeScript.</Text>
                    <div className="flex items-center gap-3">
                        <IconButton size="sm" variant="outline">
                            <FaGithub />
                        </IconButton>
                        <IconButton size="sm" variant="outline">
                            <FaLinkedin />
                        </IconButton>
                        <IconButton size="sm" variant="outline">
                            <FaInstagram />
                        </IconButton>
                        <IconButton size="sm" variant="outline">
                            <FaFacebook />
                        </IconButton>
                    </div>

                </div>
            </div>
        </Section>
    )
}