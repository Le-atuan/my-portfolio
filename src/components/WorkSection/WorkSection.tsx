import { LocalizedText } from "@/components/LocalizedText/LocalizedText";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { projects } from "@/data/portfolio";
import styles from "./WorkSection.module.css";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function WorkSection() {
  return (
    <section className={`${styles.section} dark-section`} id="work" aria-labelledby="work-title">
      <div className="shell">
        <SectionLabel number="01" en="Selected work" vi="Dự án tiêu biểu" />
        <div className={styles.heading}>
          <h2 id="work-title">
            <span data-copy="en">Proof lives in the work.</span>
            <span data-copy="vi">Năng lực thể hiện qua sản phẩm.</span>
          </h2>
          <p>
            <span data-copy="en">
              Production and academic work, focused on the decisions and outcomes that mattered.
            </span>
            <span data-copy="vi">
              Dự án thực tế và học thuật, tập trung vào quyết định và kết quả quan trọng.
            </span>
          </p>
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
                <p className={styles.eyebrow}>
                  <LocalizedText text={project.eyebrow} />
                </p>
                <h3>{project.title}</h3>
                <p>
                  <LocalizedText text={project.summary} />
                </p>
                <blockquote>
                  <LocalizedText text={project.impact} />
                </blockquote>
                <ul>
                  {project.technologies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <span data-copy="en">Open repository</span>
                    <span data-copy="vi">Mở repository</span>
                    <ArrowIcon />
                  </a>
                ) : (
                  <span className={styles.private}>PRIVATE CASE STUDY</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
