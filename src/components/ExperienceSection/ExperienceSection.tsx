import { getT } from "next-i18next/server";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { experiences } from "@/data/portfolio";
import styles from "./ExperienceSection.module.css";

export async function ExperienceSection() {
  const { t } = await getT("portfolio");

  return (
    <section className={styles.section} id="experience" aria-labelledby="experience-title">
      <div className="shell">
        <SectionLabel number="03">{t("experience.label")}</SectionLabel>
        <div className={styles.grid}>
          <div className={styles.sticky}>
            <h2 id="experience-title">{t("experience.title")}</h2>
            <p>{t("experience.intro")}</p>
          </div>
          <div className={styles.timeline}>
            {experiences.map((item, index) => {
              const highlights = t(`experience.items.${item.id}.highlights`, {
                returnObjects: true,
              }) as string[];

              return (
                <article key={item.id}>
                  <div>
                    <span>0{index + 1}</span>
                    <time>{t(`experience.items.${item.id}.period`)}</time>
                  </div>
                  <h3>{t(`experience.items.${item.id}.role`)}</h3>
                  <p className={styles.company}>{item.company}</p>
                  <ul>
                    {highlights.slice(0, item.highlightCount).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
