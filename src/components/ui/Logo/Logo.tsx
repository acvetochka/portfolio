"use client";

import { TextShadow } from "../TextShadow/TextShadow";
import { BlueSpan, LogoContainer, PurpleSpan } from "./Logo.styles";

export const Logo = (): JSX.Element => {
  return (
    <TextShadow size="22px" text="<AK/>">
      <LogoContainer>
        <PurpleSpan>&lt;</PurpleSpan>AK/<BlueSpan>&gt;</BlueSpan>
      </LogoContainer>
    </TextShadow>
  );
};
