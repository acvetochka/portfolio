import styled from "styled-components";

export const ListStyled = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemStyled = styled.li`
  position: relative;
  padding-left: 20px; 
  font-size: 16px; 


&::before {
  content: '➤'; /* символ стрілочки */
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px; 
  background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
`;
