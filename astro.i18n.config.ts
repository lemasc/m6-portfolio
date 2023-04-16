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
        year: "ปี {year}",
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
        year: "Year {year}",
      },
    },
  },
  routeTranslations: {},
});
