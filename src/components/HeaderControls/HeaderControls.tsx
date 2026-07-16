"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/portfolio";
import type { Locale } from "@/types/portfolio";
import styles from "./HeaderControls.module.css";

const LOCALE_KEY = "lat-portfolio-locale";
const THEME_KEY = "lat-portfolio-theme";

function applyLocale(locale: Locale) {
  document.documentElement.dataset.locale = locale;
  document.documentElement.lang = locale;
}

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
}

export function HeaderControls() {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const initialLocale: Locale = document.documentElement.dataset.locale === "vi" ? "vi" : "en";
    const initialTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const timeout = window.setTimeout(() => {
      setLocale(initialLocale);
      setTheme(initialTheme);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  function changeLocale(next: Locale) {
    setLocale(next);
    applyLocale(next);
    localStorage.setItem(LOCALE_KEY, next);
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
        <span className="sr-only">Language</span>
        <select
          value={locale}
          onChange={(event) => changeLocale(event.target.value as Locale)}
          aria-label={locale === "en" ? "Language" : "Ngôn ngữ"}
        >
          <option value="en">en</option>
          <option value="vi">vi</option>
        </select>
      </label>
      <button
        className={styles.controlButton}
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
      <button
        ref={triggerRef}
        className={`${styles.controlButton} ${styles.menuTrigger}`}
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label="Open navigation"
        aria-haspopup="dialog"
      >
        <MenuIcon />
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
            <button type="button" onClick={closeMenu} aria-label="Close navigation">
              <CloseIcon />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            <ol>
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span data-copy="en">{item.label.en}</span>
                    <span data-copy="vi">{item.label.vi}</span>
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

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.4 15.5A8.5 8.5 0 0 1 8.5 3.6 8.5 8.5 0 1 0 20.4 15.5Z" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  );
}
