"use client";

import Image from "next/image";
import { SkillsProps } from "@/types/Skills.props";
import { IconContainer, SkillsListStyled } from "./Skills.styles";

export const Skills = ({ skills }: SkillsProps): JSX.Element => {
  return (
    <SkillsListStyled>
      {skills.map(({ id, name, icon }) => (
        <li key={id}>
          <IconContainer content={name}>
            <Image src={icon} width={40} height={40} alt={name} />
          </IconContainer>
        </li>
      ))}
    </SkillsListStyled>
  );
};
