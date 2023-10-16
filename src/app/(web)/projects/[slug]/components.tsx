import { getMDXComponent } from "next-contentlayer/hooks";

import MDXCode from "@/components/Markdown/MDXCode";
import MDXImage from "@/components/Markdown/MDXImage";
import ProjectDetails from "@/components/Markdown/ProjectDetails";
import SmoothScrollLink from "@/components/Markdown/SmoothScrollLink";

type MDXComponents = NonNullable<
  React.ComponentProps<ReturnType<typeof getMDXComponent>>["components"]
>;

export const mdxComponents: MDXComponents = {
  img: MDXImage,
  code: MDXCode,
  a: (props) => {
    if (props.href?.startsWith("#")) {
      return <SmoothScrollLink {...props} />;
    }
    if (props.href?.startsWith("/details")) {
      return <ProjectDetails {...props} />;
    }
    return <a {...props} />;
  },
};
