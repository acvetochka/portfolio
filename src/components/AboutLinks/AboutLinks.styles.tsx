import styled from "styled-components";

export const LinksContainer = styled.div`
margin: 0 auto;

@media (min-width: 768px) {
    width: 70%;
}
`

export const Wrapper = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  max-width: 450px;
  margin-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
    height: 2px;
    transition: all 0.3s ease;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 150px;
  padding: 10px 20px;
  min-height: 40px;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  transition: border 0.3s ease;


 &.active {
      background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
      z-index: 2;

        & > button {
        background: #000000;

        }
    }
`;


export const Button = styled.button`
  display: inline-block;
  position: absolute;
  background: transparent;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 0;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  border: none;
`;
