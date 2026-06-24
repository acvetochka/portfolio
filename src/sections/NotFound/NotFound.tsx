"use client";

import { Section } from "@/components";
import { WrapperStyled } from "./NotFound.styles";

export const NotFoundSection = () => {
  return (
    <Section>
      <WrapperStyled>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </WrapperStyled>
    </Section>
  );
};
