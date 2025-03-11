import { Button, Text, Title, TextShadow, Quote } from "@/components";
import { ButtonWrapper, DescriptionWrapper } from "./HeroDescription.styles";

export const HeroDescription = (): JSX.Element => {
  return (
    <DescriptionWrapper>
      <TextShadow size="54px" text="Alona Kuznietsova" id="title">
        <Title tag="h1">Alona Kuznietsova</Title>
      </TextShadow>
      <Text size="extra-large">Frontend Developer</Text>
      <Quote />
      <ButtonWrapper>
        <Button tag="scrollLink" link="contacts">
          Contact me
        </Button>
        <Button tag="link" link="https://resume.kuznietsova.org">
          Resume
        </Button>
      </ButtonWrapper>
    </DescriptionWrapper>
  );
};
