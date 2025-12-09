import Image from "next/image";
import {
  Title,
  Construction,
  ProjectDescription,
  ProjectLinks,
} from "@/components";
// import projects from "@/data/projects.json";
import {
  ImageWrapper,
  ProjectContainer,
  ProjectItem,
  ProjectsListStyled,
  Type,
  TypeList,
} from "./ProjectsList.styles";
import { ProjectProps } from "@/types";
// import { useState } from "react";

export const ProjectsList = ({
  projects,
}: {
  projects: ProjectProps[];
}): JSX.Element => {
  // const [projectList, setProjectList] = useState(projects);

  return (
    <ProjectsListStyled>
      {projects.map(
        ({
          title,
          src,
          github,
          img,
          technologies,
          description,
          type,
          role,
          isInConstruction,
        }) => (
          <ProjectItem key={title}>
            <ProjectContainer>
              {isInConstruction && <Construction />}
              <ImageWrapper className="image-wrapper">
                <Image src={img} width={300} height={169} alt={title} />
              </ImageWrapper>
              <Title tag="h3">{title}</Title>
              <TypeList>
                {type.map((item, id) => (
                  <Type key={id}>{item}</Type>
                ))}
              </TypeList>
              <ProjectDescription
                role={role}
                description={description}
                technologies={technologies}
              />
              <ProjectLinks src={src} github={github} name={title} />
            </ProjectContainer>
          </ProjectItem>
        )
      )}
    </ProjectsListStyled>
  );
};
