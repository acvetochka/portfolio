"use client";

import { Navigation } from "@/components";
import { Border, BorderContainer } from "./Header.styles";
import { Container } from "@/components/Section/Section.styled";
import Image from "next/image";

export const Header = (): JSX.Element => {
  return (
    <header>
      <Container>
        <BorderContainer>
          <Border>
            <Image src="/logo.png" width={60} height={30} alt="logo"/>
            {/* <Logo /> */}
            <Navigation />
          </Border>
        </BorderContainer>
      </Container>
    </header>
  );
};
