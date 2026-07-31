import { Section } from "../layout/Section/Section";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconButton } from "../ui/Button/IconButton";
import { Badge } from "../ui/Badge";

export function Hero() {
    return (
        <Section id="hero" className="pt-48 pb-24 flex flex-col justify-center">
            <div className="space-y-6">
                <Badge variant="glass" className="mb-5">🌿 Get to Know Me</Badge>
                <div>
                    <Text variant="sm" tone="foreground">Hi, I`m</Text>
                    <Heading level="h2" className="text-foreground">Juniza Permata Nugraheni</Heading>
                    <Heading level="h5" className="text-primary">Front End Developer</Heading>
                </div>
                <div className="space-y-6">
                    <Text variant="sm" tone="foreground" className="max-w-xl">Saya Front End Developer yang berfokus pada
                        pengembangan antarmuka web modern, responsif,
                        dan user-friendly menggunakan React,
                        Next.js, dan TypeScript.</Text>
                    <div className="flex items-center gap-3">
                        <IconButton size="sm" variant="soft">
                            <FaGithub />
                        </IconButton>
                        <IconButton size="sm" variant="soft">
                            <FaLinkedin />
                        </IconButton>
                        <IconButton size="sm" variant="soft">
                            <FaInstagram />
                        </IconButton>
                        <IconButton size="sm" variant="soft">
                            <FaFacebook />
                        </IconButton>
                    </div>
                </div>
            </div>
        </Section>
    )
}