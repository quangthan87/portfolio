import React from "react";
import styled from "styled-components";

const ExternalLink = ({ children, ...props }) => (
  <Link target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </Link>
);

const Link = styled.a`
  color: var(--color-primary);

  &:hover {
    text-decoration: revert;
  }
`;

export default ExternalLink;
