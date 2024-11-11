import { ItemStyled } from "@/sections/About/About.styles";
import styled from "styled-components";

export const Wrapper = styled.div`
list-style: none;
display: flex;
gap: 50px;
`
export const CertList = styled.ul`
list-style: none;
margin-top: 10px;
`
export const CertItem = styled(ItemStyled)`
display: flex;
gap: 5px;
margin-bottom: 8px;
font-size: 14px;

`