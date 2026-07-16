import Image from "next/image";
import { portrait } from "@/data/portrait";
import styles from "./HeroSection.module.css";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className={`shell ${styles.hero}`} id="top" aria-labelledby="hero-title">
      <div className={`${styles.copy} ${styles.motionIn}`}>
        <p className={styles.availability}>
          <i />
          <span data-copy="en">Available for select opportunities</span>
          <span data-copy="vi">Sẵn sàng cho cơ hội phù hợp</span>
        </p>
        <h1 id="hero-title">
          <span data-copy="en">Frontend Developer.</span>
          <span data-copy="vi">Lập trình viên Frontend.</span>
        </h1>
        <p className={styles.lead}>
          <span data-copy="en">
            Building clear, fast, scalable products with React and Next.js.
          </span>
          <span data-copy="vi">
            Xây dựng sản phẩm rõ ràng, nhanh và dễ mở rộng với React và Next.js.
          </span>
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#work">
            <span data-copy="en">Explore selected work</span>
            <span data-copy="vi">Xem dự án tiêu biểu</span>
            <ArrowIcon />
          </a>
          <a className={styles.secondary} href="/le-anh-tuan-cv.pdf" download>
            <span data-copy="en">Download CV</span>
            <span data-copy="vi">Tải CV</span>
          </a>
        </div>
        <dl className={styles.meta}>
          <div>
            <dt>BASED IN</dt>
            <dd>Ha Noi, Vietnam</dd>
          </div>
          <div>
            <dt>FOCUS</dt>
            <dd>React · Next.js · Performance</dd>
          </div>
        </dl>
      </div>
      <div className={`${styles.portraitCard} ${styles.motionIn} ${styles.delay}`}>
        <div className={styles.frameLabel}>
          <span>PORTRAIT / 2026</span>
          <span>01</span>
        </div>
        <div className={styles.portraitCanvas}>
          {portrait.image ? (
            <>
              <span className={styles.imageWrap} data-copy="en">
                <Image
                  src={portrait.image}
                  alt={portrait.alt.en}
                  fill
                  sizes="(max-width: 767px) 92vw, 38vw"
                  className={styles.image}
                />
              </span>
              <span className={styles.imageWrap} data-copy="vi">
                <Image
                  src={portrait.image}
                  alt={portrait.alt.vi}
                  fill
                  sizes="(max-width: 767px) 92vw, 38vw"
                  className={styles.image}
                />
              </span>
            </>
          ) : (
            <div className={styles.placeholder} aria-hidden="true">
              <span>LAT</span>
              <i />
              <i />
            </div>
          )}
        </div>
        <p>
          <span data-copy="en">Frontend developer · Ha Noi</span>
          <span data-copy="vi">Lập trình viên Frontend · Hà Nội</span>
        </p>
      </div>
    </section>
  );
}
