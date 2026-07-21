import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    [
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded-[10px]',
        'font-semibold',
        'transition-all',
        'duration-200',
        'cursor-pointer',
        'disabled:pointer-events-none',
        'disabled:opacity-50',
        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-offset-2',
        'fullWidth?: boolean',
    ],
    {
        variants: {
            variant: {
                primary: "bg-accent text-white hover:bg-accent-hover",
                secondary: "bg-primary text-foreground hover:bg-primary-hover",
                outline: "border border-border bg-transparent hover:bg-primary/10",
                ghost: "hover:bg-primary/10",
                danger: "bg-error text-white",
                success: "bg-success text-white",
                warning: "bg-warning text-white",
            },
            size: {
                sm: "h-10 px-4 text-sm",
                md: "h-12 px-6 text-base",
                lg: "h-14 px-8 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);