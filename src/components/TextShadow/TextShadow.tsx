import { TextShadowProps } from "./TextShadow.props"
import { Shadow, TextContainer } from "./TextShadow.styled"

export const TextShadow = ({size, children, text="", id=""}:TextShadowProps):JSX.Element => {
    return (
        <TextContainer>
            {children}
            <Shadow size={size} id={id}>{text}</Shadow>
        </TextContainer>
    )
}