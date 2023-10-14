import { allProjects } from "contentlayer/generated";

import { ProjectHeader } from "@/components/Header/projects";
import SmoothScrollLink from "@/components/Markdown/SmoothScrollLink";
import { Heading } from "@/contentlayer/types";

import { ContentContainer } from "../../Content";
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
      <div className="flex flex-col lg:flex-row justify-center xl:gap-4">
        <div className="px-10 pt-10 lg:pr-0 flex-shrink-0">
          <aside className="p-8 bg-yellow-50 space-y-3 rounded-lg xl:self-start w-full lg:sticky lg:top-28">
            <b className="text-lg text-yellow-700">สารบัญ</b>
            <ul className="list-none list-outside toc">
              {project.headings.map((heading: Heading) => (
                <li className="text-gray-800" key={heading.text}>
                  <SmoothScrollLink href={`#${heading.text}`}>
                    {heading.text}
                  </SmoothScrollLink>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <ContentContainer id="project-contents">{children}</ContentContainer>
      </div>
      {modal}
    </>
  );
}
