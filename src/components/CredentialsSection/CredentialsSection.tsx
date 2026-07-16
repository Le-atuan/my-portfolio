import { getT } from "next-i18next/server";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { credentials, skillGroups } from "@/data/portfolio";
import styles from "./CredentialsSection.module.css";

export async function CredentialsSection() {
  const { t } = await getT("portfolio");

  return (
    <section
      className={`${styles.section} shell`}
      id="credentials"
      aria-labelledby="credentials-title"
    >
      <SectionLabel number="04">{t("credentials.label")}</SectionLabel>
      <div className={styles.heading}>
        <h2 id="credentials-title">{t("credentials.title")}</h2>
        <p>{t("credentials.intro")}</p>
      </div>
      <div className={styles.skills}>
        {skillGroups.map((group, index) => (
          <article key={group.id}>
            <span>0{index + 1}</span>
            <h3>{t(`credentials.skills.${group.id}`)}</h3>
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
          <article key={item.id}>
            <h3>{t(`credentials.items.${item.id}.title`)}</h3>
            <p>{t(`credentials.items.${item.id}.detail`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
