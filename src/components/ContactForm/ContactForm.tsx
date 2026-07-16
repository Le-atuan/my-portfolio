import { getT } from "next-i18next/server";
import styles from "./ContactForm.module.css";

const fields = [
  {
    id: "fullName",
    type: "text",
    autoComplete: "name",
    inputMode: undefined,
    helper: true,
  },
  {
    id: "email",
    type: "email",
    autoComplete: "email",
    inputMode: undefined,
    helper: false,
  },
  {
    id: "phone",
    type: "tel",
    autoComplete: "tel",
    inputMode: "tel" as const,
    helper: false,
  },
] as const;

export async function ContactForm() {
  const { t } = await getT("portfolio");

  return (
    <div className={styles.card}>
      <div className={styles.notice} role="note">
        <strong>{t("contact.form.noticeTitle")}</strong>
        <p>{t("contact.form.noticeBody")}</p>
      </div>
      <form className={styles.form} aria-label={t("accessibility.contactForm")}>
        <div className={styles.fields}>
          {fields.map((field) => (
            <div className={styles.field} key={field.id}>
              <label htmlFor={field.id}>
                {t(`contact.form.${field.id}`)}
                <span aria-hidden="true"> *</span>
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                aria-describedby={field.helper ? `${field.id}-help` : undefined}
              />
              {field.helper && (
                <small id={`${field.id}-help`}>{t("contact.form.fullNameHelper")}</small>
              )}
            </div>
          ))}
          <div className={`${styles.field} ${styles.reason}`}>
            <label htmlFor="reason">
              {t("contact.form.reason")}
              <span aria-hidden="true"> *</span>
            </label>
            <textarea id="reason" name="reason" required rows={6} />
          </div>
        </div>
        <button type="submit" disabled>
          {t("contact.form.submit")}
        </button>
      </form>
    </div>
  );
}
