"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useT } from "next-i18next/client";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import type { Locale } from "../../../i18n.config";
import { navigation } from "@/data/portfolio";
import styles from "./HeaderControls.module.css";

const THEME_KEY = "lat-portfolio-theme";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
}

export function HeaderControls() {
  const { t, i18n } = useT("portfolio");
  const locale = (i18n.resolvedLanguage === "vi" ? "vi" : "en") as Locale;
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const initialTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const timeout = window.setTimeout(() => setTheme(initialTheme), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  function changeLocale(next: Locale) {
    const segments = pathname.split("/");
    segments[1] = next;
    document.cookie = `i18next=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(`${segments.join("/")}${window.location.hash}`);
  }

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <div className={styles.controls}>
      <label className={styles.localeLabel}>
        <span className="sr-only">{t("accessibility.language")}</span>
        <select
          value={locale}
          onChange={(event) => changeLocale(event.target.value as Locale)}
          aria-label={t("accessibility.language")}
        >
          <option value="en">en</option>
          <option value="vi">vi</option>
        </select>
      </label>
      <button
        className={styles.controlButton}
        type="button"
        onClick={toggleTheme}
        aria-label={t(
          theme === "dark" ? "accessibility.switchToLight" : "accessibility.switchToDark",
        )}
      >
        {theme === "dark" ? <LuSun aria-hidden="true" /> : <LuMoon aria-hidden="true" />}
      </button>
      <button
        ref={triggerRef}
        className={`${styles.controlButton} ${styles.menuTrigger}`}
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={t("accessibility.openNavigation")}
        aria-haspopup="dialog"
      >
        <LuMenu aria-hidden="true" />
      </button>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClose={() => triggerRef.current?.focus()}
        onClick={(event) => event.target === dialogRef.current && closeMenu()}
      >
        <div className={styles.dialogPanel}>
          <div className={styles.dialogHead}>
            <span>LE ANH TUAN / INDEX</span>
            <button
              type="button"
              onClick={closeMenu}
              aria-label={t("accessibility.closeNavigation")}
            >
              <LuX aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={t("accessibility.mobileNavigation")}>
            <ol>
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{t(`navigation.${item.id}`)}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </dialog>
    </div>
  );
}
