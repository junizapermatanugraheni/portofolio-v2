import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "gap-2",

        "rounded-2xl",

        "font-medium",

        "transition-all",
        "duration-300",
        "ease-out",

        "cursor-pointer",
        "select-none",

        "disabled:pointer-events-none",
        "disabled:opacity-50",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-primary/30",
    ],
    {
        variants: {
            variant: {
                primary: [
                    "bg-primary",
                    "text-white",
                    "shadow-card",

                    "hover:bg-primary-hover",
                    "hover:shadow-card-hover",
                    "hover:-translate-y-0.5",
                ].join(" "),
                secondary: [
                    "bg-secondary",
                    "text-white",
                    "shadow-card",

                    "hover:bg-secondary-hover",
                    "hover:shadow-card-hover",
                    "hover:-translate-y-0.5",
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
                outline: [
                    "bg-surface",

                    "border",

                    "border-border",

                    "text-foreground",

                    "shadow-card",

                    "hover:border-primary",

                    "hover:text-primary",

                    "hover:shadow-card-hover",
                ].join(" "),
                ghost: [
                    "bg-transparent",

                    "text-primary",

                    "hover:bg-primary-soft",

                    "hover:-translate-y-0.5",
                ].join(" "),
                glass: [
                    "bg-white/50",

                    "backdrop-blur-xl",

                    "border",

                    "border-white/70",

                    "text-primary",

                    "shadow-card",

                    "hover:shadow-card-hover",
                ].join(" "),
                danger: [
                    "bg-error",
                    "text-white",
                    "shadow-card",
                ].join(" "),
                success: [
                    "bg-success",
                    "text-white",
                    "shadow-card",

                    "hover:-translate-y-0.5",
                ].join(" "),
                warning: [
                    "bg-warning",
                    "text-white",
                    "shadow-card",
                ].join(" "),
            },
            size: {
                xs: "h-9 px-4 text-xs",

                sm: "h-10 px-5 text-sm",

                md: "h-12 px-7 text-base",

                lg: "h-14 px-9 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);