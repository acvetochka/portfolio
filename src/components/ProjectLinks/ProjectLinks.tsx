import { ProjectLinksProps } from "@/types/ProjectLinks.props";
import { LinksWrapper } from "./ProjectLinks.styles";
import { AiOutlineGlobal, AiOutlineGithub } from "react-icons/ai";

export const ProjectLinks = ({
  src,
  github,
}: ProjectLinksProps): JSX.Element => {
  return (
    <LinksWrapper>
      <li>
        <a href={src} target="_blank" rel="noopener noreferrer">
          <AiOutlineGlobal />
        </a>
      </li>
      <li>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub />
        </a>
      </li>
    </LinksWrapper>
  );
};
