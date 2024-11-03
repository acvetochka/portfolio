"use client";

import { Line } from "../Line/Line";
import { TextShadow } from "../TextShadow/TextShadow";
import { Title } from "../Title/Title";
import { SectionProps } from "./Section.props";
import { Container, SectionStyled } from "./Section.styled";

export const Section = ({
  id = "",
  title = "",
  children,
  className=""
}: SectionProps): JSX.Element => {
  return (
    <SectionStyled id={id} className={className}>
      <Container>
        <TextShadow size="35px" text={title}>
          <Title tag="h2">{title}</Title>
        </TextShadow>
        {id && <Line/>}
        {children}
      </Container>
    </SectionStyled>
  );
};
