import { allProjects } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/Badge";
import { PageHeader } from "@/components/Header";
import { RatingStar } from "@/components/RatingStar";

import { ContentContainer } from "../../Content";

export default function ProjectListPage() {
  const entries = allProjects.filter((project) => !project.draft);
  return (
    <>
      <PageHeader title="ผลงาน">
        เทคโนโลยีนั้นเปลี่ยนแปลงรวดเร็วเสมอ ในทุก ๆ ผลงานที่ผมได้จัดทำขึ้น
        ผมจึงค้นหาและเรียนรู้สิ่งใหม่ ๆ อยู่ตลอดเวลา
        นอกจากนี้ในระหว่างการจัดทำแต่ละผลงานนั้นก็มีเงื่อนไขและอุปสรรคที่ไม่เหมือนกันเลยแม้แต่ครั้งเดียว
        จึงเปรียนเสมือนว่าผมได้ท้าทายและพัฒนาความสามารถของผมในแต่ละผลงานด้วย
      </PageHeader>
      <ContentContainer className="grid lg:grid-cols-2 gap-4 md:gap-6">
        {entries.map((entry) => (
          <Link
            key={entry._id}
            href={`/projects/${entry.slug}`}
            className="bg-white w-full transition-all hover:bg-gray-50 hover:shadow-md rounded-lg h-full flex flex-col"
          >
            {entry.image ? (
              <Image
                src={entry.image}
                className="w-full h-56 object-cover object-top rounded-t-lg border-l border-r border-t"
                width={480}
                height={270}
                alt={entry.title}
              />
            ) : (
              <div className="w-full h-56 bg-gray-100 rounded-t-lg border-l border-r bnorder-t" />
            )}
            <div className="p-5 flex-grow border-t border-l border-r border-b rounded-b-lg space-y-1">
              <b className="text-lg">{entry.title}</b>

              <div className="flex flex-row gap-x-4 gap-y-2 py-2 flex-wrap">
                {entry.tags.map((tag) => (
                  <Badge key={tag} tag={tag} />
                ))}
              </div>
              <RatingStar
                title="ประเมินความง่าย-ยากของงาน จากประสบการณ์การทำงานในปัจจุบัน"
                rating={entry.rating}
              />
              <p className="text-sm leading-6 text-gray-700 pt-2">
                {entry.description}
              </p>
            </div>
          </Link>
        ))}
      </ContentContainer>
    </>
  );
}
