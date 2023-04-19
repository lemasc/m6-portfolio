import Swup from "swup";
import SwupSlideTheme from "@swup/slide-theme";
import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupProgressPlugin from "@swup/progress-plugin";
import SwupScrollPlugin from "@swup/scroll-plugin";

export function swup() {
  return new Swup({
    plugins: [
      new SwupProgressPlugin(),
      new SwupSlideTheme(),
      new SwupScrollPlugin(),
      new SwupPreloadPlugin(),
    ],
  });
}
