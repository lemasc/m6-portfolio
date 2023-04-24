type DefaultLangCode = "th"
type SupportedLangCode = "en"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/about" | "/projects/[slug]" | "/" | "/home" | "/projects/[slug]" | "/projects" | "/" 
type RouteParams = {"/about": undefined; "/projects/[slug]": { "slug": string; }; "/": undefined; "/home": undefined; "/projects/[slug]": { "slug": string; }; "/projects": undefined; "/": undefined; }
type TranslationPath = "nav.home" | "nav.projects" | "tags.student-council" | "tags.website" | "tags.year" | "index.about.title" | "index.home.title" | "index.projects.title" | "index.projects.description" | "index.title"
type TranslationOptions = { "nav.home": {} | undefined; "nav.projects": {} | undefined; "tags.student-council": {} | undefined; "tags.website": {} | undefined; "tags.year": { year: string; }; "index.about.title": {} | undefined; "index.home.title": {} | undefined; "index.projects.title": {} | undefined; "index.projects.description": {} | undefined; "index.title": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: keyof RouteParams extends Uri
			? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
