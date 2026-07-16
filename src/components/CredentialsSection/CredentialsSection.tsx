import { LocalizedText } from "@/components/LocalizedText/LocalizedText";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { credentials, skillGroups } from "@/data/portfolio";
import styles from "./CredentialsSection.module.css";

export function CredentialsSection() {
  return (
    <section
      className={`${styles.section} shell`}
      id="credentials"
      aria-labelledby="credentials-title"
    >
      <SectionLabel number="04" en="Capabilities & credentials" vi="Năng lực & hồ sơ" />
      <div className={styles.heading}>
        <h2 id="credentials-title">
          <span data-copy="en">A practical toolkit for digital products.</span>
          <span data-copy="vi">Bộ công cụ thực tế cho sản phẩm số.</span>
        </h2>
        <p>
          <span data-copy="en">
            Technology is the means. A clear, fast, maintainable product is the outcome.
          </span>
          <span data-copy="vi">
            Công nghệ là phương tiện. Sản phẩm rõ ràng, nhanh và dễ bảo trì là kết quả.
          </span>
        </p>
      </div>
      <div className={styles.skills}>
        {skillGroups.map((group, index) => (
          <article key={group.title.en}>
            <span>0{index + 1}</span>
            <h3>
              <LocalizedText text={group.title} />
            </h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className={styles.list}>
        {credentials.map((item) => (
          <article key={item.title.en}>
            <h3>
              <LocalizedText text={item.title} />
            </h3>
            <p>
              <LocalizedText text={item.detail} />
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
