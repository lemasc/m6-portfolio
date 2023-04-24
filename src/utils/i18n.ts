import { getCollection, getEntryBySlug } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { collections, projectSchema } from "@/content/config";
import { astroI18n } from "astro-i18n";

export type I18nEntry<E> = E extends `${infer Lang}/${infer Entry}`
  ? Lang extends LangCode
    ? Entry
    : never
  : never;

type EntryMapKeys = keyof typeof collections;
type AllValuesOf<T> = T extends { slug: string } ? T : never;
export type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<
  CollectionEntry<C>
>["slug"];

export async function getI18nMarkdown<
  C extends EntryMapKeys,
  E extends ValidEntrySlug<C>,
  I extends I18nEntry<ValidEntrySlug<C>>
>(collection: C, entrySlug: I): Promise<CollectionEntry<C>> {
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

export async function getI18nMarkdownEntries<
  C extends EntryMapKeys,
  E extends CollectionEntry<C>
>(collection: C): Promise<E[]> {
  const language = astroI18n.langCode;
  const entries = await getCollection<C, E>(
    collection,
    // @ts-expect-error Every entry contains a slug to validate
    (entry: { slug: string; data: Zod.TypeOf<typeof projectSchema> }) => {
      const lang = entry.slug.split("/")[0];
      return lang === language && entry.data.draft !== true;
    }
  );
  return entries;
}
