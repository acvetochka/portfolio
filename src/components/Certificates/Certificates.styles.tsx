import { ItemStyled } from "@/sections/About/About.styles";
import styled from "styled-components";

export const Wrapper = styled.ul`
  list-style: none;
      display: flex;
    gap: 30px;
    flex-direction: column;

  & h3 {
    padding-left: 20px;
  }

  @media (min-width: 768px) {
    // display: flex;
    flex-direction: row;
    gap: 50px;
    margin: 0 auto;
  }

`;

// export const CertType = styled.li`

// `
export const CertList = styled.ul`
  list-style: none;
  margin-top: 20px;
`;
export const CertItem = styled(ItemStyled)`
  display: flex;
  gap: 5px;
  margin-bottom: 8px;
  font-size: 14px;
`;
