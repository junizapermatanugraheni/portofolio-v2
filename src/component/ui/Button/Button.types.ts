import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { buttonVariants } from "./Button.styles";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    loading?: boolean;
    loadingText?: string;
    asChild?: boolean;
}