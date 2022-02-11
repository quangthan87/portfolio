import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import SectionHero from "../components/SectionHero";
import SectionAbout from "../components/SectionAbout";
import SectionProjects from "../components/SectionProjects";
import SectionContact from "../components/SectionContact";

export default function Home({ projects }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Quang Than | Web Developer</title>
      </Head>
      <SectionHero />
      <SectionAbout />
      <SectionProjects projects={projects} />
      <SectionContact />
    </React.Fragment>
  );
}

export const getStaticProps = () => {
  const files = fs.readdirSync(path.join("content/projects"));

  const projects = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/projects", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0]
    };
  });

  return {
    props: {
      projects
    }
  };
};
