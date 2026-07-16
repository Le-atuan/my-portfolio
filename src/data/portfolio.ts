import type {
  Contact,
  Credential,
  Experience,
  Metric,
  NavigationItem,
  Project,
  SkillGroup,
} from "@/types/portfolio";

export const navigation: readonly NavigationItem[] = [
  { id: "about", href: "#about" },
  { id: "experience", href: "#experience" },
  { id: "work", href: "#work" },
  { id: "credentials", href: "#credentials" },
  { id: "contact", href: "#contact" },
] as const;

export const metrics: readonly Metric[] = [
  { id: "performance", value: "10–20%" },
  { id: "toeic", value: "900" },
  { id: "production", value: "2024" },
  { id: "b2b", value: "B2B" },
] as const;

export const experiences: readonly Experience[] = [
  { id: "cvv", company: "Computer Vision Vietnam JSC", highlightCount: 3 },
  { id: "fpt", company: "FPT Software", highlightCount: 2 },
] as const;

export const projects: readonly Project[] = [
  {
    id: "performance",
    title: "A faster B2B experience",
    technologies: ["Next.js", "React", "REST APIs", "Performance"],
  },
  {
    id: "4health",
    title: "4Health Clinic Booking",
    technologies: ["Blazor", "WebAssembly", "PWA", "SQL", "Figma"],
    href: "https://github.com/datnht2602/Booking-Clinic.git",
  },
] as const;

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "interface",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    id: "delivery",
    skills: ["Redux", "React Query", "REST APIs", "Responsive Design", "Web Performance"],
  },
  {
    id: "collaboration",
    skills: ["Git", "Figma", "Agile / Scrum", "Jira", "Trello"],
  },
] as const;

export const credentials: readonly Credential[] = [
  { id: "degree" },
  { id: "ux" },
  { id: "webDesign" },
  { id: "volunteer" },
] as const;

export const contact: Contact = {
  email: "tuanlea22@gmail.com",
  phone: "+84948796341",
  displayPhone: "+84 948 796 341",
};
