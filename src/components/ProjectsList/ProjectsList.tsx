import { Title, Text, CustomLink } from "@/components";
import projects from "@/data/projects.json";
import {
  DescriptionWrapper,
  ImageWrapper,
  ProjectContainer,
  ProjectItem,
  ProjectsListStyled,
  TechnologiesList,
  Type,
  TypeList,
} from "./ProjectsList.styles";
import { Tag } from "../Tag/Tag";
import Image from "next/image";

export const ProjectsList = (): JSX.Element => {
  return (
    <ProjectsListStyled>
      {projects.map(
        ({ title, src, github, img, technologies, description, type, role }) => (
          <ProjectItem key={title}>
            <ProjectContainer>
              <ImageWrapper className="image-wrapper">
              <Image src={img} width={300} height={169} alt={title}/>
              </ImageWrapper>
              <Title tag="h3">{title}</Title>
              <TypeList>
                {type.map((item, id) => (
                  <Type key={id}>{item}</Type>

                  // <Text key={id}>{item}</Text>
                ))}
              </TypeList>
              <DescriptionWrapper className="desc">
              {role && <Text size="small">Role: {role}</Text>}
              <Text size="small">{description}</Text>
              <TechnologiesList>
                {technologies.map((technologie, id) => (
                  <li key={id}>
                    <Tag>{technologie}</Tag>
                  </li>
                ))}
              </TechnologiesList>
              </DescriptionWrapper>
              <CustomLink href={src}>Show</CustomLink>
              <CustomLink href={github}>github</CustomLink>
            </ProjectContainer>
          </ProjectItem>
        )
      )}
    </ProjectsListStyled>
  );
};
