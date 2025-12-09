import menu from "@/data/navigation.json";
import { MobileMenuProps } from "@/types";
import {
  StyledMobileMenu,
  MenuList,
  MenuWrapper,
  LinkStyled,
} from "./MobileMenu.styles";
import { Container } from "../ui/Section/Section.styles";

export const MobileMenu = ({
  isOpen = false,
  onClose,
}: MobileMenuProps): JSX.Element => {
  return (
    <StyledMobileMenu $isOpen={isOpen}>
      <Container>
        <MenuWrapper>
          <MenuList>
            {menu.map(({ id, link, title }) => (
              <li key={id}>
                <LinkStyled
                  href="/"
                  to={link}
                  onClick={isOpen ? () => onClose() : undefined}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  {title}
                </LinkStyled>
              </li>
            ))}
          </MenuList>
        </MenuWrapper>
      </Container>
    </StyledMobileMenu>
  );
};
