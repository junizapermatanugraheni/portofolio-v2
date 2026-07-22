import { cn } from "@/lib/cn";
import { Container } from "../Container/Container";
import { SectionProps } from "./Section.types";

export function Section({

    children,
    className,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn("...", className)}
            {...props}
        >
            <Container>{children}</Container>
        </section>
    );
}