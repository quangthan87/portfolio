import React from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";

import { ProjectHero, Main } from "../../components/Project";
import { LargeTitle, MajorHeading } from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import ExternalLink from "../../components/ExternalLink";

const components = {
  ProjectHero,
  Main,
  ExternalLink,
  MajorHeading,
  Paragraph,
  Image
};

const ProjectPage = ({ frontMatter, mdxSource }) => {
  return (
    <>
      <ProjectHero>
        <LargeTitle tag="h1">{frontMatter.title}</LargeTitle>
      </ProjectHero>
      <Main>
        <MDXRemote {...mdxSource} components={components} />
      </Main>
    </>
  );
};

export const getStaticPaths = () => {
  const files = fs.readdirSync(path.join("content/projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", "")
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content/projects", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  };
};

export default ProjectPage;
