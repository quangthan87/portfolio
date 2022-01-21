import fs from "fs";
import path from "path";
import matter from "gray-matter";

import SectionHero from "../components/SectionHero";
import SectionAbout from "../components/SectionAbout";
import SectionProjects from "../components/SectionProjects";
import SectionContact from "../components/SectionContact";

export default function Home({ projects }) {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionProjects projects={projects} />
      <SectionContact />
    </>
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
