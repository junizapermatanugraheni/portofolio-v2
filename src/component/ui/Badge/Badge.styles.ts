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

        "transition-all",
        "duration-300",
        "ease-out",

        "shadow-card",

        
    ].join(" "),
    {
        variants: {
            variant: {
                primary:
                    "bg-primary/10 border-primary/10 text-primary",

                secondary:
                    "bg-secondary/10 border-secondary/20 text-secondary",

                accent:
                    "bg-accent/15 border-accent/20 text-accent",

                mint:
                    "bg-mint/20 border-mint/20 text-mint",

                peach:
                    "bg-peach/25 border-peach/30 text-[#C77B55]",

                neutral:
                    "bg-white/70 border-border text-foreground-secondary",

                glass:
                    "bg-white/40 backdrop-blur-xl border-white/60 text-foreground",
            },

            size: {
                xs: "px-2.5 py-1 text-[10px]",
                sm: "px-3 py-1.5 text-xs",
                md: "px-4 py-2 text-sm",
                lg: "px-5 py-2.5 text-base",
            },
        },

        defaultVariants: {
            variant: "neutral",
            size: "sm",
        },
    }
);