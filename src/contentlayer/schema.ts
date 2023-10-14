import { defineDocumentType } from "contentlayer/source-files";

import { getHeadings } from "./headings";

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
    slug: {
      type: "string",
      resolve: (project) => project._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    headings: {
      type: "json",
      resolve: async (project) => {
        return await getHeadings(project.body);
      },
    },
  },
  contentType: "mdx",
}));
