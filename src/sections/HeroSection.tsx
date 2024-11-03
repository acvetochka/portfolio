"use client"

import { Section } from "@/components/Section/Section";
import { Text } from "@/components/Text/Text";
import { TextShadow } from "@/components/TextShadow/TextShadow";
import { Title } from "@/components/Title/Title";

export const HeroSection = ():JSX.Element => {
  return (
    <Section  id="" className="heroSection">
      <TextShadow size="54px" text="Alona Kuznietsova" id="title">
      <Title tag="h1">Alona Kuznietsova</Title>
      </TextShadow>
      <Text size="extra-large">Frontend Developer</Text>

      {/* <button className="button">Download</button> */}
    </Section>
  );
};
