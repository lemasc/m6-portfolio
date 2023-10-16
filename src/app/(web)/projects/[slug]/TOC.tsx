import { Project } from "contentlayer/generated";

import SmoothScrollLink from "@/components/Markdown/SmoothScrollLink";
import { Heading } from "@/contentlayer/types";

export const TOC = ({ project }: { project: Project }) => {
  return (
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
  );
};
