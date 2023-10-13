"use client";

import {
  ArrowLeftIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/20/solid";
import { Project } from "contentlayer/generated";
import { add, format } from "date-fns";
import { th } from "date-fns/locale";
import { useRouter } from "next/navigation";

import { classNames } from "@/utils";

import Badge from "../Badge";
import { GithubIcon } from "../Icon/GithubIcon";
import { RatingStar } from "../RatingStar";
import { BaseHeader } from "./base";

export function ProjectHeader({ data }: { data: Project }) {
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
        <ArrowLeftIcon className="h-5 w-5 inline mr-2" />
        กลับไปยังหน้าผลงาน
      </button>
      <b className="text-gray-500">ผลงาน</b>
      <h1 className="text-yellow-600 pb-4 leading-tight">{data.title}</h1>
      {data.publicUrl && (
        <div>
          <a
            href={data.publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline text-gray-800"
          >
            <GlobeAsiaAustraliaIcon className="h-4 w-4" />
            <span className="text-sm">เยี่ยมชมผลงาน</span>
          </a>
        </div>
      )}
      {data.gitUrl && (
        <div>
          <a
            href={data.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline text-gray-800"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="text-sm">ดูบน Github</span>
          </a>
        </div>
      )}
      <div className="flex flex-row gap-x-4 gap-y-2 py-2 flex-wrap">
        {data.tags.map((tag) => (
          <Badge tag={tag} key={tag} />
        ))}
      </div>
      <div className="text-sm text-gray-700 opacity-90 items-center grid gap-4 grid-cols-[max-content_1fr]">
        <b title="วันที่เริ่มเผยแพร่ผลงานสู่สาธารณะ">วันที่เริ่มเผยแพร่</b>
        <span title="วันที่เริ่มเผยแพร่ผลงานสู่สาธารณะ">
          {format(
            add(new Date(data.releaseDate), { years: 543 }),
            "dd MMMM yyyy",
            { locale: th }
          )}
        </span>
        <b title="ประเมินความง่าย-ยากของงาน จากประสบการณ์การทำงานในปัจจุบัน">
          ประเมินความยาก-ง่ายของงาน
        </b>
        <RatingStar
          title="ประเมินความง่าย-ยากของงาน จากประสบการณ์การทำงานในปัจจุบัน"
          rating={data.rating}
        />
      </div>
    </BaseHeader>
  );
}
