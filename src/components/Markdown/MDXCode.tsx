import GithubEmbed from "./GithubEmbed";

const MDXCode = ({ children }: React.ComponentProps<"code">) => {
  let isGithubUrl = false;
  try {
    if (
      typeof children === "string" &&
      new URL(children).hostname === "github.com"
    ) {
      isGithubUrl = true;
    }
  } catch {}
  if (isGithubUrl) {
    return <GithubEmbed url={children as string} />;
  }
  return <code>{children}</code>;
};

export default MDXCode;
