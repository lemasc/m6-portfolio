import { TypewriterElement } from "./Typewriter/client";
import { LazyLoadVideoElement } from "./Video/client";

export function register() {
  customElements.define("typewriter-element", TypewriterElement);
  customElements.define("lazyload-video", LazyLoadVideoElement);
}
