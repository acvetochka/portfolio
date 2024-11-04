import { Section } from "@/components/Section/Section"
import { Title } from "@/components/Title/Title";
import { Skills } from "@/components/Skills/Skills";
import skillsData from "@/data/skills.json";

export const SkillsSection = ():JSX.Element => {  
    return (
        <Section id="skills" title="Skills" className="skillsSection">
            { skillsData.map(({id, type, skills})=> 
            <div key={id}>
                <Title tag="h3">{type}</Title>
               <Skills skills={skills}/>
               


            </div>)
            }
        </Section>
    )
}