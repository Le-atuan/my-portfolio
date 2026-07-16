import { getT } from "next-i18next/server";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { BackToTop } from "@/components/BackToTop/BackToTop";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { CredentialsSection } from "@/components/CredentialsSection/CredentialsSection";
import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { WorkSection } from "@/components/WorkSection/WorkSection";
import { contact } from "@/data/portfolio";

export default async function Home() {
  const { t } = await getT("portfolio");
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Le Anh Tuan",
    jobTitle: t("schema.jobTitle"),
    description: t("schema.description"),
    email: `mailto:${contact.email}`,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: t("schema.addressLocality"),
      addressCountry: "VN",
    },
    knowsAbout: ["React", "Next.js", "TypeScript", "Web Performance", "Responsive Design"],
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {t("accessibility.skipToContent")}
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ExperienceSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
