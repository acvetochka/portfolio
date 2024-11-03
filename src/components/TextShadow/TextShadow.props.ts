import { ReactNode } from "react";

export interface TextShadowProps {
    size?: string;
    text: string;
    children: ReactNode;
    id?: string;
}

export interface ShadowProps {
    size?: string;
    id?: string;
    // text: string;
}