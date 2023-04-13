import { getEntryBySlug } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { collections } from "@/content/config";
import { astroI18n } from "astro-i18n";

export type I18nEntry<E> = E extends `${infer Lang}/${infer Entry}`
  ? Lang extends LangCode
    ? Entry
    : never
  : never;

type EntryMapKeys = keyof typeof collections;
type AllValuesOf<T> = T extends { slug: string } ? T : never;
type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<
  CollectionEntry<C>
>["slug"];

type GetI18nMarkdownOptions = {
  url: URL;
};

export async function getI18nMarkdown<
  C extends EntryMapKeys,
  E extends ValidEntrySlug<C>,
  I extends I18nEntry<ValidEntrySlug<C>>
>(
  collection: C,
  entrySlug: I,
  { url }: GetI18nMarkdownOptions
): Promise<CollectionEntry<C>> {
  const language = astroI18n.langCode;
  const entry = (await getEntryBySlug<C, E>(
    collection,
    `${language}/${entrySlug}`
  )) as CollectionEntry<C>;
  if (!entry) {
    throw new Error(
      `No entry '${entrySlug}' found in '${collection}' for the language '${language}'.`
    );
  }
  return entry;
}
