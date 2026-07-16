import type { StaticImageData } from "next/image";

export interface NavigationItem {
  id: "about" | "experience" | "work" | "credentials" | "contact";
  href: `#${string}`;
}

export interface Metric {
  id: "performance" | "toeic" | "production" | "b2b";
  value: string;
}

export interface Experience {
  id: "cvv" | "fpt";
  company: string;
  highlightCount: number;
}

export interface Project {
  id: "performance" | "4health";
  title: string;
  technologies: readonly string[];
  href?: string;
}

export interface SkillGroup {
  id: "interface" | "delivery" | "collaboration";
  skills: readonly string[];
}

export interface Credential {
  id: "degree" | "ux" | "webDesign" | "volunteer";
}

export interface Contact {
  email: string;
  phone: string;
  displayPhone: string;
}

export interface PortraitConfig {
  image: StaticImageData | null;
}
