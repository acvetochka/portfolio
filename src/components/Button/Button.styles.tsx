import styled, { css } from 'styled-components';
import { Link as ReactScrollLink } from 'react-scroll';

const gradientBorder = `linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff)`;

const sharedButtonStyles = css`
  background: #000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const StyledButtonContainer = styled.div`
  display: inline-flex;
  position: relative;
  border-radius: 10px;
  background: ${gradientBorder};
  padding: 2px;
  overflow: hidden;

  &:hover > * {
    background: transparent;
  }
`;

export const StyledButton = styled.button`
  ${sharedButtonStyles};
`;

export const StyledScrollLink = styled(ReactScrollLink)`
  ${sharedButtonStyles};
`;

export const StyledlLink = styled.a`
  ${sharedButtonStyles};
`;