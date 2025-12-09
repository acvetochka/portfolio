import { ProjectProps, ProjectType } from "@/types";
import { FilterList, StyledButton } from "./Filter.styles";
import { useState } from "react";
import { StyledButtonContainer } from "../ui/Button/Button.styles";

type FilterProps = {
  projects: ProjectProps[];
  setFilterProjects: (arg0: ProjectProps[]) => void;
};
export const Filter = ({
  projects,
  setFilterProjects,
}: FilterProps): JSX.Element => {
  const projectTypes = ["All", "Team Project", "Website", "App", "Landing"];
  const [activeType, setActiveType] = useState("All");

  const filterProjects = (type: ProjectType): void => {
    if (type === "All") {
      setFilterProjects(projects);
      setActiveType("All");
      return;
    }
    const filteredProjects = projects.filter((project: ProjectProps) =>
      project.type.includes(type)
    );
    setFilterProjects(filteredProjects);
    setActiveType(type);
  };

  return (
    <FilterList>
      {projectTypes.map((type) => (
        <li key={type}>
          <StyledButtonContainer>
            <StyledButton
              onClick={() => filterProjects(type as ProjectType)}
              $isActive={type === activeType}
            >
              {type}
            </StyledButton>
          </StyledButtonContainer>
        </li>
      ))}
    </FilterList>
  );
};
