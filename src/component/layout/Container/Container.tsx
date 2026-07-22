import { cn } from "@/lib/cn";
import { ContainerProps } from "./Container.types";

export function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div className={cn("container", className)}
            {...props}
        >
            {children}
        </div>
    );
}