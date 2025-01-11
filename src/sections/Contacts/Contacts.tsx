"use client"

import {CustomLink, Section } from "@/components";
import contacts from "@/data/contacts.json"
import { ListStyled } from "./Contacts.styles";

export const Contacts = (): JSX.Element => {
  return (
    <Section id="contacts" title="Contacts">
        <ListStyled>
            {contacts.map(({name,link}, id)=> (
                <li key={id}>
                    <CustomLink href={link}>{name}</CustomLink>
                </li>
            ))}
            
        </ListStyled> 
    </Section>
  );
};