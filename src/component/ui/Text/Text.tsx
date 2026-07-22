import { cn } from "@/lib/cn";
import { textVariants } from "./Text.styles";
import { TextProps } from "./Text.types";

export function Text({
    variant, tone, weight, className, children, ...props
}: TextProps) {

    return (
        <p className={cn(textVariants({ variant, weight, tone }), className)} {...props}>
            {children}
        </p>
    )
}