import { getMDXComponent } from "next-contentlayer/hooks";

import MDXCode from "@/components/Markdown/MDXCode";
import MDXImage from "@/components/Markdown/MDXImage";

type MDXComponents = NonNullable<
  React.ComponentProps<ReturnType<typeof getMDXComponent>>["components"]
>;

export const mdxComponents: MDXComponents = {
  img: MDXImage,
  code: MDXCode,
};
