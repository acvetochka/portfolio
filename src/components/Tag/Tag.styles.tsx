import { gradientBorder } from "@/styles/variables";
import styled from "styled-components";

export const StyledTagContainer = styled.div`
  display: inline-flex;
  position: relative;
  border-radius: 10px;
  background: ${gradientBorder};
  padding: 2px;
  overflow: hidden;

`;

export const StylesTag = styled.p`
 background: #000;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`