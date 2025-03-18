"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { MobileMenu, Navigation } from "@/components";
import { Container } from "@/components/Section/Section.styles";
import { Border, BorderContainer, MenuButton } from "./Header.styles";

export const Header = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      if (isMobileMenuOpen) {
        document.documentElement.classList.add("no-scroll");
        document.body.classList.add("no-scroll");
      } else {
        document.documentElement.classList.remove("no-scroll");
        document.body.classList.remove("no-scroll");
      }
    }
  }, [isMobileMenuOpen, isClient]);

  const toggleMobileMenu = (event?: React.MouseEvent) => {
    if (event) event.preventDefault(); // Запобігає зміні позиції скролу
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <Container>
          <BorderContainer className="border-container">
            <Border className="border">
              <Link href="/">
                <Image src="/logo.png" width={60} height={30} alt="logo" />
              </Link>
              {isClient && isMobile ? (
                <>
                  <MenuButton type="button" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "close-menu-button": "open-menu-button"}>
                    {isMobileMenuOpen ? (
                      <MdClose size={24} />
                    ) : (
                      <MdMenu size={24} />
                    )}
                  </MenuButton>
                  <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={toggleMobileMenu}
                  />
                </>
              ) : (
                <Navigation />
              )}
            </Border>
          </BorderContainer>
        </Container>
      </header>
    </>
  );
};
