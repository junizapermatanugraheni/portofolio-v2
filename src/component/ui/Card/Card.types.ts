import { VariantProps } from "class-variance-authority";
import React from "react";
import { cardVariants } from "./Card.styles";

export interface CardProps
    extends VariantProps<typeof cardVariants> {
    children: React.ReactNode;
    className?: string;
}
