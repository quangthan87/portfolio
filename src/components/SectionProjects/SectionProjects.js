import React from "react";
import styled from "styled-components";

import ProjectCard from "../ProjectCard/ProjectCard";
import { MajorHeading } from "../Heading";
import Paragraph from "../Paragraph";

import { QUERIES } from "../../constants";

const SectionProjects = ({ projects }) => {
  const sortedProjects = projects.sort(
    (a, b) => a.frontMatter.id - b.frontMatter.id
  );

  return (
    <Wrapper id="projects">
      <MajorHeading>What I've Built</MajorHeading>
      <Paragraph>Click on each project to see more details.</Paragraph>
      <ProjectsGrid>
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </ProjectsGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 96px 0;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 60px 0;
  }
`;

const ProjectsGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));
  gap: 16px;
`;

export default SectionProjects;
