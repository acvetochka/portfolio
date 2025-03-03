import { ItemStyled } from "@/sections/About/About.styles";
import styled from "styled-components";

export const ListStyled = styled.ul`
list-style: none;
    transform: translateX(-60px);

    @media (min-width: 768px) {
    transform: translateX(-130px);
    }
`


export const CVItem = styled(ItemStyled)`
margin-bottom: 8px;

& a{
display: flex;
align-items: center;
gap: 10px;
}
`