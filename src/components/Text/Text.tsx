"use client";

import cn from "classnames";

import { TextProps } from "@/types";
import { StyledText } from "./Text.styles";

export const Text = ({
  size = "normal",
  children,
  className,
  ...props
}: TextProps): JSX.Element => {
  return (
    <StyledText size={size} className={cn(className)} {...props}>
      {children}
    </StyledText>
  );
};
