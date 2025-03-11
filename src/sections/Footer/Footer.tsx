"use client";

// import { Border, BorderContainer } from "../Header/Header.styles";
import { Container } from "@/components/Section/Section.styled";
import Image from "next/image";
import Link from "next/link";
// import { ContactLinks } from "@/components";
import { Border, BorderContainer, Copyright, Links } from "./Footer.styled";

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Container>
        <BorderContainer>
          <Border>
            <Link href="/">
              <Image src="/logo.png" width={60} height={30} alt="logo" />
            </Link>
            <Copyright>
              © Alona Kuznietsova, 2025. All rights reserved
            </Copyright>
            <Links />
          </Border>
        </BorderContainer>
      </Container>
    </footer>
  );
};
