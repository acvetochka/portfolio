// Title.styles.ts

import styled from "styled-components";
import { ShadowProps } from "./Title.props";

export const TitleContainer = styled.div`
position:relative;
`

export const H1 = styled.h1`
    color: #FFFFFF;
    font-size: 48px;
    font-weight: 700;
    filter: drop-shadow(2px 2px 1px black);

`;

export const Shadow = styled.div<ShadowProps>`
    position: absolute;
    top: -4px;
    left: -4px;
    background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
    filter: blur(4px);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // font-size: 54px;
    font-weight: 700;
    filter: drop-shadow(2px 2px 1px black);
    filter: blur(6px);
    z-index: -1;
    text-wrap: auto;
    white-space: nowrap;
    letter-spacing: -3px;
    font-size: ${({ size }) => size || '54px'};
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: #444;
`;

export const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  color: #555;
  z-index: 0;
`;

