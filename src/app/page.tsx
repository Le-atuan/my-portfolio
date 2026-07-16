import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { CredentialsSection } from "@/components/CredentialsSection/CredentialsSection";
import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { WorkSection } from "@/components/WorkSection/WorkSection";
import { contact } from "@/data/portfolio";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Le Anh Tuan",
  jobTitle: "Frontend Developer",
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  address: { "@type": "PostalAddress", addressLocality: "Ha Noi", addressCountry: "VN" },
  knowsAbout: ["React", "Next.js", "TypeScript", "Web Performance", "Responsive Design"],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        <span data-copy="en">Skip to content</span>
        <span data-copy="vi">Đi đến nội dung chính</span>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
