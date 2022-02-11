import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

import { navLinks } from "../../data";
import { QUERIES } from "../../constants";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    if (window.scrollY > 200) {
      const headerElem = document.body.getElementsByTagName("header")[0];
      headerElem.style.setProperty(
        "--background-color",
        "var(--color-background)"
      );
    } else {
      const headerElem = document.body.getElementsByTagName("header")[0];
      headerElem.style.setProperty("--background-color", "transparent");
    }
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderRow>
          <Logo>Quang Than</Logo>
          <nav>
            <NavLinks>
              {navLinks.map(({ name, url }, i) => (
                <NavLinkWrapper key={i}>
                  <Link href={url}>{name}</Link>
                </NavLinkWrapper>
              ))}
            </NavLinks>
          </nav>
          <MenuButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" size={32} />
          </MenuButton>
        </HeaderRow>
      </HeaderWrapper>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  --background-color: transparent;
  background: var(--background-color);
  backdrop-filter: blur(10px);
`;

const HeaderRow = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--header-height);
`;

const Logo = styled.div``;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  color: var(--color-white);

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const NavLinkWrapper = styled.li`
  font-size: 1.125rem;

  &:hover a {
    color: var(--color-primary);
  }
`;

const MenuButton = styled(UnstyledButton)`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
    width: 40px;
    height: 40px;
  }
`;

export default Header;
