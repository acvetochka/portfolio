'use client'

import { Shadow } from "../Title/Title.styled"
import { BlueSpan, LogoContainer, PurpleSpan } from "./Logo.styled"

export const Logo = ():JSX.Element => {
    return (
        <LogoContainer>
        <p>
            <PurpleSpan>&lt;</PurpleSpan>AK/<BlueSpan>&gt;</BlueSpan>
        </p>
        <Shadow size="22px">&lt;AK/&gt;</Shadow>
        </LogoContainer>
    )
}