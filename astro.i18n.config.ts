import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
  defaultLangCode: "th",
  supportedLangCodes: ["en"],
  showDefaultLangCode: false,
  translations: {
    th: {
      nav: {
        home: "หน้าหลัก",
        projects: "ผลงาน",
      },
      tags: {
        "student-council": "คณะกรรมการนักเรียน",
        website: "เว็บไซต์",
        "year 2565": "ปี 2565",
      },
    },
    en: {
      nav: {
        home: "Home",
        projects: "Projects",
      },
      tags: {
        "student-council": "Student Council",
        website: "Website",
        "year 2565": "Year 2565",
      },
    },
  },
  routeTranslations: {},
});
