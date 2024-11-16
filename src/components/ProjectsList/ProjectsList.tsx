import { Title, Text, CustomLink } from "@/components";
import projects from "@/data/projects.json";
import {
  ProjectComtainer,
  ProjectItem,
  ProjectsListStyled,
  TechnologiesList,
  TypeList,
} from "./ProjectsList.styles";
import { Tag } from "../Tag/Tag";

export const ProjectsList = (): JSX.Element => {
  return (
    <ProjectsListStyled>
      {projects.map(
        ({ title, src, github, technologies, description, type, role }) => (
          <ProjectItem key={title}>
            <ProjectComtainer>
              <Title tag="h3">{title}</Title>
              <TypeList>
                {type.map((item, id) => (
                  <Tag key={id}>{item}</Tag>
                  // <Text key={id}>{item}</Text>
                ))}
              </TypeList>
              {role && <Text>Role: {role}</Text>}
              <Text>{description}</Text>
              <TechnologiesList>
                {technologies.map((technologie, id) => (
                  <li key={id}>
                    <Tag>{technologie}</Tag>
                  </li>
                ))}
              </TechnologiesList>
              <CustomLink href={src}>Show</CustomLink>
              <CustomLink href={github}>github</CustomLink>
            </ProjectComtainer>
          </ProjectItem>
        )
      )}
    </ProjectsListStyled>
  );
};
