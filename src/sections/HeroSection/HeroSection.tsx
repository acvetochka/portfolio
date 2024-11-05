"use client";

import { Section } from "@/components/Section/Section";
import { Text } from "@/components/Text/Text";
import { TextShadow } from "@/components/TextShadow/TextShadow";
import { Title } from "@/components/Title/Title";
import { ImageComtainer, ImageStyled } from "./HeroSection.styles";
// import { CustomLink } from "@/components/CustomLink/CustomLink";

export const HeroSection = (): JSX.Element => {
  return (
    <Section id="" className="heroSection">
      <TextShadow size="54px" text="Alona Kuznietsova" id="title">
        <Title tag="h1">Alona Kuznietsova</Title>
      </TextShadow>
      <Text size="extra-large">Frontend Developer</Text>
      <ImageComtainer>
        <ImageStyled
          src="/programmer.png"
          alt="computer"
          width={350}
          height={300}
        />
      </ImageComtainer>
      {/* <CustomLink href="https://acvetochka.github.io/Resume/">CV</CustomLink> */}
    </Section>
  );
};
