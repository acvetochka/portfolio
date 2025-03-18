"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Section/Section.styles";
import { Border, BorderContainer, Copyright, Links } from "./Footer.styles";

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
