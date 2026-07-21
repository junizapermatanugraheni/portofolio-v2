import { cn } from "@/lib/cn";
import { HeadingProps } from "./Heading.type";
import { headingStyles } from "./Heading.styles";

export function Heading({
    level = "h1",
    className,
    children,
    ...props
}: HeadingProps) {
    const Component = level;

    return (
        <Component className={cn(headingStyles[level], className)}
            {...props}>{children}</Component>
    )
}