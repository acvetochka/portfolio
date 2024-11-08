import styled from "styled-components";
import Image from "next/image";

export const ImageContainer = styled.div`
  position: relative;
  display: none;
  width: 350px;
  height: 300px;
  align-self: flex-end;

  & div {
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
  }

  @media (min-width: 768px){
  display: inline-block;
  }
`;

export const ImageStyled = styled(Image)`
  filter: drop-shadow(5px 0 5px #a313e0) drop-shadow(0 5px 5px #0000ff);
  position: relative;
  z-index: 1;

`;