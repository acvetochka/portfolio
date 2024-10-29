"use client"

import { Title } from "../Title/Title"
import { SectionProps } from "./Section.props"
import { Container } from "./Section.styled"

export const Section = ({id="", title, children}:SectionProps):JSX.Element => {
    return (
        <section id={id}>
            <Container>

            <Title tag="h2">{title}</Title>
            {children}
            </Container>
        </section>
    )
}