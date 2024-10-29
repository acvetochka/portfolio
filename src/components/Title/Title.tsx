"use client";
import { TitleProps } from "./Title.props";
import { H1, H2, H3, Shadow, TitleContainer } from "./Title.styled";

export const Title = ({ tag, children }: TitleProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <TitleContainer>
          <H1 data-text={children}>{children}</H1>
          <Shadow size='54px'>{children}</Shadow>
        </TitleContainer>
      );
    case "h2":
      return <H2>{children}</H2>;
    case "h3":
      return <H3>{children}</H3>;
    default:
      return <></>;
  }
};
