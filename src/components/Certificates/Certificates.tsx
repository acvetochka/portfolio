import certData from "@/data/certification.json";
import { CustomLink } from "../CustomLink/CustomLink";
import { Title } from "../Title/Title";

// import { EduList } from "../Edu/Edu.styles";
import { CertItem, CertList, Wrapper } from "./Certificates.styles";

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
                  {degree}
                </CustomLink>
              </CertItem>
            ))}
          </CertList>
        </li>
      ))}
    </Wrapper>
  );
};
