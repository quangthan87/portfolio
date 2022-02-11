import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";

import { QUERIES } from "../../constants";

const SectionHero = () => {
  return (
    <Wrapper>
      <Row>
        <Left>
          <h1>
            Hi, I'm Quang.
            <br />
            <span>Web Developer.</span>
          </h1>
          <p>
            Even though I started my professional career as an Automation
            Engineer,
            <br />
            <span>
              coding has become my passion and my new professional career focus.
            </span>
          </p>
          <Button>
            <Link href="/#projects">See my Works</Link>
          </Button>
        </Left>
        <Right>
          <ImageWrapper>
            <Image
              src="/img/profile.jpg"
              alt="Quang Than smiling with a tree in the background"
              width={400}
              height={400}
              fill="true"
            />
          </ImageWrapper>
        </Right>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  & h1 {
    font-size: 5rem;
    color: var(--color-white);
  }

  & p {
    font-size: ${24 / 16}rem;
    margin-top: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    & h1 {
      font-size: 3rem;
    }

    & p {
      font-size: ${20 / 16}rem;
    }
  }
`;

const Button = styled(UnstyledButton)`
  margin-top: 32px;
  padding: 1rem 2rem;
  color: var(--color-primary);
  background: var(--color-secondary);
  border-radius: 4px;
  transition: transform 250ms;

  &:hover,
  &:focus {
    transform: translateY(-4px);
  }
`;

const Right = styled.div``;

const ImageWrapper = styled.div`
  & img {
    border-radius: 50%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default SectionHero;
