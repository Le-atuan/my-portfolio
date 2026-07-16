import { getT } from "next-i18next/server";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { metrics } from "@/data/portfolio";
import styles from "./AboutSection.module.css";

const principles = [
  { id: "clarity", number: "01" },
  { id: "performance", number: "02" },
  { id: "evolve", number: "03" },
] as const;

export async function AboutSection() {
  const { t } = await getT("portfolio");

  return (
    <section className={`${styles.section} shell`} id="about" aria-labelledby="about-title">
      <SectionLabel number="02">{t("about.label")}</SectionLabel>
      <div className={styles.grid}>
        <div>
          <h2 id="about-title">{t("about.title")}</h2>
          <p className={styles.copy}>{t("about.copy")}</p>
        </div>
        <div className={styles.metrics}>
          {metrics.map((metric) => (
            <div key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{t(`about.metrics.${metric.id}`)}</span>
            </div>
          ))}
        </div>
      </div>
      <h3 className={styles.subheading}>{t("about.subheading")}</h3>
      <div className={styles.principles}>
        {principles.map((item) => (
          <article key={item.id}>
            <span>{item.number}</span>
            <h4>{t(`about.principles.${item.id}.title`)}</h4>
            <p>{t(`about.principles.${item.id}.body`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
