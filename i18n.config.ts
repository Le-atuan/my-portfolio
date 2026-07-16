import type { I18nConfig } from "next-i18next/proxy";

export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const i18nConfig: I18nConfig = {
  supportedLngs: [...locales],
  fallbackLng: "en",
  defaultNS: "portfolio",
  ns: ["portfolio"],
  localeInPath: true,
  hideDefaultLocale: false,
  cookieName: "i18next",
  resourceLoader: (language, namespace) =>
    import(`./src/i18n/locales/${language}/${namespace}.json`),
};

export default i18nConfig;
