import TypewriterClass from "typewriter-effect/dist/core";

import type { TypewriterProps } from "./props";

export class TypewriterElement extends HTMLElement {
  constructor() {
    super();
    const element = this.children.item(0);
    if (!element) {
      throw new Error("Typewriter component must have a child element");
    }
    const { strings } = JSON.parse(
      this.getAttribute("props") as string
    ) as TypewriterProps;
    const typewriter = new TypewriterClass(element as HTMLElement, {
      strings,
      autoStart: true,
      loop: true,
    });
    //typewriter.typeString(strings[0]).pauseFor(2500);
    //typewriter.start();
  }
}
