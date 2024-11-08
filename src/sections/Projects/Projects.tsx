"use client"

import { Section } from "@/components";
import { Text } from "@/components";
import { Title } from "@/components";
import projects from "@/data/projects.json";

export const Projects = ():JSX.Element => {
    return (
        <Section id="projects" title="projects">
            <ul>
                {projects.map(({title, src, github, technologies, description, type, role}) => (
                    <li key={title}>
                        <Title tag="h3">{title}</Title>
                        {type.map((item, id )=> <Text key={id}>{item}</Text>)}
                        {role && <Text>Role: {role}</Text>}
                        <Text>{description}</Text>
                        {/* <Text>{type}</Text> */}
                        <Text>{technologies}</Text>
                        <a href={src}>Show</a>
                        <a href={github}>github</a>
                    </li>
                    ))}
                
            </ul>
        </Section>
    )
}