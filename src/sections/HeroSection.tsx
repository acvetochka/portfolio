"use client"

import { Section } from "@/components/Section/Section";
import { Text } from "@/components/Text/Text";
import { Title } from "@/components/Title/Title";

export const HeroSection = ():JSX.Element => {
  return (
    <Section title="HeroSection" id="contacts">
      <Title tag="h1">Alona Kuznietsova</Title>
      <Text size="extra-large">Frontend Developer</Text>

      {/* <button className="button">Download</button> */}
    </Section>
  );
};
