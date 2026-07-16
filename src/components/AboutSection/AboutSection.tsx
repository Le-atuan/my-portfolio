import { LocalizedText } from "@/components/LocalizedText/LocalizedText";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { metrics } from "@/data/portfolio";
import styles from "./AboutSection.module.css";

const principles = [
  {
    n: "01",
    en: "Clarity first",
    vi: "Rõ ràng trước tiên",
    bodyEn: "Reduce friction before adding decoration.",
    bodyVi: "Giảm ma sát trước khi thêm trang trí.",
  },
  {
    n: "02",
    en: "Performance is UX",
    vi: "Hiệu năng là UX",
    bodyEn: "Fast experiences earn trust immediately.",
    bodyVi: "Trải nghiệm nhanh tạo niềm tin tức thì.",
  },
  {
    n: "03",
    en: "Built to evolve",
    vi: "Sẵn sàng phát triển",
    bodyEn: "Scalable decisions over short-lived fixes.",
    bodyVi: "Quyết định bền vững hơn bản vá ngắn hạn.",
  },
];
export function AboutSection() {
  return (
    <section className={`${styles.section} shell`} id="about" aria-labelledby="about-title">
      <SectionLabel number="02" en="About & approach" vi="Giới thiệu & cách làm" />
      <div className={styles.grid}>
        <div>
          <h2 id="about-title">
            <span data-copy="en">Simple on the surface. Deliberate underneath.</span>
            <span data-copy="vi">Đơn giản ở bề mặt. Có chủ đích ở bên trong.</span>
          </h2>
          <p className={styles.copy}>
            <span data-copy="en">
              I build production interfaces where usability, performance, and maintainability
              reinforce each other. I am growing toward full-stack engineering to own more of the
              product journey.
            </span>
            <span data-copy="vi">
              Tôi xây dựng giao diện thực tế nơi tính dễ dùng, hiệu năng và khả năng bảo trì hỗ trợ
              lẫn nhau. Tôi đang phát triển theo hướng Fullstack để làm chủ nhiều hơn hành trình sản
              phẩm.
            </span>
          </p>
        </div>
        <div className={styles.metrics}>
          {metrics.map((metric) => (
            <div key={metric.value}>
              <strong>{metric.value}</strong>
              <span>
                <LocalizedText text={metric.label} />
              </span>
            </div>
          ))}
        </div>
      </div>
      <h3 className={styles.subheading}>
        <span data-copy="en">What I bring</span>
        <span data-copy="vi">Giá trị tôi mang lại</span>
      </h3>
      <div className={styles.principles}>
        {principles.map((item) => (
          <article key={item.n}>
            <span>{item.n}</span>
            <h4>
              <LocalizedText text={{ en: item.en, vi: item.vi }} />
            </h4>
            <p>
              <LocalizedText text={{ en: item.bodyEn, vi: item.bodyVi }} />
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
