"use client";

import { ContactForm, ContactLinks, CustomLink, Section, Text } from "@/components";
import contacts from "@/data/contacts.json";
import { ContactWrapper, ItemStyled, ListStyled } from "./Contacts.styles";

export const Contacts = (): JSX.Element => {
  return (
    <Section id="contacts" title="Contact me">
      <ContactWrapper>
        <ListStyled>
          {contacts.map(({ name, type, link }, id) => (
            <ItemStyled key={id}>
              <Text>{type}:</Text>
              <CustomLink href={link}>{name}</CustomLink>
            </ItemStyled>
          ))}
          <ItemStyled>
            <Text>Location:</Text>
            <span>Germany, Bavaria</span>
          </ItemStyled>
          <ItemStyled>
            <Text>Links:</Text>
            <ContactLinks />
          </ItemStyled>
        </ListStyled>
        <ContactForm />
      </ContactWrapper>
    </Section>
  );
};
