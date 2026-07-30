"use client";

import { CustomLink } from "../ui/CustomLink/CustomLink";
import { CVItem, ListStyled } from "./CV.styles";
import { resumeData } from "@/data/resume";

export const CV = (): JSX.Element => {
  return (
    <ListStyled>
      {resumeData.map(({ title, src, action, icon }) => {
        const Icon = icon;
        return (
          <CVItem key={title}>
            <CustomLink href={src}>
              {action} <Icon />
            </CustomLink>
          </CVItem>
        );
      })}
    </ListStyled>
  );
};
