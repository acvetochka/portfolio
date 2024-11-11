"use client";

import { HeroDescription } from "@/components";
import { HeroImage } from "@/components";
import { Container } from "@/components/Section/Section.styled";

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
