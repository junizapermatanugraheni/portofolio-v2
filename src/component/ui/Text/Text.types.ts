import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { TextVariants } from "./Text.styles";

export interface TextProps
    extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof TextVariants> { }
