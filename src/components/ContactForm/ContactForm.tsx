import { LocalizedText } from "@/components/LocalizedText/LocalizedText";
import styles from "./ContactForm.module.css";

const fields = [
  {
    id: "fullName",
    type: "text",
    autoComplete: "name",
    label: { en: "Full name", vi: "Họ và tên" },
    helper: { en: "How should I address you?", vi: "Tôi nên xưng hô với bạn như thế nào?" },
  },
  { id: "email", type: "email", autoComplete: "email", label: { en: "Email", vi: "Email" } },
  {
    id: "phone",
    type: "tel",
    autoComplete: "tel",
    inputMode: "tel" as const,
    label: { en: "Phone number", vi: "Số điện thoại" },
  },
];

export function ContactForm() {
  return (
    <div className={styles.card}>
      <div className={styles.notice} role="note">
        <strong>
          <span data-copy="en">Direct sending is not available yet.</span>
          <span data-copy="vi">Tính năng gửi trực tiếp chưa khả dụng.</span>
        </strong>
        <p>
          <span data-copy="en">Please use the email link in the contact details for now.</span>
          <span data-copy="vi">
            Hiện tại, vui lòng sử dụng liên kết email trong phần thông tin liên hệ.
          </span>
        </p>
      </div>
      <form className={styles.form} aria-label="Contact form">
        <div className={styles.fields}>
          {fields.map((field) => (
            <div className={styles.field} key={field.id}>
              <label htmlFor={field.id}>
                <LocalizedText text={field.label} />
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
                <small id={`${field.id}-help`}>
                  <LocalizedText text={field.helper} />
                </small>
              )}
            </div>
          ))}
          <div className={`${styles.field} ${styles.reason}`}>
            <label htmlFor="reason">
              <span data-copy="en">Reason for contacting</span>
              <span data-copy="vi">Lý do liên hệ</span>
              <span aria-hidden="true"> *</span>
            </label>
            <textarea id="reason" name="reason" required rows={6} />
          </div>
        </div>
        <button type="submit" disabled>
          <span data-copy="en">Direct sending coming soon</span>
          <span data-copy="vi">Tính năng gửi trực tiếp sắp có</span>
        </button>
      </form>
    </div>
  );
}
