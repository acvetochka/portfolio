import { AiOutlineGlobal, AiOutlineGithub } from "react-icons/ai";
import { ProjectLinksProps } from "@/types";
import { LinksWrapper } from "./ProjectLinks.styles";

export const ProjectLinks = ({
  src,
  github,
  name
}: ProjectLinksProps): JSX.Element => {

  const globalLink:string = `global-link-${name}`;
  const githubLink:string = `github-link-${name}`;

  return (
    <LinksWrapper>
      <li>
        <a href={src} target="_blank" rel="noopener noreferrer" aria-label={globalLink}>
          <AiOutlineGlobal />
        </a>
      </li>
      <li>
        <a href={github} target="_blank" rel="noopener noreferrer" aria-label={githubLink}>
          <AiOutlineGithub />
        </a>
      </li>
    </LinksWrapper>
  );
};
