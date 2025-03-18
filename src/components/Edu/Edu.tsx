"use client";

import eduData from "@/data/eduData.json";
import { EduItem, EduList, Uni } from "./Edu.styles";

export const Edu = (): JSX.Element => {
  return (
    <EduList>
      {eduData.map(({ degree, uni, date, location }, id) => (
        <EduItem key={id}>
          <p>
            {degree} <span>[{date}]</span>
          </p>
          <Uni>
            {uni} [{location}]
          </Uni>
        </EduItem>
      ))}
    </EduList>
  );
};
