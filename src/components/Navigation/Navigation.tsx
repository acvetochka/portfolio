"use client";

import navigation from "@/data/navigation.json";
import { Link } from "react-scroll";
import { NavigationProps } from "./Navigation.props";
import { Nav } from "./Navigation.styles";

const typedNavigation: NavigationProps[] = navigation as NavigationProps[];

export const Navigation = (): JSX.Element => {
  return (
    <Nav>
      {typedNavigation.map(({ id, title, link }) => (
        <li key={id}>
          <Link
            // onClick={isShow ? onClose : null}
            to={link}
            spy={true}
            smooth={true}
            duration={150}
            href="/"
          >
            {title}
          </Link>
        </li>
      ))}
    </Nav>
  );
};
