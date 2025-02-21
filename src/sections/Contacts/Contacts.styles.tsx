import styled from "styled-components";

export const ContactWrapper = styled.div`
@media (min-width: 768px) {
align-items: center;
}
 @media (min-width: 1020px) {
 flex-direction: row;
 align-items: flex-start;
 }


display: flex;
justify-content: space-between;
flex-direction: column;
gap: 30px;

`

export const ListStyled = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  // align-items: center;
  width: 300px;
`;

export const ItemStyled = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;

  & p{
text-transform: capitalize;
width: 70px;
  }
`