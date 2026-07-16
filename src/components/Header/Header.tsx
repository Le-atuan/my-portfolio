import { getT } from "next-i18next/server";
import { HeaderControls } from "@/components/HeaderControls/HeaderControls";
import { navigation } from "@/data/portfolio";
import styles from "./Header.module.css";

export async function Header() {
  const { t } = await getT("portfolio");

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label={t("accessibility.home")}>
          <span>LT</span>
          <span>
            <strong>Le Anh Tuan</strong>
            <small>{t("common.role")}</small>
          </span>
        </a>
        <nav className={styles.nav} aria-label={t("accessibility.primaryNavigation")}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {t(`navigation.${item.id}`)}
            </a>
          ))}
        </nav>
        <HeaderControls />
      </div>
    </header>
  );
}
