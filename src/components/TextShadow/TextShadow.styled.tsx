import styled from "styled-components";
import { ShadowProps } from "../../types/TextShadow.props";

export const TextContainer = styled.div`
position: relative;

`

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
    // text-wrap: auto;
    // white-space: nowrap;
    letter-spacing: -3px;
    font-size: ${({ size }) => size || '54px'};
    text-transform: uppercase;
    text-wrap: wrap;

    @media (min-width: 1024px) {
    text-wrap: nowrap;
    } 
    `