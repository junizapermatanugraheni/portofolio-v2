import { cva } from "class-variance-authority";

export const cardVariants = cva(
    [
        "rounded-2xl",
        "transition-all",
        "duration-200",
        "ease-out",
        "overflow-hidden",
    ].join(" "),
    {
        variants: {
            variant: {
                outlined: [
                    "bg-surface",
                    "border",
                    "border-border",
                    "shadow-[var(--shadow-card)]",
                ].join(" "),

                elevated: [
                    "bg-surface",
                    "border",
                    "border-border-subtle",
                    "shadow-[var(--shadow-elevated)]",
                ].join(" "),

                ghost: "bg-transparent",
            },

            hover: {
                true: [
                    "hover:-translate-y-0.5",
                    "hover:shadow-[var(--shadow-card-hover)]",
                    "hover:border-border",
                ].join(" "),

                false: "",
            },
        },

        defaultVariants: {
            variant: "outlined",
            hover: true,
        },
    }
);