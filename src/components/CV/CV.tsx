"use client";

import { FaFilePdf } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import { CustomLink } from "../CustomLink/CustomLink";
import { CVItem, ListStyled } from "./CV.styles";

export const CV = (): JSX.Element => {
  return (
    <ListStyled>
      <CVItem>
        <CustomLink href="https://resume.kuznietsova.org">
          Show <TbWorldWww />
        </CustomLink>
      </CVItem>
      <CVItem>
        <CustomLink href="/files/Alona_Kuznietsova_Lebenslauf.pdf">
          Download (de) <FaFilePdf />
        </CustomLink>
      </CVItem>
      <CVItem>
        <CustomLink href="/files/Alona_Kuznietsova_CV.pdf">
          Download (en) <FaFilePdf />
        </CustomLink>
      </CVItem>    
    </ListStyled>
  );
};
