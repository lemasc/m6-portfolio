import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/github.min.css";

import "../../styles/emgithub.css";
import { EmGithubInstance } from "./instance";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("json", json);

export const highlightCode = (instance: EmGithubInstance, code: string) => {
  const highlighted = hljs.highlightAuto(code).value;
  return highlighted;
};
