import styles from "./SectionLabel.module.css";

export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className={styles.label}>
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}
