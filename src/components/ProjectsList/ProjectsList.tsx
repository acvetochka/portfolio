import { Title, Text, CustomLink } from "@/components";
import projects from "@/data/projects.json";
import { ProjectComtainer, ProjectItem, ProjectsListStyled } from "./ProjectsList.styles";

export const ProjectsList = (): JSX.Element => {
  return (
    <ProjectsListStyled>
      {projects.map(
        ({ title, src, github, technologies, description, type, role }) => (
          <ProjectItem key={title}>
            <ProjectComtainer>
              <Title tag="h3">{title}</Title>
              {type.map((item, id) => (
                <Text key={id}>{item}</Text>
              ))}
              {role && <Text>Role: {role}</Text>}
              <Text>{description}</Text>
              {/* <Text>{type}</Text> */}
              <Text>{technologies}</Text>
              <CustomLink href={src} >Show</CustomLink>
              <CustomLink href={github} >github</CustomLink>
            </ProjectComtainer>
          </ProjectItem>
        )
      )}
    </ProjectsListStyled>
  );
};
