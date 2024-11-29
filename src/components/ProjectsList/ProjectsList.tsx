import {
  Title,
  Construction,
  ProjectDescription,
  ProjectLinks,
} from "@/components";
import projects from "@/data/projects.json";
import {
  ImageWrapper,
  ProjectContainer,
  ProjectItem,
  ProjectsListStyled,
  Type,
  TypeList,
} from "./ProjectsList.styles";
import Image from "next/image";

export const ProjectsList = (): JSX.Element => {
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
              <ProjectLinks src={src} github={github} />
            </ProjectContainer>
          </ProjectItem>
        )
      )}
    </ProjectsListStyled>
  );
};
