import styled from "styled-components";
import { sharedButtonStyles } from "../ui/Button/Button.styles";

export const FilterList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
  flex-wrap: wrap;

  & button:focus {
    background: transparent;
  }
`;

export const StyledButton = styled.button<{ $isActive: boolean }>`
  ${sharedButtonStyles};

  background: ${({ $isActive }) => ($isActive ? "transparent" : "#000")};

  &:focus {
    background: transparent;
  }
`;
