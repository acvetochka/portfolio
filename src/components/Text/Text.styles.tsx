import styled from "styled-components";

export const StyledText = styled.p<{ size: "small" | "normal" | "large" | "extra-large" }>`
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "12px";
      case "large":
        return "20px";
      case "extra-large":
        return "30px";
      default:
        return "16px";
    }
  }};
  line-height: 1.5;
  margin: 0;
`;