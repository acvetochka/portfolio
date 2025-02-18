"use client";

// import { Navigation } from "@/components";
import { Border, BorderContainer } from "../Header/Header.styles";
import { Container } from "@/components/Section/Section.styled";
import Image from "next/image";
import Link from "next/link";
import contacts from "@/data/contacts.json";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { ListStyled } from "./Footer.styles";

export const Footer = (): JSX.Element => {
  return (
    // <header>
      <Container>
        <BorderContainer>
          <Border>
            <Link href="/"><Image src="/logo.png" width={60} height={30} alt="logo"/></Link>
            {/* <Logo /> */}
            {/* <Navigation /> */}
            <ListStyled>
            {contacts.map(({link, name, type}, id)=> (
                <li key={id}>
                {type == "link" && (<><a href={link} target='_blank' rel='noopener noreferrer'>
                {name === "github" ? <AiOutlineGithub width="25" height="25"/> : <FaLinkedin/>}</a></>)}
                </li>
            ))}
            </ListStyled>
            
             
          </Border>
        </BorderContainer>
      </Container>
    // </header>
  );
};
