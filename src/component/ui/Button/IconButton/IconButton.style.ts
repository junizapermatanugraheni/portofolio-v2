import { cva } from "class-variance-authority";

export const IconButtonVariants = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",

        "rounded-2xl",

        "transition-all",

        "duration-300",

        "ease-out",

        "cursor-pointer",

        "focus-visible:outline-none",

        "focus-visible:ring-2",

        "focus-visible:ring-primary/40",
    ],
    {
        variants: {
            variant: {
                solid: [
                    "bg-primary",
                    "text-white",
                    "shadow-card",
                    "hover:bg-primary-hover",
                    "hover:shadow-card-hover",
                    "hover:-translate-y-0.5",
                ].join(" "),

                outline: [
                    "bg-surface",
                    "text-foreground",
                    "border",
                    "border-border",
                    "shadow-card",
                    "hover:border-primary",
                    "hover:text-primary",
                    "hover:shadow-card-hover",
                ].join(" "),

                ghost: [
                    "bg-transparent",
                    "text-foreground-secondary",
                    "hover:bg-primary-soft",
                    "hover:text-primary",
                ].join(" "),

                soft: [
                    "bg-primary-soft",
                    "text-primary",
                    "border",
                    "border-white/60",
                    "shadow-card",
                    "hover:bg-primary-light",
                    "hover:shadow-card-hover",
                ].join(" "),

                glass: [
                    "bg-white/50",
                    "backdrop-blur-xl",
                    "border",
                    "border-white/70",
                    "text-foreground",
                    "shadow-card",
                    "hover:shadow-card-hover",
                ].join(" "),
            },
            size: {
                xs: "w-8 h-8 text-sm",

                sm: "w-10 h-10 text-base",

                md: "w-12 h-12 text-lg",

                lg: "w-14 h-14 text-xl",

                xl: "w-16 h-16 text-2xl",
            }
        },
        defaultVariants: {
            variant: "soft",
            size: "md",
        },
    }
);