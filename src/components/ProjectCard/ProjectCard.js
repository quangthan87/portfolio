import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import Icon from "../Icon";

const ProjectCard = ({ frontMatter, slug }) => {
  const { photo, category, externalLinks, title, description, stacks } =
    frontMatter;

  return (
    <Wrapper>
      <Header>
        <Link href={`/project/${slug}`}>
          <a>
            <ImageWrapper>
              <CardImage
                src={photo.src}
                alt={photo.alt}
                width="160px"
                height="90px"
                layout="responsive"
              />
            </ImageWrapper>
            <HeaderContent>
              <div>
                <CardTitle>{title}</CardTitle>
                <p>{description}</p>
              </div>
              <StacksWrapper>
                {stacks &&
                  stacks.map((stack, id) => (
                    <TechStack key={id}>{stack}</TechStack>
                  ))}
              </StacksWrapper>
            </HeaderContent>
          </a>
        </Link>
      </Header>
      <Footer>
        <Category>{category}</Category>
        <ExternalLinks>
          {externalLinks &&
            externalLinks.map((link, id) => (
              <ExternalLink key={id} href={link.url} target="_blank">
                <Icon id={link.iconId} size={28} />
              </ExternalLink>
            ))}
        </ExternalLinks>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: var(--color-secondary);
  height: 100%;
  --padding-side: 32px;
  padding: 0 var(--padding-side);
  --border-radius: 8px;
  border-radius: var(--border-radius);
  isolation: isolate;
`;

const Header = styled.div`
  & a::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  & a:focus {
    outline: none;
  }
`;

const ImageWrapper = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-left: calc(var(--padding-side) * -1);
  margin-right: calc(var(--padding-side) * -1);
`;

const CardImage = styled(Image)`
  display: block;
  width: 100%;
  will-change: transform;
  transform-origin: 50% 75%;
  transition: transform 600ms;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    ${Header} a:hover &,
    ${Header} a:focus & {
      transform: scale(1.1);
      transition: transform 300ms;
    }
  }
`;

const HeaderContent = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid var(--color-gray-700);

  & p {
    font-size: ${18 / 16}rem;
  }
`;

const Category = styled.h4`
  color: var(--color-gray-300);
`;

const ExternalLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: calc((28 - 40) * 1px);
`;

const ExternalLink = styled.a`
  padding: 5px 7px;
  z-index: 2;

  &:hover,
  &:focus {
    color: var(--color-primary);
  }
`;

const CardTitle = styled.h3`
  font-size: ${32 / 16}rem;
  color: var(--color-white);
  margin-bottom: 8px;

  ${Header} a:hover &,
  ${Header} a:focus & {
    color: var(--color-primary);
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

const StacksWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const TechStack = styled.li`
  color: var(--color-gray-100);
  background: var(--color-gray-900);
  padding: 4px 8px;
  border-radius: 4px;
`;

export default ProjectCard;
