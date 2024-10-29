"use client"

import navigation from "@/data/navigation.json"
import Link from "next/link"
import { NavigationProps } from "./Navigation.props";
import { Nav } from "./Navigation.styles";

const typedNavigation: NavigationProps[] = navigation as NavigationProps[];

export const Navigation = ():JSX.Element => {
    return (
        <Nav>
        {typedNavigation.map(({id, title, link})=>  (
            <li key={id}>
                <Link href={link}>{title}</Link>
            </li>
        ))}
        </Nav>
    )
}