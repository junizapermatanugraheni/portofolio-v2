import { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import { cn } from "@/lib/cn";
import { buttonVariants } from "./Button.styles";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ loading = false, loadingText, className, variant, size, children, disabled, ...props }, ref) => {
        return (
            <button ref={ref}
                className={cn(buttonVariants({ variant, size }), className)} disabled={loading || disabled}
                {...props} >
                {loading ? (loadingText) : (<span className="inline-flex items-center gap-2">{children}</span>)}
            </button>
        )
    }
);

Button.displayName = "Button";