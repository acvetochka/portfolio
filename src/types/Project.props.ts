export interface ProjectDescriptionProps {
  role?: string;
  description: string[];
  technologies: string[];
}

export interface ProjectLinksProps {
  src: string;
  github: string;
  name: string;
}

export type ProjectType =
  | "All"
  | "Landing"
  | "Team Project"
  | "App"
  | "Website";

export interface ProjectProps {
  title: string;
  src: string;
  github: string;
  technologies: string[];
  description: string[];
  img: string;
  type: ProjectType[];
  role?: string;
  isInConstruction?: boolean;
}
