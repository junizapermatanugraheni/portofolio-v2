import { cva } from "class-variance-authority";

export const badgeVariants = cva(
    [
        'inline-flex',
        'items-center',
        'justify-center',
        'font-medium',
        'rounded-md',
        'px-2.5',
        'py-1',
        'border',
    ],
    {
        variants: {
            variant: {
                primary: "bg-primary/10 text-primary border-primary/50",
                secondary: "bg-foreground-secondary/10 text-foreground-secondary border border-secondary",
                accent: "bg-accent/10 text-accent",
                danger: "bg-error/10 text-error",
                success: "bg-success/10 text-success",
                warning: "bg-warning/10 text-warning",
            },
            size: {
                xs: "text-xs ",
                sm: "text-sm",
                md: "text-md",
                lg: "text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "xs"
        }
    }
)