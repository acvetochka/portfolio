import styled from "styled-components";
import Image from "next/image";

export const ImageComtainer = styled.div`
  position: relative;
  display: inline-block;
  width: 350px;
  hight: 300px;
  align-self: flex-end;

  & div {
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    //   width: 100%;

    background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
    z-index: 0;
    mask-image: url("/programmer.png");
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: center;
    filter: blur(20px);
  }
`;

export const ImageStyled = styled(Image)`
  // filter: drop-shadow(5px 0 10px #a313e0) drop-shadow(0 5px 10px #4f0ac9);
  filter: drop-shadow(5px 0 5px #a313e0) drop-shadow(0 5px 5px #0000ff);
  position: relative;
  z-index: 1;

`;
