export type EmGithubSettings = {
  url: string;
};

export type EmGithubInstance = {
  target: URL;
  startLine: number;
  endLine: number;
  rawFileUrl: string;
  filePath: string;
};

export const createInstance = ({ url }: EmGithubSettings): EmGithubInstance => {
  const target = new URL(url);

  const lineSplit = target.hash.split("-");
  const startLine =
    (target.hash !== "" && parseInt(lineSplit[0].replace("#L", ""))) || -1;
  const endLine =
    (target.hash !== "" &&
      lineSplit.length > 1 &&
      parseInt(lineSplit[1].replace("L", ""))) ||
    startLine;
  const [_, owner, repo, __, branch, ...path] = target.pathname.split("/");
  const rawFileUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path.join(
    "/"
  )}`;
  return {
    target,
    startLine,
    endLine,
    rawFileUrl,
    filePath: path.join("/"),
  };
};
