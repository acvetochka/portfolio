import { Button, Text } from "@/components"
import { TextShadow } from "@/components"
import { Title } from "@/components"

export const HeroDescription = ():JSX.Element => {
    return (
        <div>
        <TextShadow size="54px" text="Alona Kuznietsova" id="title">
          <Title tag="h1">Alona Kuznietsova</Title>
        </TextShadow>
        <Text size="extra-large">Frontend Developer</Text>
        <div>
          <Button tag="scrollLink" link="skills">
            Skills
          </Button>
          <Button tag="link" link="https://acvetochka.github.io/Resume/">
            Resume
          </Button>
        </div>
      </div>
    )
}