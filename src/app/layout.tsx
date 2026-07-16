import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";

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

const bootstrap = `(() => {
  try {
    const root = document.documentElement;
    const locale = localStorage.getItem('lat-portfolio-locale') === 'vi' ? 'vi' : 'en';
    const storedTheme = localStorage.getItem('lat-portfolio-theme');
    const theme = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.dataset.locale = locale;
    root.lang = locale;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
  } catch {}
})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://leanhtuan.dev"),
  title: "Le Anh Tuan — Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, performance, and thoughtful digital experiences.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Le Anh Tuan — Frontend Developer",
    description: "React and Next.js engineer building fast, scalable, and usable digital products.",
    type: "profile",
    locale: "en_US",
    alternateLocale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Anh Tuan — Frontend Developer",
    description: "React and Next.js engineer building fast, scalable, and usable digital products.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-locale="en"
      suppressHydrationWarning
      className={`${heading.variable} ${body.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
