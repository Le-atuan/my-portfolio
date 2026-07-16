import { LocalizedText } from "@/components/LocalizedText/LocalizedText";
import { navigation } from "@/data/portfolio";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={`${styles.footer} shell`}>
      <div className={styles.top}>
        <a className={styles.brand} href="#top">
          <strong>Le Anh Tuan</strong>
          <span>Frontend Developer</span>
        </a>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              <LocalizedText text={item.label} />
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Le Anh Tuan</span>
        <span className={styles.availability}>
          <i />
          <span data-copy="en">Available for select opportunities</span>
          <span data-copy="vi">Sẵn sàng cho cơ hội phù hợp</span>
        </span>
        <a href="#top">
          <span data-copy="en">Back to top</span>
          <span data-copy="vi">Về đầu trang</span> ↑
        </a>
      </div>
    </footer>
  );
}
