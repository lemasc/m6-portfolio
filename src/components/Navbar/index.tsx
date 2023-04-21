import { useEffect, useMemo, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { classNames } from "@/utils";
import type { MatchedNavigationItem, NavigationItem } from "./types";

export function Navbar({
  navigation,
  serverRoute,
}: {
  navigation: NavigationItem[];
  serverRoute: string;
}) {
  const [top, setTop] = useState(true);

  const [currentRoute, setRoute] = useState<string>(serverRoute);
  const transparent = useMemo(
    () => currentRoute.includes("home"),
    [currentRoute]
  );
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 100 ? setTop(false) : setTop(true);
    };
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.swup !== "undefined") {
      window.swup.on("contentReplaced", () => {
        setRoute(window.swup.currentPageUrl);
      });
    }
  }, []);

  const items: MatchedNavigationItem[] = useMemo(
    () =>
      navigation.map((item) => ({
        ...item,
        matched: item.href === currentRoute,
      })),
    [currentRoute]
  );
  return (
    <Disclosure as="nav" className="sticky z-20 w-full top-0">
      {({ open }) => (
        <div
          className={classNames(
            "absolute top-0 w-full",
            top && !open
              ? "bg-transparent"
              : "bg-yellow-50 bg-opacity-70 backdrop-blur-sm shadow-sm",
            "transition-all ease-in duration-300"
          )}
        >
          <div className="w-full px-4 lg:px-10 xl:px-14">
            <div className="relative flex h-16 items-center justify-between my-2">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className={`inline-flex z-20 items-center justify-center rounded-md px-2 py-5 text-gray-600 ${
                    transparent && !open && top ? "bg-yellow-100/90" : ""
                  } focus:outline-none`}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <i
                      className="fa-solid fa-xmark block fa-lg"
                      aria-hidden="true"
                    />
                  ) : (
                    <i
                      className="fa-solid fa-bars block fa-xl"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="px-4 flex flex-1 items-center justify-center lg:items-stretch lg:justify-end">
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-10">
                    {items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.matched
                            ? "font-normal"
                            : "opacity-60 hover:opacity-100",
                          "text-black drop-shadow-lg text-sm xl:text-base transition-all duration-300 ease-in"
                        )}
                        aria-current={item.matched ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            enter={"transition-all duration-500"}
            enterFrom={"opacity-0 scale-75"}
            enterTo={"opacity-100 scale-100"}
            leave={"transition-all duration-500"}
            leaveFrom={"opacity-100 scale-100"}
            leaveTo={"opacity-0 scale-75"}
            className="h-full min-h-screen w-full lg:hidden z-50"
          >
            <Disclosure.Panel static>
              <div className="space-y-2 px-6">
                {items.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.matched
                        ? "font-medium text-xl"
                        : "opacity-60 hover:opacity-100 text-lg",
                      "block text-black transition-all duration-300 ease-in"
                    )}
                    aria-current={item.matched ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}
