import { getT } from "next-i18next/server";
import { LuArrowUpRight } from "react-icons/lu";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { projects } from "@/data/portfolio";
import styles from "./WorkSection.module.css";

export async function WorkSection() {
  const { t } = await getT("portfolio");

  return (
    <section className={styles.section} id="work" aria-labelledby="work-title">
      <div className="shell">
        <SectionLabel number="01">{t("work.label")}</SectionLabel>
        <div className={styles.heading}>
          <h2 id="work-title">{t("work.title")}</h2>
          <p>{t("work.intro")}</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article className={styles.card} key={project.id}>
              <div
                className={`${styles.art} ${index === 1 ? styles.artAlt : ""}`}
                aria-hidden="true"
              >
                <span>0{index + 1}</span>
                {index === 0 ? (
                  <div className={styles.bars}>
                    <i />
                    <i />
                    <i />
                    <i />
                    <b>+10–20%</b>
                  </div>
                ) : (
                  <div className={styles.booking}>
                    <i />
                    <i />
                    <i />
                    <b>4H</b>
                  </div>
                )}
              </div>
              <div className={styles.content}>
                <p className={styles.eyebrow}>{t(`work.projects.${project.id}.eyebrow`)}</p>
                <h3>{project.title}</h3>
                <p>{t(`work.projects.${project.id}.summary`)}</p>
                <blockquote>{t(`work.projects.${project.id}.impact`)}</blockquote>
                <ul>
                  {project.technologies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={styles.action}>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {t("work.openRepository")}
                      <LuArrowUpRight aria-hidden="true" />
                    </a>
                  ) : (
                    <span className={styles.private}>{t("work.privateCaseStudy")}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
