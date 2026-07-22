import { cva } from "class-variance-authority";

export const textVariants = cva(
    "font-body leading-relaxed",
    {
        variants: {
            variant: {
                xs: "text-[length:var(--text-xs)]",
                sm: "text-[length:var(--text-sm)]",
                md: "text-[length:var(--text-md)]",
                lg: "text-[length:var(--text-lg)]",
                xl: "text-[length:var(--text-xl)]",
            },
            tone: {
                default: "",
                primary: "text-[var(--primary)]",
                foreground: "text-[var(--foreground)]",
                secondary: "text-[var(--foreground-secondary)]",
                accent: "text-[var(--accent)]",
                error: "text-[var(--error)]",
                success: "text-[var(--success)]",
                warning: "text-[var(--warning)]",
            },
            weight: {
                normal: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold",
                extrabold: "font-extrabold",
                black: "font-black",
            },
        },
        defaultVariants: {
            variant: "md",
            tone: "default",
            weight: "normal"
        }
    }
)