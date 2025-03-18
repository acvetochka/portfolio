"use client";
import { TitleProps } from "@/types";
import { H1, H2, H3 } from "./Title.styles";

export const Title = ({ tag='h2' , id, children }: TitleProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <H1 data-text={children}>{children}</H1>;
    case "h2":
      return <H2 id={id}>{children}</H2>;
    case "h3":
      return <H3>{children}</H3>;
    default:
      return <></>;
  }
};
