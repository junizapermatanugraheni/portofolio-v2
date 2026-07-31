import { Mail, MapIcon, Phone } from "lucide-react";
import { Section } from "../layout/Section";
import { IconButton } from "../ui/Button/IconButton";
import { Card } from "../ui/Card/Card";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Badge } from "../ui/Badge";

export function Contact() {
    return (
        <Section id="contact" className="py-24 flex flex-col justify-center bg-surface">
            <div className="space-y-6">
                <Badge variant="glass">
                    📬 Lets Connect
                </Badge>

                <Heading level="h2" className="mt-5">
                    Lets Build Something Together
                </Heading>

                <Text
                    className="mt-3 max-w-2xl text-foreground-secondary"
                >
                    I`m always open to discussing new opportunities, freelance projects,
                    or simply having a chat about web development.
                </Text>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <Card className="p-4 flex flex-row gap-4 items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-card ring-1 ring-white/40">
                            <Phone strokeWidth={2.2} />
                        </div>
                        <div>
                            <Heading className="text-md font-bold">Phone/WhatsApp</Heading>
                            <Text variant="sm">083842161224</Text>
                        </div>
                    </Card>
                    <Card className="p-4 flex flex-row gap-4 items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--secondary),var(--lavender))] text-white shadow-card  ring-1 ring-white/40">
                            <Mail />
                        </div>
                        <div>
                            <Heading className="text-md font-bold">Gmail</Heading>
                            <Text variant="sm">junizanugraheni@gmail.com</Text>
                        </div>

                    </Card>
                    <Card className="p-4 flex flex-row gap-4 items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--mint),var(--primary))] text-white shadow-card  ring-1 ring-white/40">
                            <MapIcon />
                        </div>
                        <div>
                            <Heading className="text-md font-bold">Address</Heading>
                            <Text variant="sm">Yogyakarta, Indonesia</Text>
                        </div>
                    </Card>
                    {/* Content */}
                </div>
            </div>
        </Section>
    )
}