// import { Title } from "@/components";
import { FaFilePdf } from "react-icons/fa"; 
import { TbWorldWww } from "react-icons/tb"; 

import { CustomLink } from "../CustomLink/CustomLink"
import { CVItem, ListStyled } from "./CV.styles";

export const CV = ():JSX.Element => {
    return (
        <ListStyled>
            <CVItem><CustomLink href="https://resume.kuznietsova.org">Show <TbWorldWww/></CustomLink></CVItem>
            <CVItem><CustomLink href="/files/Frontend_Kuznietsova_Alona.pdf">Download (DE) <FaFilePdf/></CustomLink></CVItem>
        </ListStyled>

    )
}