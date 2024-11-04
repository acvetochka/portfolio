import styled from "styled-components";

export const SkillsListStyled = styled.ul`
  list-style: none;
  display: flex;
  // justify-content: center;
  gap: 10px;
  padding: 15px 0;
`;

export const IconContainer = styled.div<{ content: string }>`
  position: relative;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
  text-align: center;

  &:hover::before {
    opacity: 1; /* Зробимо видимим при наведенні */
  }

  &::before {
    content: "${({ content }) => content}";
    position: absolute;
    top: 45px;
    min-width: 100%;
    font-size: 12px;
    opacity: 0; /* Початковий стан: невидимий */
    transition: opacity 0.3s ease-in-out; /* Додаємо анімацію */
    background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
    z-index: 1;
    border-radius: 5px;
    padding: 2px;
  }
`;
