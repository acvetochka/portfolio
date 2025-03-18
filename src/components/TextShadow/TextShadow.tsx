import { TextShadowProps } from "@/types";
import { Shadow, TextContainer } from "./TextShadow.styles";

export const TextShadow = ({
  size,
  children,
  text = "",
  id = "",
}: TextShadowProps): JSX.Element => {
  return (
    <TextContainer>
      {children}
      <Shadow size={size} id={id}>
        {text}
      </Shadow>
    </TextContainer>
  );
};
