"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "@/components";
import { MobileMenu } from "@/components/MobileMenu/MobileMenu";
import { Container } from "@/components/Section/Section.styled";
import { Border, BorderContainer, MenuButton } from "./Header.styles";

export const Header = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isClient, setIsClient] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);
  }, []);

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

      // return () => {
      //   document.documentElement.classList.remove("no-scroll");
      //   document.body.classList.remove("no-scroll");
      // }
    }
  }, [isMobileMenuOpen, isClient]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  return (
    <>
      <header>
        <Container>
          <BorderContainer>
            <Border>
              <Link href="/">
                <Image src="/logo.png" width={60} height={30} alt="logo" />
              </Link>
              {/* <Logo /> */}
              {isMobile ? (
                <MenuButton type="button" onClick={toggleMobileMenu}>
                  {isMobileMenuOpen ? (
                    <MdClose size={24} />
                  ) : (
                    <MdMenu size={24} />
                  )}
                </MenuButton>
              ) : (
                <Navigation />
              )}
              {isClient && (
                <MobileMenu
                  isOpen={isMobileMenuOpen}
                  onClose={toggleMobileMenu}
                />
              )}
            </Border>
          </BorderContainer>
        </Container>
      </header>
    </>
  );
};
