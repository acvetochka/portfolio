import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
  width: 100%;
  padding: 25px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  //  &:hover div{
  //  background: transparent;
  //  }
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
  // transition: background-color 1s ease-in-out;
`;
