"use client"

import { Section } from "@/components";
import { ProjectsList } from "@/components";

export const Projects = ():JSX.Element => {
    return (
        <Section id="projects" title="projects">
            <ProjectsList/>
        </Section>
    )
}