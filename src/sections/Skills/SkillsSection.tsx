"use client"

import { Section, SkillsList } from "@/components"

export const SkillsSection = ():JSX.Element => {  
    return (
        <Section id="skills" title="Skills" className="skillsSection">
           <SkillsList/>
        </Section>
    )
}