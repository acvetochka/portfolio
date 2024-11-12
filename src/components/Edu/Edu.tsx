"use client";

import { EduItem, EduList } from "./Edu.styles";
import eduData from "@/data/eduData.json";

export const Edu = (): JSX.Element => {
  return (
    <EduList>
      {eduData.map(({ degree, uni, date, location }, id) => (
        <EduItem key={id}>
          <p>
            {degree} - <span>{date}</span>
          </p>
          <p>
            {uni}, {location}
          </p>
          {/* <p>{date}</p> */}
        </EduItem>
      ))}
    </EduList>
  );
};
