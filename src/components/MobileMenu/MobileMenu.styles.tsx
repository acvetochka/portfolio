import { Link } from "react-scroll";
import styled from "styled-components";

export const StyledMobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  background: rgba(20, 10, 35, 0.9);
  backdrop-filter: blur(12px);
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: all 0.5s ease-in-out;
  overflow-y: ${({ $isOpen }) => ($isOpen ? "scroll" : "hidden")};
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MenuList = styled.ul`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  list-style: none;
`;

export const CloseButton = styled.button`
  position: absolute;
  //   top: 2.75rem;
  top: 25px;
  right: 1.25rem;
  text-transform: uppercase;
  transition: letter-spacing 0.3s ease-in-out;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    letter-spacing: 1.26px;
  }

  & svg {
    fill: white;
  }
`;

export const LinkStyled = styled(Link)`
  cursor: pointer;
  //   text-decoration: none;
  color: inherit;
  text-transform: uppercase;

`;
