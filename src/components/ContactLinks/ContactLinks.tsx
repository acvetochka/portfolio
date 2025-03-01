"use client";

import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { ItemStyled, ListStyled } from "./ContactLinks.styles";
import contactLinks from "@/data/contactLinks.json";


export const ContactLinks = ({className=""}): JSX.Element => {
  return (

            <ListStyled className={className}>
            {contactLinks.map(({link, name}, id)=> (
                <ItemStyled key={id}>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                {name === "github" ? <AiOutlineGithub width="25" height="25"/> : <FaLinkedin/>}</a>
                </ItemStyled>
            ))}
            </ListStyled>

  );
};
