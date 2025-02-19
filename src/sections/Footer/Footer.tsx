"use client";

import { Border, BorderContainer } from "../Header/Header.styles";
import { Container } from "@/components/Section/Section.styled";
import Image from "next/image";
import Link from "next/link";
import { ContactLinks } from "@/components";

export const Footer = (): JSX.Element => {
  return (

      <Container>
        <BorderContainer>
          <Border>
            <Link href="/"><Image src="/logo.png" width={60} height={30} alt="logo"/></Link>
            <ContactLinks/>  
          </Border>
        </BorderContainer>
      </Container>

  );
};
