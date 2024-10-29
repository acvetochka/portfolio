import { Title } from "../Title/Title"
import { SectionProps } from "./Section.props"

export const Section = ({id="", title, children}:SectionProps):JSX.Element => {
    return (
        <section id={id}>
            <Title tag="h2">{title}</Title>
            {children}
        </section>
    )
}