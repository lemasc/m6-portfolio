import { makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeImgSize from "rehype-img-size";
import rehypeSlug from "rehype-slug";

import { Project } from "./src/contentlayer/schema";

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Project],
  mdx: {
    //remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // @ts-expect-error
      [rehypeImgSize, { dir: "public" }],
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
});
