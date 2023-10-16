"use client";

/**
 * A React Link component that scrolls smoothly to the target element.
 */
export default function SmoothScrollLink({
  children,
  href,
  ...props
}: JSX.IntrinsicElements["a"]) {
  const clientSideNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetHref = e.currentTarget.getAttribute("href");
    if (targetHref?.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(targetHref);
      if (targetElement) {
        const targetTop = targetElement.getBoundingClientRect().top;
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const headerOffset = 100;
        window.scrollTo({
          top: targetTop + scrollTop - headerOffset,
          behavior: "smooth",
        });
        const currentURL = new URL(window.location.href);
        currentURL.hash = targetHref;
        history.pushState(history.state, "", currentURL.toString());
      }
    }
  };
  return (
    <a
      href={href}
      onClick={clientSideNavigation}
      className="hover:text-yellow-700"
      {...props}
    >
      {children}
    </a>
  );
}
