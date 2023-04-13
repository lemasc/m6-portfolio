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
    },
    en: {
      nav: {
        home: "Home",
        projects: "Projects",
      },
    },
  },
  routeTranslations: {},
});
