"use client";

import { Navigation, Logo } from "@/components";
import { Border, BorderContainer } from "./Header.styles";
import { Container } from "@/components/Section/Section.styled";

export const Header = (): JSX.Element => {
  return (
    <header>
      <Container>
        <BorderContainer>
          <Border>
            <Logo />
            <Navigation />
          </Border>
        </BorderContainer>
      </Container>
    </header>
  );
};