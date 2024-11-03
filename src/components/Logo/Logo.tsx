"use client";

import { TextShadow } from "../TextShadow/TextShadow";
import { BlueSpan, PurpleSpan } from "./Logo.styled";

export const Logo = (): JSX.Element => {
  return (
    <TextShadow size="22px" text="<AK/>">
      <p>
        <PurpleSpan>&lt;</PurpleSpan>AK/<BlueSpan>&gt;</BlueSpan>
      </p>
    </TextShadow>
  );
};
