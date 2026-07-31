import { cn } from "@/lib/cn";
import { CardProps } from "./Card.types";
import { cardVariants } from "./Card.styles";

export function Card({
    children,
    className,
    variant,
    hover,
}: CardProps) {
    return (
        <div
            className={cn(
                cardVariants({ variant, hover }),
                className
            )}
        >
            {children}
        </div>
    );
}