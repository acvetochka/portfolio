"use client"

import { Section } from "@/components/Section/Section";
// import { Text } from "@/components/Text/Text";
import about from "@/data/about.json";
import { ItemStyled, ListStyled } from "./About.styles";

export const About = (): JSX.Element => {
  return (
    <Section id="about" title="About me">
      <ListStyled>
        {about.map((item, id) => (
          <ItemStyled key={id}>{item}</ItemStyled>
        ))}
      </ListStyled>
    </Section>
  );
};
