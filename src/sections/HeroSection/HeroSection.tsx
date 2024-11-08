"use client";

import { HeroDescription, Section } from "@/components";
import { HeroImage } from "@/components";

export const HeroSection = (): JSX.Element => {
  return (
    <Section id="" className="heroSection">

      <HeroDescription/>
      <HeroImage/>
  
    </Section>
  );
};
