import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";

import { ContentContainer } from "../../Content";
import { TOC } from "./TOC";
import { mdxComponents } from "./components";
import { getProject } from "./content";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug);

  return {
    title: project.title,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  const MDXContent = getMDXComponent(project?.body.code!);
  return (
    <div className="flex flex-col lg:flex-row justify-center xl:gap-4">
      <TOC project={project} />
      <ContentContainer id="project-contents">
        <MDXContent components={mdxComponents} />
      </ContentContainer>
    </div>
  );
}
