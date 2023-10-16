import { allProjects } from "contentlayer/generated";

import { ProjectHeader } from "@/components/Header/projects";

import { getProject } from "./content";

export async function generateStaticParams() {
  return allProjects.map((post) => ({
    slug: post.slug,
  }));
}

export default function ProjectDetailsLayout({
  children,
  modal,
  params,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: {
    slug: string;
  };
}) {
  const project = getProject(params.slug);
  return (
    <>
      <ProjectHeader data={project} />
      {children}
      {modal}
    </>
  );
}
