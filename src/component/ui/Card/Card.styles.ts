import { cva } from "class-variance-authority";

export const cardVariants = cva(
    [
        "rounded-[28px]",
        "transition-all",
        "duration-300",
        "ease-out",
        "overflow-hidden",
    ].join(" "),
    {
        variants: {
            variant: {
                outlined: [
                    "bg-background",
                    "border",
                    "border-white/70",
                    "shadow-[var(--shadow-card)]",
                ].join(" "),

                elevated: [
                    "bg-background",
                    "backdrop-blur-lg",
                    "shadow-[var(--shadow-card)]",
                ].join(" "),

                ghost: "bg-transparent",
            },

            hover: {
                true: [
                    "hover:-translate-y-1",
                    "hover:shadow-[var(--shadow-card-hover)]",
                    "hover:border-white",
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