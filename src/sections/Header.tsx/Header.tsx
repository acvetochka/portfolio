"use client"

import { Logo } from "@/components/Logo/Logo";
import { Navigation } from "@/components/Navigation/Navigation";
import { Border, Container } from "./Header.styles";

export const Header = (): JSX.Element => {
  return (
    <header>
      <Container>
      <Border>
        <Logo />
        <Navigation />
        </Border>
      </Container>
    </header>
  );
};
