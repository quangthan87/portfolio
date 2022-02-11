import React from "react";
import styled from "styled-components";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Icon from "../Icon";

const Footer = () => {
  return (
    <Wrapper>
      <Row>
        <Left>&copy; {1900 + new Date().getYear()} Quang Than</Left>
        <Right>
          <li>
            <ExternalLink href="https://github.com/quangthan87" target="_blank">
              <Icon id="github" size={24} />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://twitter.com/quang_than" target="_blank">
              <Icon id="twitter" size={24} />
            </ExternalLink>
          </li>
        </Right>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin-top: 5rem;
  padding: 2rem 0;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;

const Right = styled.ul`
  display: flex;
  gap: 16px;
`;

const ExternalLink = styled.a`
  &:hover {
    color: var(--color-primary);
  }
`;

export default Footer;
