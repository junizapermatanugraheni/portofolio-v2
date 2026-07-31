import { Mail, MapIcon, Phone } from "lucide-react";
import { Section } from "../layout/Section";
import { IconButton } from "../ui/Button/IconButton";
import { Card } from "../ui/Card/Card";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

export function Contact() {
    return (
        <Section id="contact" className="py-24 flex flex-col justify-center bg-surface">
            <div className="space-y-6">
                <Card className="bg-background-alt shadow-card p-4">
                    <div className="p-4">
                        {/* Header */}
                        <Heading level="h4">Contact Me</Heading>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4">
                        <Card className="p-4 flex flex-row gap-3 items-center">
                            <IconButton variant="solid"><Phone /></IconButton>
                            <div>
                                <Heading className="text-md font-bold">Phone/WhatsApp</Heading>
                                <Text variant="sm">083842161224</Text>
                            </div>
                        </Card>
                        <Card className="p-4 flex flex-row gap-3 items-center">
                            <IconButton variant="solid"><Mail /></IconButton>
                            <div>
                                <Heading className="text-md font-bold">Gmail</Heading>
                                <Text variant="sm">junizanugraheni@gmail.com</Text>
                            </div>

                        </Card>
                        <Card className="p-4 flex flex-row gap-3 items-center">
                            <IconButton variant="solid"><MapIcon /></IconButton>
                            <div>
                                <Heading className="text-md font-bold">Address</Heading>
                                <Text variant="sm">Yogyakarta, Indonesia</Text>
                            </div>
                        </Card>
                        {/* Content */}
                    </div>
                    <div>
                        {/* Footer */}
                    </div>
                </Card>
            </div>
        </Section>
    )
}