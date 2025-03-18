"use client";

import { ScrollLink } from "@/components";
import navigation from "@/data/navigation.json";
import { NavigationProps } from "@/types";
import { Nav } from "./Navigation.styles";

const typedNavigation: NavigationProps[] = navigation as NavigationProps[];

export const Navigation = (): JSX.Element => {
  return (
    <Nav className="nav-list">
      {typedNavigation.map(({ id, title, link }) => (
        <li key={id}>
          <ScrollLink to={link}>{title}</ScrollLink>
        </li>
      ))}
    </Nav>
  );
};
