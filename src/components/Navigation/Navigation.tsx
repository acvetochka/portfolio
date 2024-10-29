"use client"

import navigation from "@/data/navigation.json"
// import Link from "next/link"
import {Link} from "react-scroll";
import { NavigationProps } from "./Navigation.props";
import { Nav } from "./Navigation.styles";
import { Shadow } from "../Title/Title.styled";

const typedNavigation: NavigationProps[] = navigation as NavigationProps[];

export const Navigation = ():JSX.Element => {
    return (
        <Nav>
        {typedNavigation.map(({id, title, link})=>  (
            <li key={id}>
                <Link
            // onClick={isShow ? onClose : null}
            // className="text-center text-xl font-normal text-primary cursor-pointer xl:text-base hover:text-contact link"
            to={link}
            spy={true}
            smooth={true}
            duration={150}
            href="/"
          >{title}<Shadow/></Link>
            </li>
        ))}
        </Nav>
    )
}

