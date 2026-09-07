import { cn } from "@/lib/cn";
import { TextProps } from "./Text.types";
import { TextVariants } from "./Text.styles";

export function Text({
    variant, tone, weight, className, children, ...props
}: TextProps) {

    return (
        <p className={cn(TextVariants({ variant, weight, tone }), className)} {...props}>
            {children}
        </p>
    )
}