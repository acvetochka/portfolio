import { IconType } from "react-icons";
import { FaFilePdf } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

type DataTypes = {
  title: string,
  src: string,
  action: string,
  icon: IconType
}

export const resumeData: DataTypes[] = [
  {
    title: "web-link",
    src: "https://resume.kuznietsova.org",
    action: "Show",
    icon: TbWorldWww
  },
  {
    title: "pdf-de",
    src: "/files/Lebenslauf_FullStack_Software_Engineer_Kuznietsova.pdf",
    action: "Download (de)",
    icon: FaFilePdf
  },
  {
    title: "pdf-en",
    src: "/files/CV_FullStack_Software_Engineer_Kuznietsova.pdf",
    action: "Download (en)",
    icon: FaFilePdf
  }
]