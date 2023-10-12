import { PageHeader } from "@/components/Header";
import { ContentContainer } from "../../Content";

export default function ProjectListPage() {
  return (
    <>
      <PageHeader title="ผลงาน">
        เทคโนโลยีนั้นเปลี่ยนแปลงรวดเร็วเสมอ ในทุก ๆ ผลงานที่ผมได้จัดทำขึ้น
        ผมจึงค้นหาและเรียนรู้สิ่งใหม่ ๆ อยู่ตลอดเวลา
        นอกจากนี้ในระหว่างการจัดทำแต่ละผลงานนั้นก็มีเงื่อนไขและอุปสรรคที่ไม่เหมือนกันเลยแม้แต่ครั้งเดียว
        จึงเปรียนเสมือนว่าผมได้ท้าทายและพัฒนาความสามารถของผมในแต่ละผลงานด้วย
      </PageHeader>
      <ContentContainer>
        <div>
          <h1>Project List</h1>
        </div>
      </ContentContainer>
    </>
  );
}
