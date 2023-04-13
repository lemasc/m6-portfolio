import { classNames } from "@/utils";
import { useEffect, useState } from "react";

export interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Navbar: React.FC<Props> = ({ className, children }) => {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 100 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <nav
      className={classNames(
        "sticky z-20 top-0 w-full p-4 h-16",
        top ? "bg-transparent" : "shadow-sm bg-white bg-opacity-70",
        className
      )}
    >
      {children}
    </nav>
  );
};
