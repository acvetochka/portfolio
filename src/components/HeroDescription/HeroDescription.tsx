import { Button, Text, Title, TextShadow } from "@/components"
import { ButtonWrapper, DescriptionWrapper } from "./HeroDescription.styles"

export const HeroDescription = ():JSX.Element => {
    return (
        <DescriptionWrapper>
        <TextShadow size="54px" text="Alona Kuznietsova" id="title">
          <Title tag="h1">Alona Kuznietsova</Title>
        </TextShadow>
        <Text size="extra-large">Frontend Developer</Text>
        <ButtonWrapper>
          <Button tag="scrollLink" link="skills">
            Skills
          </Button>
          <Button tag="link" link="https://acvetochka.github.io/Resume/">
            Resume
          </Button>
        </ButtonWrapper>
      </DescriptionWrapper>
    )
}