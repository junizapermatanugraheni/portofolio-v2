import { cva } from "class-variance-authority";

export const badgeVariants = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "gap-1.5",
        "rounded-full",
        "border",
        "font-medium",
        "tracking-wide",
        "transition-colors",
        "duration-200",
    ].join(" "),
    {
        variants: {
            variant: {
                primary:
                    "bg-primary-light border-primary/20 text-primary",

                secondary:
                    "bg-secondary-light border-secondary/20 text-secondary",

                accent:
                    "bg-accent-light border-accent/20 text-accent",

                mint:
                    "bg-mint-light border-mint/20 text-mint",

                peach:
                    "bg-peach-light border-accent/20 text-accent",

                neutral:
                    "bg-surface border-border text-foreground-secondary",

                glass:
                    "bg-surface/80 backdrop-blur-sm border-border text-foreground shadow-xs",
            },

            size: {
                xs: "px-2 py-0.5 text-[11px]",
                sm: "px-2.5 py-1 text-xs",
                md: "px-3.5 py-1.5 text-xs font-semibold",
                lg: "px-4 py-2 text-sm font-semibold",
            },
        },

        defaultVariants: {
            variant: "neutral",
            size: "sm",
        },
    }
);