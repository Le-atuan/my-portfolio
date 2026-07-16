import Image from "next/image";
import { getT } from "next-i18next/server";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import { portrait } from "@/data/portrait";
import styles from "./HeroSection.module.css";

export async function HeroSection() {
  const { t } = await getT("portfolio");

  return (
    <section className={`shell ${styles.hero}`} id="top" aria-labelledby="hero-title">
      <div className={`${styles.copy} ${styles.motionIn}`}>
        <p className={styles.availability}>
          <i />
          {t("hero.availability")}
        </p>
        <h1 id="hero-title">{t("hero.title")}</h1>
        <p className={styles.lead}>{t("hero.lead")}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#work">
            {t("hero.explore")}
            <LuArrowRight aria-hidden="true" />
          </a>
          <a className={styles.secondary} href="/le-anh-tuan-cv.pdf" download>
            {t("hero.downloadCv")}
            <LuDownload aria-hidden="true" />
          </a>
        </div>
        <dl className={styles.meta}>
          <div>
            <dt>{t("hero.basedInLabel")}</dt>
            <dd>{t("hero.basedIn")}</dd>
          </div>
          <div>
            <dt>{t("hero.focusLabel")}</dt>
            <dd>{t("hero.focus")}</dd>
          </div>
        </dl>
      </div>
      <div className={`${styles.portraitCard} ${styles.motionIn} ${styles.delay}`}>
        <div className={styles.frameLabel}>
          <span>{t("hero.portraitLabel")}</span>
          <span>01</span>
        </div>
        <div className={styles.portraitCanvas}>
          {portrait.image ? (
            <span className={styles.imageWrap}>
              <Image
                src={portrait.image}
                alt={t("hero.portraitAlt")}
                fill
                sizes="(max-width: 767px) 92vw, 38vw"
                className={styles.image}
              />
            </span>
          ) : (
            <div className={styles.placeholder} aria-hidden="true">
              <span>LAT</span>
              <i />
              <i />
            </div>
          )}
        </div>
        <p>{t("hero.caption")}</p>
      </div>
    </section>
  );
}
