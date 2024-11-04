interface Skill {
    id: number;
    name: string;
    icon: string;
  }
  
export interface SkillsProps {
    skills: Skill[];
}