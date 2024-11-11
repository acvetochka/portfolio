import { ItemStyled } from "@/sections/About/About.styles";
import styled from "styled-components";

export const Wrapper = styled.div`
list-style: none;

@media (min-width: 768px) {
    display: flex;
    gap: 50px;
    margin: 0 auto;
}
`
export const CertList = styled.ul`
list-style: none;
margin-top: 20px;
`
export const CertItem = styled(ItemStyled)`
display: flex;
gap: 5px;
margin-bottom: 8px;
font-size: 14px;

`