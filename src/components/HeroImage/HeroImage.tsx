import { ImageContainer, ImageStyled } from "./HeroImage.styles"

export const HeroImage = ():JSX.Element => {
    return (
        <ImageContainer>
        <ImageStyled
          src="/programmer.png"
          alt="Women with computer"
          width={350}
          height={300}
          priority
        />
      </ImageContainer>
    )
}