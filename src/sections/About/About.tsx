"use client"

import { AboutLinks, Section } from "@/components";
import { ItemStyled, ListStyled } from "./About.styles";
import about from "@/data/about.json";

export const About = (): JSX.Element => {
  return (
    <Section id="about" title="About me">
      <ListStyled>
        {about.map((item, id) => (
          <ItemStyled key={id}>{item}</ItemStyled>
        ))}
      </ListStyled>
      <AboutLinks/>
    </Section>
  );
};
