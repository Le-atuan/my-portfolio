import { LocalizedText } from "@/components/LocalizedText/LocalizedText";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { experiences } from "@/data/portfolio";
import styles from "./ExperienceSection.module.css";

export function ExperienceSection() {
  return (
    <section className={styles.section} id="experience" aria-labelledby="experience-title">
      <div className="shell">
        <SectionLabel number="03" en="Experience" vi="Kinh nghiệm" />
        <div className={styles.grid}>
          <div className={styles.sticky}>
            <h2 id="experience-title">
              <span data-copy="en">Building, learning, shipping.</span>
              <span data-copy="vi">Xây dựng, học hỏi, triển khai.</span>
            </h2>
            <p>
              <span data-copy="en">
                From internship recognition to measurable improvements in production.
              </span>
              <span data-copy="vi">
                Từ thành tích thực tập đến cải tiến đo lường được trong sản phẩm thực tế.
              </span>
            </p>
          </div>
          <div className={styles.timeline}>
            {experiences.map((item, index) => (
              <article key={item.id}>
                <div>
                  <span>0{index + 1}</span>
                  <time>
                    <LocalizedText text={item.period} />
                  </time>
                </div>
                <h3>
                  <LocalizedText text={item.role} />
                </h3>
                <p className={styles.company}>{item.company}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight.en}>
                      <LocalizedText text={highlight} />
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
