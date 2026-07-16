import "../globals.css";

import type { Metadata, Viewport } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import { notFound } from "next/navigation";
import { I18nProvider } from "next-i18next/client";
import {
  generateI18nStaticParams,
  getResources,
  getT,
  initServerI18next,
} from "next-i18next/server";
import i18nConfig, { isLocale } from "../../../i18n.config";

initServerI18next(i18nConfig);

const heading = Lexend({
  subsets: ["latin", "vietnamese"],
  variable: "--font-lexend",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  display: "swap",
});

const themeBootstrap = `(() => {
  try {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem('lat-portfolio-theme');
    const theme = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
  } catch {}
})();`;

export function generateStaticParams() {
  return generateI18nStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;
  if (!isLocale(lng)) notFound();

  const { t } = await getT("portfolio", { lng });
  const canonical = `/${lng}`;

  return {
    metadataBase: new URL("https://leanhtuan.dev"),
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical,
      languages: { en: "/en", vi: "/vi" },
    },
    openGraph: {
      title: t("meta.title"),
      description: t("meta.openGraphDescription"),
      type: "profile",
      url: canonical,
      locale: lng === "vi" ? "vi_VN" : "en_US",
      alternateLocale: lng === "vi" ? ["en_US"] : ["vi_VN"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("meta.title"),
      description: t("meta.openGraphDescription"),
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#050b18" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}>) {
  const { lng } = await params;
  if (!isLocale(lng)) notFound();

  const { i18n } = await getT("portfolio", { lng });
  const resources = getResources(i18n, ["portfolio"]);

  return (
    <html lang={lng} suppressHydrationWarning className={`${heading.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <I18nProvider language={lng} resources={resources}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
