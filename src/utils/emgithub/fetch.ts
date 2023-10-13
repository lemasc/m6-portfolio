import { EmGithubInstance } from "./instance";

const processFromGithub = async (
  { startLine, endLine }: EmGithubInstance,
  res: Response
): Promise<string> => {
  let codeText = await res.text();
  if (codeText[codeText.length - 1] === "\n") {
    // First remove the ending newline
    codeText = codeText.slice(0, -1);
  }

  let codeTextSplit = codeText.split("\n");
  if (startLine > 0) {
    codeTextSplit = codeTextSplit.slice(startLine - 1, endLine);
  }

  // Strip leading whitespace as otherwise we get pointless whitespace/indentation
  // for code snippets from the middle of functions (#22)
  while (true) {
    const firstChars = codeTextSplit
      .filter((s) => s.length > 0)
      .map((s) => s[0]);
    if (new Set(firstChars).size == 1 && [" ", "\t"].includes(firstChars[0])) {
      // If all the lines begin with ' ' or '\t', strip the first char
      codeTextSplit = codeTextSplit.map((s) => s.slice(1));
    } else {
      break;
    }
  }

  codeText = codeTextSplit.join("\n");
  // Then add the newline back
  codeText = codeText + "\n";
  return codeText;
};

export const fetchFromGithub = async (instance: EmGithubInstance) => {
  return await fetch(instance.rawFileUrl)
    .then((res) => processFromGithub(instance, res))
    .catch((err) => err.toString());
};
