"use client"

import {CustomLink, Section, Text } from "@/components";
import contacts from "@/data/contacts.json"
import { ItemStyled, ListStyled } from "./Contacts.styles";

export const Contacts = (): JSX.Element => {
  return (
    <Section id="contacts" title="Contacts">
        <ListStyled>
            {contacts.map(({name,type,link}, id)=> (
                <ItemStyled key={id}>
                  {type !== "link" && <Text>{type}:</Text>}
                    <CustomLink href={link}>{name}</CustomLink>
                </ItemStyled>
            ))}
            
        </ListStyled> 
    </Section>
  );
};