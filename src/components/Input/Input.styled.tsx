import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;

  &media width(min-width: 768px) {
    width: 500px;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  min-height: 40px;
  border-radius: 10px;
  padding: 10px;
  background: hsla(0, 0%, 100%, 0.05);
  margin: 10px 0 20px 0;
  color: white;

  outline: 1px solid #4f0ac9;

  &:focus {
    // border:  1px solid #0000ff;
    border: 1px solid #4f0ac9;
    outline: 2px solid #0000ff;
  }
`;