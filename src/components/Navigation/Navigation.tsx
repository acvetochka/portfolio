"use client";

import navigation from "@/data/navigation.json";
// import { Link } from "react-scroll";
import { NavigationProps } from "./Navigation.props";
import { Nav } from "./Navigation.styles";
import ScrollLink from "../ScrollLink/ScrollLink";

const typedNavigation: NavigationProps[] = navigation as NavigationProps[];

export const Navigation = (): JSX.Element => {
  return (
    <Nav>
      {typedNavigation.map(({ id, title, link }) => (
        <li key={id}>
          <ScrollLink to={link}>{title}</ScrollLink>
          {/* <Link
            // onClick={isShow ? onClose : null}
            to={link}
            spy={true}
            smooth={true}
            duration={150}
            href="/"
            className="link"
          >
            {title}
          </Link> */}
        </li>
      ))}
    </Nav>
  );
};
