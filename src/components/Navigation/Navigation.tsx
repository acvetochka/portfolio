"use client";

import { ScrollLink } from "@/components";
import { NavigationProps } from "@/types/Navigation.props";
import { Nav } from "./Navigation.styles";
import navigation from "@/data/navigation.json";

const typedNavigation: NavigationProps[] = navigation as NavigationProps[];

export const Navigation = (): JSX.Element => {
  return (
    <Nav>
      {typedNavigation.map(({ id, title, link }) => (
        <li key={id}>
          <ScrollLink to={link}>{title}</ScrollLink>
        </li>
      ))}
    </Nav>
  );
};
