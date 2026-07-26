import { cva } from "class-variance-authority";

export const cardVariants = cva(
    "rounded-xl transition-all duration-300 ease-out",
    {
        variants: {
            variant: {
                outlined: "border border-border bg-white",
                elevated: "border border-border bg-background shadow-md",
                ghost: "bg-transparent",
            },
            hover: {
                true: "-translate-y-1 shadow-lg",
                false: "",
            },
        },
        defaultVariants: {
            variant: "outlined",
            hover: false,
        },
    }
);