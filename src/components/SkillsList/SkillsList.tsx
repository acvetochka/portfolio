"use client";

import { Skills } from "../Skills/Skills";
import { Title } from "../ui/Title/Title";
import skillsData from "@/data/skills.json";
import { List, SkillsType } from "./SkillsList.styles";

export const SkillsList = (): JSX.Element => {
  return (
    <List>
      {skillsData.map(({ id, type, skills }) => (
        <SkillsType key={id}>
          <Title tag="h3">{type}</Title>
          <Skills skills={skills} />
        </SkillsType>
      ))}
    </List>
  );
};
