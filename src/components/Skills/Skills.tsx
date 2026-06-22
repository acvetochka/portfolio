"use client";

import Image from "next/image";
import { SkillsProps } from "@/types";
import { IconContainer, SkillsListStyled } from "./Skills.styles";

export const Skills = ({ skills }: SkillsProps): JSX.Element => {
  return (
    <SkillsListStyled>
      {skills.map(({ name, icon }) => (
        <li key={name}>
          <IconContainer content={name}>
            <Image src={icon} width={40} height={40} alt={name} />
          </IconContainer>
        </li>
      ))}
    </SkillsListStyled>
  );
};
