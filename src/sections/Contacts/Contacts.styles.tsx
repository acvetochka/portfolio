import styled from "styled-components";

export const ListStyled = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // align-items: center;
`;

export const ItemStyled = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;

  & p{
text-transform: capitalize;
  }
`