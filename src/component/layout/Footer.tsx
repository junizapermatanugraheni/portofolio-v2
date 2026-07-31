import { Text } from "../ui/Text";

export function Footer() {
    return (
        <footer className="py-10">
            <div className="container">
                <div className="flex items-center justify-center">
                    <Text
                        variant="sm"
                        className="text-foreground-secondary"
                    >
                        © 2026 Juniza Permata Nugraheni · Built with Next.js & TypeScript
                    </Text>
                </div>
            </div>
        </footer>
    )
}