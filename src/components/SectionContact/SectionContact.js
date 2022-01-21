import React from "react";
import styled from "styled-components";

import { MajorHeading } from "../Heading";
import Paragraph from "../Paragraph";

import { QUERIES } from "../../constants";

const SectionContact = () => {
  return (
    <Wrapper id="contact">
      <MajorHeading>Let's Build Something Together</MajorHeading>
      <Paragraph>
        Feel free to reach out if you're looking for a web developer or just
        want to connect.
      </Paragraph>
      <EmailLink href="mailto:quangthandev@gmail.com">
        quangthandev@gmail.com
      </EmailLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 96px 0;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 60px 0;
  }
`;

const EmailLink = styled.a`
  color: var(--color-gray-100);
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-white);

  &:hover,
  &:focus {
    color: var(--color-primary);
    border-bottom: revert;
  }
`;

export default SectionContact;
