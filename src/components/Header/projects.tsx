"use client";

import { useRouter } from "next/navigation";
import { BaseHeader } from "./base";
import { classNames } from "@/utils";

export function ProjectHeader() {
  const router = useRouter();
  return (
    <BaseHeader>
      <button
        onClick={() => router.back()}
        className={classNames(
          "btn font-light text-sm focus:outline",
          "text-yellow-600 border-yellow-500",
          "hover:bg-yellow-500 hover:text-white",
          "focus:bg-yellow-500 focus:text-white",
          "focus:ring-2 focus:ring-yellow-600",
          "focus:ring-offset-yellow-100 focus:ring-offset-4"
        )}
      >
        <i className="fa fa-arrow-left"></i>
        กลับไปยังหน้าผลงาน
      </button>
      <b className="text-gray-500">ผลงาน</b>
      <h1 className="text-yellow-600 pb-4">Test</h1>
    </BaseHeader>
  );
}
