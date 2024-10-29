"use client"

import cn from "classnames";

import { TextProps } from "./Text.props";
import { StyledText } from "./Text.styled";

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
