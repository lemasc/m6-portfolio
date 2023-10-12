import { Navbar } from "@/components/Navbar";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-light flex flex-col h-full min-h-screen">
      <Navbar />
      <div id="swup" className={"h-full flex-1 flex-grow"}>
        {children}
      </div>
      <footer
        className={`flex border-yellow-100 bg-yellow-100/30 text-gray-700 space-y-2 text-sm flex-col items-center justify-center h-40`}
      >
        <b>จัดทำเว็บไซต์โดย นายศักดิธัช ธนาสดใส</b>
        <a
          target="_blank"
          rel="noreferrer noopener"
          className="underline text-yellow-500 hover:text-yellow-600"
          href="https://github.com/lemasc/m6-portfolio"
        >
          ดู Source Code บน Github
        </a>
      </footer>
    </div>
  );
}
