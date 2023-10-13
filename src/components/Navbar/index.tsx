"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { classNames } from "@/utils";

import { GotoTop } from "./GoToTop";
import { navigation } from "./navigation";
import type { MatchedNavigationItem } from "./types";

export function Navbar() {
  const [top, setTop] = useState(true);

  const currentRoute = usePathname();

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

  const items: MatchedNavigationItem[] = useMemo(
    () =>
      navigation.map((item) => ({
        ...item,
        matched: item.href === currentRoute,
      })),
    [currentRoute]
  );
  return (
    <>
      <GotoTop top={top} />
      <Disclosure as="nav" className="sticky z-20 w-full top-0">
        {({ open }) => (
          <div
            className={classNames(
              "absolute top-0 w-full",
              top && !open
                ? "bg-transparent"
                : "bg-yellow-50 bg-opacity-70 backdrop-blur-sm",
              "transition-all ease-in duration-300"
            )}
          >
            <div className="w-full px-4 lg:px-10">
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
                      <XMarkIcon className="w-6 h-6 block" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="w-6 h-6 block" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="px-4 flex flex-1 items-center justify-center lg:items-stretch lg:justify-end">
                  <div className="hidden lg:ml-6 lg:block">
                    <div className="flex space-x-10">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.matched
                              ? "font-normal"
                              : "opacity-60 hover:opacity-100",
                            "text-black drop-shadow-xl text-sm xl:text-base transition-all duration-300 ease-in"
                          )}
                          aria-current={item.matched ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
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
                      as={Link}
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
    </>
  );
}
