export class LazyLoadVideoElement extends HTMLElement {
  constructor() {
    super();
    const src = this.getAttribute("src");
    const autoplay = Boolean(
      JSON.parse(this.getAttribute("autoplay") as string)
    );
    console.log(autoplay);
    if (!src) {
      throw new Error("src attribute is required");
    }

    const video = this.querySelector("video");
    if (!video) {
      throw new Error("video element is required");
    }

    video.addEventListener("error", (e) => {
      console.error(e);
    });

    if (autoplay) {
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.muted = true;
    } else {
      video.controls = true;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = src;
            video.onload;
            video.load();
          }
          if (autoplay) {
            video.play();
            observer.unobserve(video);
          }
        } else if (!entry.isIntersecting && !autoplay) {
          video.pause();
        }
      });
    });
    observer.observe(video);
  }
}
