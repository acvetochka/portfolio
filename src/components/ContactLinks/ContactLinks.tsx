"use client";

import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import contactLinks from "@/data/contactLinks.json";
import { ItemStyled, ListStyled } from "./ContactLinks.styles";

export const ContactLinks = ({ className = "" }): JSX.Element => {
  return (
    <ListStyled className={className}>
      {contactLinks.map(({ link, name }, id) => (
        <ItemStyled key={id}>
          <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${name}-link`}>
            {name === "github" ? (
              <AiOutlineGithub width="25" height="25" />
            ) : (
              <FaLinkedin />
            )}
          </a>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};
