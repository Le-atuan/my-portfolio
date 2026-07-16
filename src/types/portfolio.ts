import type { StaticImageData } from "next/image";

export type Locale = "en" | "vi";

export type LocalizedText = Record<Locale, string>;

export interface NavigationItem {
  href: `#${string}`;
  label: LocalizedText;
}

export interface Metric {
  value: string;
  label: LocalizedText;
}

export interface Experience {
  id: string;
  role: LocalizedText;
  company: string;
  period: LocalizedText;
  highlights: LocalizedText[];
}

export interface Project {
  id: string;
  eyebrow: LocalizedText;
  title: string;
  summary: LocalizedText;
  impact: LocalizedText;
  technologies: readonly string[];
  href?: string;
}

export interface SkillGroup {
  title: LocalizedText;
  skills: readonly string[];
}

export interface Credential {
  title: LocalizedText;
  detail: LocalizedText;
}

export interface Contact {
  email: string;
  phone: string;
  displayPhone: string;
  location: LocalizedText;
}

export interface PortraitConfig {
  image: StaticImageData | null;
  alt: LocalizedText;
}
