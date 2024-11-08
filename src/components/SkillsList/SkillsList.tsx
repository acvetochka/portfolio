"use client"

import { Skills } from "../Skills/Skills"
import { Title } from "../Title/Title"
import { List, SkillsType } from "./SkillsList.styles"
import skillsData from "@/data/skills.json"

export const SkillsList = ():JSX.Element => {
    return (
        <List>
            { skillsData.map(({id, type, skills})=> 
            <SkillsType key={id}>
                <Title tag="h3">{type}</Title>
               <Skills skills={skills}/>
            </SkillsType>)
            }
        </List>
    )
}