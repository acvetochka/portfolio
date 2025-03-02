import styled from "styled-components";

export const BorderContainer = styled.div`
  background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
  width: 100%;
  padding: 25px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  z-index: 1;
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
`;


export const MenuButton = styled.button`
display: block;
text-transform: uppercase;
transition: letter-spacing 0.3s ease-in-out;
display: flex;
align-items: center;
gap: 0.5rem;
background: transparent;
border: none;
cursor: pointer;
z-index: 999;

&:hover {
  letter-spacing: 1.26px;
}

& svg {
fill: white;
}

@media (min-width: 768px) {
  display: none; /* Сховати кнопку на великих екранах */
}
`;