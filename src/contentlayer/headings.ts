import { MDX } from "contentlayer/core";
import { RootContentMap, Text } from "mdast";
import remarkParse from "remark-parse";
import { unified } from "unified";

import { Heading } from "./types";

const recursiveHeading = (
  headings: Heading[],
  level: number
): Heading[] | undefined => {
  const children = headings.filter((h) => h.level === level);
  const rest = headings.filter((h) => h.level !== level);
  if (children.length === 0) return undefined;
  return children.map((h) => {
    return {
      ...h,
      children: recursiveHeading(rest, level + 1),
    };
  });
};

export const getHeadings = async (body: MDX) => {
  // Extract headings from markdown content
  const ast = unified().use(remarkParse).parse(body.raw);
  const headings = ast.children
    .filter(function (node): node is RootContentMap["heading"] {
      return (
        node.type === "heading" &&
        node.children.length > 0 &&
        node.children[0].type === "text"
      );
    })
    .map((node) => {
      return {
        level: node.depth - 1,
        text: (node.children[0] as Text).value,
      };
    });
  const nestedHeadings = headings.reduce((acc, heading) => {
    if (heading.level === 1) {
      acc.push({
        ...heading,
        children: recursiveHeading(headings, heading.level + 1),
      });
    }
    return acc;
  }, [] as Heading[]);

  return nestedHeadings;
};
