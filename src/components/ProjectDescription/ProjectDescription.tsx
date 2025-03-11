import { Text, Tag } from "@/components";
import {
  DescriptionWrapper,
  TechnologiesList,
} from "./ProjectDescription.styles";
import { ProjectDescriptionProps } from "./ProjectDescription.props";

export const ProjectDescription = ({
  role,
  description,
  technologies,
}: ProjectDescriptionProps): JSX.Element => {
  return (
    <DescriptionWrapper className="desc">
      {role && <Text size="small">Role: {role}</Text>}
      {description.map((text, idx) => (
        <Text key={idx} size="small">
          {text}
        </Text>
      ))}
      <TechnologiesList>
        {technologies.map((technologie, id) => (
          <li key={id}>
            <Tag>{technologie}</Tag>
          </li>
        ))}
      </TechnologiesList>
    </DescriptionWrapper>
  );
};
