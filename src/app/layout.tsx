import type { Metadata } from "next";
import { Mitr } from "next/font/google";

import "../styles/index.css";

const mitr = Mitr({
  variable: "--font-mitr",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description: "เว็บไซต์สะสมผลงานของนายศักดิธัช ธนาสดใส",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mitr.variable} font-sans font-light`}>
        {children}
      </body>
    </html>
  );
}
