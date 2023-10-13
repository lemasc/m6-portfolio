import { fetchFromGithub } from "./fetch";
import { highlightCode } from "./highlight";
import { EmGithubSettings, createInstance } from "./instance";

export default async function emgithub(settings: EmGithubSettings) {
  const instance = createInstance(settings);
  const code = await fetchFromGithub(instance);
  const html = highlightCode(instance, code);
  return {
    html,
    ...instance,
  };
}

export type * from "./instance";
