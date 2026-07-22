import { cva } from "class-variance-authority";

export const IconButtonVariants = cva(
    [
        'rounded-xl',
        'border',
        'bg-surface',
        'hover:bg-primary',
        'hover:text-white',
        'transition-all',
        'duration-300',
        'inline-flex',
        'items-center',
        'justify-center',
        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-offset-2',
    ],
    {
        variants: {
            variant: {
                solid:
                    "bg-primary text-white hover:bg-primary-hover border border-primary",

                outline:
                    "bg-transparent text-foreground border border-border hover:border-primary hover:bg-primary hover:text-white",

                ghost:
                    "bg-transparent text-foreground hover:bg-primary/10 hover:text-primary",

                soft:
                    "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary",
            },
            size: {
                xs: "w-8 h-8 text-sm",
                sm: "w-10 h-10 text-md",
                md: "w-12 h-12 text-lg",
                lg: "w-14 h-14 text-xl",
                xl: "w-16 h-16 text-2xl",
            }
        },
        defaultVariants: {
            variant: "outline",
            size: "md",
        },
    }
);