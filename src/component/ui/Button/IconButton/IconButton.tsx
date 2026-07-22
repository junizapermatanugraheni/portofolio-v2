import { forwardRef } from "react";
import { IconButtonProps } from "./IconButton.types";
import { cn } from "@/lib/cn";
import { IconButtonVariants } from "./IconButton.style";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className, variant, size, children, ...props }, ref) => {
        return (
            <button ref={ref} className={cn(IconButtonVariants({ variant, size }), className)} {...props}>
                {children}
            </button>
        )
    }
);

IconButton.displayName = "IconButton"