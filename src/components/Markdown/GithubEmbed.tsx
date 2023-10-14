import emgithub, { EmGithubSettings } from "@/utils/emgithub";

export default async function GithubEmbed(props: EmGithubSettings) {
  const { html, rawFileUrl, filePath } = await emgithub(props);
  return (
    <div className="emgithub-container">
      <div className="emgithub-file emgithub-file-light">
        <div className="file-data hljs-style-github">
          <pre className="p-4 leading-6 text-sm">
            <code
              className="emgithub-code"
              dangerouslySetInnerHTML={{ __html: html }}
            ></code>
          </pre>
        </div>
        <div className={`file-meta file-meta-light`}>
          <a target="_blank" href={rawFileUrl} style={{ float: "right" }}>
            view raw
          </a>
          viewing file{" "}
          <a target="_blank" href={props.url}>
            {decodeURIComponent(filePath)}
          </a>{" "}
          from <b>GitHub</b>
        </div>
      </div>
    </div>
  );
}
