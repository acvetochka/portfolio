"use client"

import {CustomLink, Section, Text } from "@/components";
import contacts from "@/data/contacts.json"
import { ItemStyled, ListStyled } from "./Contacts.styles";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

export const Contacts = (): JSX.Element => {
  return (
    <Section id="contacts" title="Contacts">
        <ListStyled>
            {contacts.map(({name,type,link}, id)=> (
                <ItemStyled key={id}>
                  {type !== "link" ? <Text>{type}:</Text> : 
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    {name== "github" ? <AiOutlineGithub/> : <FaLinkedin/>}</a>}
                    <CustomLink href={link}>{name}</CustomLink>
                  </ItemStyled>
            ))}
            
        </ListStyled> 
    </Section>
  );
};