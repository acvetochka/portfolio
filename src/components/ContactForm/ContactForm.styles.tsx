import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 600px;
  }

  @media screen and (min-width: 1020px) {
    align-items: flex-end;
  }
`;

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

  outline: 1px solid #4f0ac9;

  &:focus {
    // border:  1px solid #0000ff;
    border: 1px solid #4f0ac9;
    outline: 2px solid #0000ff;
  }
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  min-height: 200px;
  border-radius: 10px;
  padding: 10px;
  outline: 1px solid #4f0ac9;
  background: hsla(0, 0%, 100%, 0.05);
  margin-top: 10px;
  color: white;

  &:focus {
    // border:  1px solid #0000ff;
    border: 1px solid #4f0ac9;
    outline: 2px solid #0000ff;
  }
`;

export const TextStatus = styled.p`
  color: red;
`;
