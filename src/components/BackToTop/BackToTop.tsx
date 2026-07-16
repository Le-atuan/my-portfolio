"use client";

import { useEffect, useState } from "react";
import { useT } from "next-i18next/client";
import { LuArrowUp } from "react-icons/lu";
import styles from "./BackToTop.module.css";

export function BackToTop() {
  const { t } = useT("portfolio");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0.08,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  function scrollToTop() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <button
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      type="button"
      onClick={scrollToTop}
      aria-label={t("accessibility.backToTop")}
      tabIndex={visible ? 0 : -1}
    >
      <LuArrowUp aria-hidden="true" />
    </button>
  );
}
