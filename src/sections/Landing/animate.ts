import anime from "animejs";
export const animate = (parent: HTMLElement | null) => {
  if (!parent) return;
  const timeline = anime.timeline({
    autoplay: false,
  });
  const observer = new IntersectionObserver(
    (entries) => {
      console.log("OBSERVER", entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          parent.style.opacity = "1";
          for (let i = 0; i < parent.children.length; i++) {
            timeline.add({
              targets: parent.children[i],
              opacity: [0, 1],
              duration: 500,
              easing: "easeInOutQuad",
              delay: 500,
            });
          }
          timeline.play();
          observer.unobserve(parent);
        }
      });
    },
    {
      root: document.querySelector("main"),
    }
  );
  observer.observe(parent);
};
