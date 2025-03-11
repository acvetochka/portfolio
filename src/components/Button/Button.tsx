"use client"

import { ButtonProps } from "../../types/Button.props";
import { StyledButton, StyledButtonContainer, StyledlLink, StyledScrollLink } from "./Button.styles";

export const Button = ({
  children,
  tag = "button",
  link = "", className, ...props
} : ButtonProps): JSX.Element => {
    return (
        <StyledButtonContainer className={className}>
          {tag === 'button' && (
            <StyledButton {...props}>{children}</StyledButton>
          )}
         {tag === 'scrollLink' && (
            <StyledScrollLink to={link} smooth={true}>{children}</StyledScrollLink>
          )}
          {tag === 'link' && (
            <StyledlLink href={link} target='_blank' rel='noopener noreferrer'>{children}</StyledlLink>
          )}
        </StyledButtonContainer>
      );
};
