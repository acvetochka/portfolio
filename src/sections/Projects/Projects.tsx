"use client";

import { Filter, ProjectsList, Section } from "@/components";
import rawProjects from "@/data/projects.json";
import { ProjectProps } from "@/types";
import { useState } from "react";

export const Projects = (): JSX.Element => {
  const projects: ProjectProps[] = rawProjects as ProjectProps[];
  const [filteredProjects, setFilterProjects] = useState(projects);

  return (
    <Section id="projects" title="projects">
      <Filter projects={projects} setFilterProjects={setFilterProjects} />
      <ProjectsList projects={filteredProjects} />
    </Section>
  );
};
