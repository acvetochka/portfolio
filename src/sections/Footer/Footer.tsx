"use client";

// import { Navigation } from "@/components";
import { Border, BorderContainer } from "../Header/Header.styles";
import { Container } from "@/components/Section/Section.styled";
import Image from "next/image";
import Link from "next/link";

export const Footer = (): JSX.Element => {
  return (
    // <header>
      <Container>
        <BorderContainer>
          <Border>
            <Link href="/"><Image src="/logo.png" width={60} height={30} alt="logo"/></Link>
            {/* <Logo /> */}
            {/* <Navigation /> */}
          </Border>
        </BorderContainer>
      </Container>
    // </header>
  );
};
