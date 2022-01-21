import React from "react";
import styled from "styled-components";

import { MajorHeading } from "../Heading";
import Paragraph from "../Paragraph";

import { QUERIES } from "../../constants";

const SectionAbout = () => {
  return (
    <Wrapper id="about">
      <MajorHeading>About Me</MajorHeading>
      <Paragraph>
        Hello, my name is Quang and I'm a self-taught developer. I gained my
        interest in web development back when I worked as a Sales Support
        Engineer for a Japanese company. The company has some IoT products which
        have built-in web server. To make the products' software look more
        attractive to customers, my task was to create customized user interface
        using HTML, CSS and Javascript. Having background in programming helped
        me a bit in grasping the fundamental of web technology, even so I still
        struggled a lot to create a mental model in this new area.
        <br />
        <br />
        With all the experience I've gathered during my earlier professional
        career, I'm determined to dedicate my effort to grow as the best web
        developer I can be
      </Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 96px 0;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 60px 0;
  }
`;

export default SectionAbout;
