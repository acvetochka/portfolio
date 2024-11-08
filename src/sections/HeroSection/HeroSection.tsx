"use client";

import { Section } from "@/components";
import { Text } from "@/components";
import { TextShadow } from "@/components";
import { Title } from "@/components";
import { Button } from "@/components";
import { HeroImage } from "@/components";
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
