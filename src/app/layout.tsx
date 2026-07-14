import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import type { Metadata, Viewport } from "next";
import { DM_Sans, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { theme } from "@/theme";

const sans = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-display", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin", "vietnamese"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://leanhtuan.dev"),
  title: "Le Anh Tuan — Frontend Developer",
  description: "Frontend developer specializing in React, Next.js, performance, and thoughtful digital experiences.",
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
    { media: "(prefers-color-scheme: light)", color: "#f3efe5" },
    { media: "(prefers-color-scheme: dark)", color: "#071c2c" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-locale="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={`${sans.variable} ${display.variable} ${mono.variable}`}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
