import { makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks, { Options } from "rehype-external-links";
import rehypeImgSize from "rehype-img-size";
import rehypeSlug from "rehype-slug";

import { Project } from "./src/contentlayer/schema";

const externalLinkOptions: Options = {
  target: "_blank",
  rel: ["noreferrer", "noopener"],
};

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Project],
  mdx: {
    //remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // @ts-expect-error
      [rehypeImgSize, { dir: "public" }],
      [rehypeExternalLinks, externalLinkOptions],
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
});
