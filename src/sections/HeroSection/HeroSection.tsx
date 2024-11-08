"use client";

import { Section } from "@/components/Section/Section";
import { Text } from "@/components/Text/Text";
import { TextShadow } from "@/components/TextShadow/TextShadow";
import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";
import { HeroImage } from "@/components/HeroImage/HeroImage";
// import { CustomLink } from "@/components/CustomLink/CustomLink";

export const HeroSection = (): JSX.Element => {
  return (
    <Section id="" className="heroSection">
      <div>
        <TextShadow size="54px" text="Alona Kuznietsova" id="title">
          <Title tag="h1">Alona Kuznietsova</Title>
        </TextShadow>
        <Text size="extra-large">Frontend Developer</Text>
        <div>
          <Button tag="scrollLink" link="skills">
            Skills
          </Button>
          <Button tag="link" link="https://acvetochka.github.io/Resume/">
            Resume
          </Button>
        </div>
      </div>

      <HeroImage/>

      {/* <CustomLink href="https://acvetochka.github.io/Resume/">CV</CustomLink> */}
    </Section>
  );
};
