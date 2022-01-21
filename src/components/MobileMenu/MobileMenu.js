import React, { useEffect } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

import { navLinks } from "../../data";
import { WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 600) {
      onDismiss();
    }
  };

  return (
    <Container isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={32} />
        </CloseButton>
        <nav>
          <NavLinks>
            {navLinks.map(({ name, url }, i) => (
              <li key={i} onClick={onDismiss}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </NavLinks>
        </nav>
      </Content>
    </Container>
  );
};

const Container = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
`;

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Content = styled(DialogContent)`
  --overfill: 16px;
  position: relative;
  width: 100%;
  height: calc(100% + var(--overfill));
  margin-top: calc(var(--overfill) * -1);
  padding: 24px 32px;
  background: hsl(241deg 46% 21%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 600ms both cubic-bezier(0, 0.6, 0.32, 1.06);
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  --size: 40px;
  top: calc(var(--header-height) * 0.5 - var(--size) * 0.5 + var(--overfill));
  right: 16px;
  width: var(--size);
  height: var(--size);
  color: var(--color-gray-500);
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: var(--color-gray-100);
  font-size: 1.875rem;
  font-weight: ${WEIGHTS.medium};
`;

export default MobileMenu;
