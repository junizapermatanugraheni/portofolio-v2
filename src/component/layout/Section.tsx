import { Container } from "./Container";

type SectionProps = {
    id?: string;
    children: React.ReactNode;
    className?: string;
};

export function Section({
    id,
    children,
    className = "",
}: SectionProps) {
    return (
        <section
            id={id}
            className={`py-20 lg:py-28 ${className}`}
        >
            <Container>{children}</Container>
        </section>
    );
}