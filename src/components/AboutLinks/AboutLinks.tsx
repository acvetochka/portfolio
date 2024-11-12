import { useState } from "react";

// import { Certificates, Edu } from "@/components";
import { Button, ButtonContainer, LinksContainer, Wrapper } from "./AboutLinks.styles";
import { Edu } from "../Edu/Edu";
import { Certificates } from "../Certificates/Certificates";

const aboutData = [
  { id: 0, name: "My CV", content: "My CV content" },
  { id: 1, name: "Education", content: <Edu/> },
  { id: 2, name: "Certificates", content: <Certificates/> },
];

export const AboutLinks = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <LinksContainer>
      <Wrapper>
        {aboutData.map(({ id, name }) => (
          <ButtonContainer
            key={id}
            onClick={() => handleClick(id)}
            className={activeIndex === id ? "active" : ""}
          >
            <Button>{name}</Button>
          </ButtonContainer>
        ))}
      </Wrapper>
      <div>{aboutData[activeIndex].content}</div>
    </LinksContainer>
  );
};
