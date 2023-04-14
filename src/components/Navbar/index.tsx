import { useEffect, useMemo, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { classNames } from "@/utils";
import type { MatchedNavigationItem, NavigationItem } from "./types";

export function Navbar({
  navigation,
  className,
  currentRoute,
}: {
  navigation: NavigationItem[];
  className?: string;
  currentRoute: string;
}) {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 100 ? setTop(false) : setTop(true);
    };
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
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
            top && !open ? "bg-transparent" : "bg-yellow-50 bg-opacity-90",
            "transition-colors ease-in duration-300"
          )}
        >
          <div className="w-full px-4 sm:px-10 lg:px-14">
            <div className="relative flex h-16 items-center justify-between my-2">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 focus:outline-none">
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
              <div className="px-4 flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-10">
                    {items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.matched
                            ? "font-normal"
                            : "opacity-60 hover:opacity-100",
                          "text-black text-sm xl:text-base transition-all duration-300 ease-in"
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
            className="h-full min-h-screen w-full sm:hidden z-50"
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
