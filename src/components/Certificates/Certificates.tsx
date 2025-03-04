import { CustomLink, Title } from "@/components";
import { CertItem, CertList, Wrapper } from "./Certificates.styles";
import certData from "@/data/certification.json";
import { VscGoToFile } from "react-icons/vsc";
import { AiOutlineExport } from "react-icons/ai";

export const Certificates = (): JSX.Element => {
  return (
    <Wrapper>
      {certData.map(({ id, type, certList }) => (
        <li key={id}>
          <Title tag="h3">{type}</Title>
          <CertList>
            {certList.map(({ degree, href }, id) => (
              <CertItem key={id}>
                <CustomLink key={id} href={href}>
                  {degree} <AiOutlineExport/>
                </CustomLink>
              </CertItem>
            ))}
          </CertList>
        </li>
      ))}
    </Wrapper>
  );
};
