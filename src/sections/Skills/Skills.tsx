import { Section } from "@/components/Section/Section"
import { Title } from "@/components/Title/Title";
import skills from "@/data/skills.json";

export const Skills = ():JSX.Element => {  
    return (
        <Section id="skills" title="Skills">
            { skills.map(({id, type, skills})=> 
            <div key={id}>
                <Title tag="h3">{type}</Title>
                <ul>
                    {skills.map(({id, name})=> (
                       <li key={id}>
                            {name}
                        </li>
                    ))}
                </ul>

            </div>)
            }
        </Section>
    )
}