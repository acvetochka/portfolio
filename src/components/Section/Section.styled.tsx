import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;

  @media (min-width: 480px) {
    max-width: 480px;
    padding-right: 15px;
    padding-left: 15px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding-right: 24px;
    padding-left: 24px;
  }

  @media (min-width: 1020px) {
    max-width: 1020px;
    padding-right: 40px;
    padding-left: 40px;
}

  @media (min-width: 1200px) {
    max-width: 1200px;
    padding-right: 40px;
    padding-left: 40px;
}
`;
