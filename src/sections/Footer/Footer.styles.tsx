import styled from "styled-components";
import { ContactLinks } from "@/components";

export const BorderContainer = styled.div`
  background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
  width: 100%;
  padding: 25px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 100px;
  margin-bottom: 10px;

  @media (min-width: 768px){
  height: 50px;
  }

`;

export const Border = styled.div`
  position: absolute;
  background: #000000;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  border-radius: 10px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  flex-wrap: wrap;


`;


export const Links = styled(ContactLinks)`
order: 2;

@media (min-width:480px) {
    width: 70%;
    justify-content: end;
}

@media (min-width: 768px){
order: 3;
width: auto;
}


`

export const Copyright = styled.p`
order: 3;

@media (min-width: 768px){
order: 2;
}
`