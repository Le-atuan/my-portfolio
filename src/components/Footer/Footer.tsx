import { getT } from "next-i18next/server";
import { navigation } from "@/data/portfolio";
import styles from "./Footer.module.css";

export async function Footer() {
  const { t } = await getT("portfolio");

  return (
    <footer className={`${styles.footer} shell`}>
      <div className={styles.top}>
        <a className={styles.brand} href="#top">
          <strong>Le Anh Tuan</strong>
          <span>{t("common.role")}</span>
        </a>
        <nav aria-label={t("accessibility.footerNavigation")}>
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {t(`navigation.${item.id}`)}
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
