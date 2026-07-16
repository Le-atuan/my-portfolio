import { LocalizedText } from "@/components/LocalizedText/LocalizedText";
import styles from "./SectionLabel.module.css";

export function SectionLabel({ number, en, vi }: { number: string; en: string; vi: string }) {
  return (
    <div className={styles.label}>
      <span>{number}</span>
      <LocalizedText text={{ en, vi }} />
    </div>
  );
}
