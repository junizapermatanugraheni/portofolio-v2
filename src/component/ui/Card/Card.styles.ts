import { cva } from "class-variance-authority";

export const cardVariants = cva(
    "rounded-lg transition-all duration-300 ease-out",
    {
        variants: {
            variant: {
                outlined: "border border-border bg-background",
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