import { getT } from "next-i18next/server";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { contact } from "@/data/portfolio";
import styles from "./ContactSection.module.css";

export async function ContactSection() {
  const { t } = await getT("portfolio");

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className="shell">
        <SectionLabel number="05">{t("contact.label")}</SectionLabel>
        <div className={styles.grid}>
          <div className={styles.details}>
            <h2 id="contact-title">{t("contact.title")}</h2>
            <a className={styles.email} href={`mailto:${contact.email}`}>
              {contact.email}
              <LuArrowRight aria-hidden="true" />
            </a>
            <address>
              <a href={`tel:${contact.phone}`}>
                <small>{t("contact.phone")}</small>
                {contact.displayPhone}
              </a>
              <div>
                <small>{t("contact.location")}</small>
                {t("contact.locationValue")}
              </div>
              <a href="/le-anh-tuan-cv.pdf" download>
                <small>{t("contact.document")}</small>
                <span>
                  {t("contact.downloadCv")} <LuDownload aria-hidden="true" />
                </span>
              </a>
            </address>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
