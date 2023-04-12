import { redirectToDefaultLanguage } from "@/utils/language";
import type { APIRoute } from "astro";

export const get: APIRoute = ({ redirect, url }) => {
  return redirectToDefaultLanguage(url, redirect);
};
