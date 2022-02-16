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
        My name is Quang and I'm a self-taught developer. I gained my interest
        in web development back when I worked as a Sales Support Engineer for a
        Japanese company. The company has some IoT products which have built-in
        web server. To make the products' software look more attractive to
        customers, my task was to create customized user interface using HTML,
        CSS and Javascript. As I dive deeper into web development through docs,
        online tutorials and courses, I've struggled a lot throughout the
        progress but gradually I've felt more comfortable when I can grab the
        fundamentals. Since then web development has become an important part of
        my life.
        <br />
        <br />
        With all my determination and the experience I've gathered during my
        earlier professional career, I'm ambitious to grow as the best web
        developer I can be, and help create web apps that work well, look good,
        accessible and easy-to-use for everyone.
      </Paragraph>
      <MajorHeading>My Skills</MajorHeading>
      <SkillList>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>RESTful API</li>
      </SkillList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 96px 0;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 60px 0;
  }
`;

const SkillList = styled.ul`
  margin-top: 32px;
  list-style: revert;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 64px;
`;

export default SectionAbout;
