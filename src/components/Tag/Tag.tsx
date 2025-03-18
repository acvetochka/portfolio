"use client";

import { TagProps } from "@/types";
import { StyledTagContainer, StylesTag } from "./Tag.styles";

export const Tag = ({ children }: TagProps): JSX.Element => {
  return (
    <StyledTagContainer>
      <StylesTag>{children}</StylesTag>
    </StyledTagContainer>
  );
};
