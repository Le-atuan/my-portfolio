import { HeaderControls } from "@/components/HeaderControls/HeaderControls";
import { LocalizedText } from "@/components/LocalizedText/LocalizedText";
import { navigation } from "@/data/portfolio";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label="Le Anh Tuan — Home">
          <span>LT</span>
          <span>
            <strong>Le Anh Tuan</strong>
            <small>Frontend Developer</small>
          </span>
        </a>
        <nav className={styles.nav} aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              <LocalizedText text={item.label} />
            </a>
          ))}
        </nav>
        <HeaderControls />
      </div>
    </header>
  );
}
