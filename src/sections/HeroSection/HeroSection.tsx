"use client";

import { HeroDescription, HeroImage } from "@/components";
import { Container } from "@/components/Section/Section.styles";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="heroSection">
      <Container className="container">

      <HeroDescription/>
      <HeroImage/>
      </Container>
    </section>
  );
};
