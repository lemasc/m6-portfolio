import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeImgSize from "rehype-img-size";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    releaseDate: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    image: { type: "string" },
    gitUrl: { type: "string" },
    publicUrl: { type: "string" },
    rating: { type: "number", required: true },
    draft: { type: "boolean" },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/projects/${post._raw.flattenedPath}`,
    },
  },
  contentType: "mdx",
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Project],
  mdx: {
    //remarkPlugins: [remarkGfm],
    // @ts-expect-error
    rehypePlugins: [[rehypeImgSize, { dir: "public" }]],
  },
});
