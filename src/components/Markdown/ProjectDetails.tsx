"use client";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProjectDetails({
  href,
  children,
}: JSX.IntrinsicElements["a"]) {
  const pathname = usePathname();
  return (
    <Link
      href={`${pathname}${href}`}
      className="project-detail-btn"
      scroll={false}
    >
      <ArrowUpRightIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
      {children}
    </Link>
  );
}
