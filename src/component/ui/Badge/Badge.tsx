import { cn } from "@/lib/cn"
import { BadgeProps } from "./Badge.types"
import { badgeVariants } from "./Badge.styles"

export function Badge({
    variant, size, className, children, ...props
}: BadgeProps) {

    return (
        <span className={cn(badgeVariants({ variant, size }), className)}
            {...props}>
            {children}
        </span>
    )
}