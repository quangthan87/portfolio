import styled from "styled-components";

import { QUERIES } from "../../constants";

export const LargeTitle = styled.h1`
  color: var(--color-white);
  font-size: ${48 / 16}rem;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${40 / 16}rem;
  }
`;

export const MajorHeading = styled.h2`
  color: var(--color-white);
  font-size: ${36 / 16}rem;
  margin: 64px 0 16px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${28 / 16}rem;
  }
`;
