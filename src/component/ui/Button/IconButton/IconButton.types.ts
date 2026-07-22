import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { IconButtonVariants } from "./IconButton.style";

export interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof IconButtonVariants> {
    asChild?: boolean
}