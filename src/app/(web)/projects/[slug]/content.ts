import { Project, allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const getProject = (slug: string): Project => {
  const project = allProjects.find(
    (post) => post._raw.sourceFileName === slug + ".content.mdx"
  );
  if (!project) throw void notFound();
  return project;
};
