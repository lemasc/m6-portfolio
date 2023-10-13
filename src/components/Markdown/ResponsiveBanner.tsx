import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";

export default function ResponsiveBanner({ isPWA }: { isPWA: boolean }) {
  return (
    <div className="rounded bg-green-200 px-4 py-6 text-green-700 flex flex-col text-center lg:text-left lg:flex-row gap-4 items-center">
      <div className="rounded-full bg-white h-14 w-14 flex items-center justify-center flex-shrink-0">
        <DevicePhoneMobileIcon className="h-8 w-8" />
      </div>
      <div className="space-y-1">
        <b className="font-normal text-normal">
          เว็บไซต์นี้ได้พัฒนาตามหลักการออกแบบ Responsive Design
        </b>
        <p className="text-sm">
          มีการทดสอบการแสดงผลบนอุปกรณ์เคลื่อนที่ตลอดระยะเวลาการพัฒนา
          {isPWA &&
            `นอกจากนี้เว็บไซต์ยังได้รับการตั้งค่าให้สามารถติดตั้งได้ (Installable) ตามหลัก
      Progressive Web App (PWA) อีกด้วย`}
        </p>
        <slot />
      </div>
    </div>
  );
}
