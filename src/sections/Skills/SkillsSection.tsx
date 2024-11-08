import { Section } from "@/components/Section/Section"
import { SkillsList } from "@/components/SkillsList/SkillsList";

export const SkillsSection = ():JSX.Element => {  
    return (
        <Section id="skills" title="Skills" className="skillsSection">
           <SkillsList/>
        </Section>
    )
}