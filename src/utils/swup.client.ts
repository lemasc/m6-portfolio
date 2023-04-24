import Swup from "swup";
import SwupSlideTheme from "@swup/slide-theme";
import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupProgressPlugin from "@swup/progress-plugin";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupMetaTagsPlugin from "swup-meta-tags-plugin";
import SwupScriptsPlugin from "@swup/scripts-plugin";

export function initSwup() {
  return new Swup({
    plugins: [
      new SwupProgressPlugin(),
      new SwupSlideTheme(),
      new SwupScrollPlugin(),
      new SwupPreloadPlugin(),
      new SwupMetaTagsPlugin(),
      new SwupScriptsPlugin({
        head: false,
        body: true,
      }),
    ],
  });
}
