import { ContactForm } from "@/components/ContactForm/ContactForm";
import { LocalizedText } from "@/components/LocalizedText/LocalizedText";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { contact } from "@/data/portfolio";
import styles from "./ContactSection.module.css";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section
      className={`${styles.section} dark-section`}
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="shell">
        <SectionLabel number="05" en="Start a conversation" vi="Bắt đầu trao đổi" />
        <div className={styles.grid}>
          <div className={styles.details}>
            <h2 id="contact-title">
              <span data-copy="en">Have a useful product to build?</span>
              <span data-copy="vi">Bạn có một sản phẩm hữu ích cần xây dựng?</span>
            </h2>
            <a className={styles.email} href={`mailto:${contact.email}`}>
              {contact.email}
              <ArrowIcon />
            </a>
            <address>
              <a href={`tel:${contact.phone}`}>
                <small>PHONE</small>
                {contact.displayPhone}
              </a>
              <div>
                <small>LOCATION</small>
                <LocalizedText text={contact.location} />
              </div>
              <a href="/le-anh-tuan-cv.pdf" download>
                <small>DOCUMENT</small>
                <span data-copy="en">Download CV</span>
                <span data-copy="vi">Tải CV</span>
              </a>
            </address>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
