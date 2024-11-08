"use client"

import { ButtonProps } from "./Button.props";
import { StyledButton, StyledButtonContainer, StyledlLink, StyledScrollLink } from "./Button.styles";

export const Button = ({
  children,
  tag = "button",
  link = "",
}: ButtonProps): JSX.Element => {
    return (
        <StyledButtonContainer>
          {tag === 'button' && (
            <StyledButton>{children}</StyledButton>
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
