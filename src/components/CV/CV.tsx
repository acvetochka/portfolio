"use client";

import { FaFilePdf } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import { CustomLink } from "../ui/CustomLink/CustomLink";
import { CVItem, ListStyled } from "./CV.styles";

export const CV = (): JSX.Element => {
  return (
    <ListStyled>
      <CVItem>
        {/* <CustomLink href="https://resume.kuznietsova.org"> */}
        <CustomLink href="https://acvetochka.github.io/Resume/">
          Show <TbWorldWww />
        </CustomLink>
      </CVItem>
      <CVItem>
        <CustomLink href="/files/Lebenslauf_Frontend_Developer_Kuznietsova.pdf">
          Download (de) <FaFilePdf />
        </CustomLink>
      </CVItem>
      <CVItem>
        <CustomLink href="/files/CV_Frontend_Developer.pdf">
          Download (en) <FaFilePdf />
        </CustomLink>
      </CVItem>
    </ListStyled>
  );
};
