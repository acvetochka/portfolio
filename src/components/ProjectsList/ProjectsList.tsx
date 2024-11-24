import { Title, Text, CustomLink } from "@/components";
import projects from "@/data/projects.json";
import {
  DescriptionWrapper,
  ImageWrapper,
  ProjectComtainer,
  ProjectItem,
  ProjectsListStyled,
  TechnologiesList,
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
            <ProjectComtainer>
              <ImageWrapper className="image-wrapper">
              <Image src={img} width={300} height={169} alt={title}/>
              </ImageWrapper>
              <DescriptionWrapper className="desc">
              {role && <Text>Role: {role}</Text>}
              <Text>{description}</Text>
              <TechnologiesList>
                {technologies.map((technologie, id) => (
                  <li key={id}>
                    <Tag>{technologie}</Tag>
                  </li>
                ))}
              </TechnologiesList>
              </DescriptionWrapper>
              <Title tag="h3">{title}</Title>
              <TypeList>
                {type.map((item, id) => (
                  <Tag key={id}>{item}</Tag>
                  // <Text key={id}>{item}</Text>
                ))}
              </TypeList>
              <CustomLink href={src}>Show</CustomLink>
              <CustomLink href={github}>github</CustomLink>
            </ProjectComtainer>
          </ProjectItem>
        )
      )}
    </ProjectsListStyled>
  );
};
