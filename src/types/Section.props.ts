import { ReactNode } from "react";

export interface SectionProps {
  id: string;
  children: ReactNode;
  title?: string;
  className?: string;

}
