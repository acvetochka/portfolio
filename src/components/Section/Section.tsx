"use client";

import { Line, TextShadow, Title } from "@/components";
import { SectionProps } from "@/types";
import { Container, SectionStyled } from "./Section.styles";

export const Section = ({
  id = "",
  title = "",
  children,
  className = "",
}: SectionProps): JSX.Element => {
  return (
    <SectionStyled id={id} className={className}>
      <Container className="container">
        {id && (
          <>
            <TextShadow size="35px" text={title}>
              <Title tag="h2" id={id}>
                {title}
              </Title>
            </TextShadow>
            <Line />
          </>
        )}
        {children}
      </Container>
    </SectionStyled>
  );
};
