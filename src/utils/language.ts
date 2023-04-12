export type Language = "en" | "th";
export const defaultLang: Language = "th";

export type GetLanguage<Safe extends boolean | undefined = undefined> = {
  language: Safe extends true ? Language : Language | undefined;
  path: string;
};
/**
 * Gets the current language from the URL.
 * @param url The URL to get the language from. Should be set as `Astro.url` so it will provided by the runtime automatically.
 * @param safe If true, the function will always return a language. It will throw an error if the language is not supported.
 * @returns The current language, or undefined if the language is not supported and should be redirected.
 */
export const getLanguage = <Safe extends boolean | undefined>(
  { pathname }: URL,
  safe?: Safe
): GetLanguage<Safe> => {
  const [_, maybeLanguage, ...rest] = pathname.split("/");
  let maybeInvalidLanguage = false;
  let language: Language | undefined;
  if (maybeLanguage && maybeLanguage.length === 2) {
    if (maybeLanguage === "en" || maybeLanguage === "th") {
      language = maybeLanguage;
    } else {
      maybeInvalidLanguage = true;
    }
  }
  if (safe && !language) {
    throw new Error("Cannot detect langauge from URL.");
  }

  return {
    language,
    path: [
      _,
      language || maybeInvalidLanguage ? undefined : maybeLanguage,
      ...rest,
    ]
      .filter((segments) => typeof segments !== "undefined")
      .join("/"),
  } as GetLanguage<Safe>;
};
export const redirectToDefaultLanguage = (
  url: URL,
  redirectFn: (url: string) => any
) => {
  const { language, path } = getLanguage(url);
  if (!language) {
    return redirectFn(`/${defaultLang}${path}`);
  }
};
