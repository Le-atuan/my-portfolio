"use client";

import {
  ActionIcon,
  Burger,
  Button,
  Drawer,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { navigation } from "@/data/portfolio";
import type { Locale } from "@/types/portfolio";
import styles from "./header-controls.module.css";

const STORAGE_KEY = "lat-portfolio-locale";

function applyLocale(locale: Locale) {
  document.documentElement.dataset.locale = locale;
  document.documentElement.lang = locale;
}

export function HeaderControls() {
  const [opened, { open, close }] = useDisclosure(false);
  const [locale, setLocale] = useState<Locale>("en");
  const computedColorScheme = useComputedColorScheme("light");
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initialLocale: Locale = stored === "vi" ? "vi" : "en";
    applyLocale(initialLocale);
    const timeout = window.setTimeout(() => setLocale(initialLocale), 0);

    return () => window.clearTimeout(timeout);
  }, []);

  function toggleLocale() {
    const nextLocale: Locale = locale === "en" ? "vi" : "en";
    setLocale(nextLocale);
    applyLocale(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  }

  return (
    <>
      <Group gap="xs" wrap="nowrap">
        <Button
          className={styles.localeButton}
          variant="subtle"
          onClick={toggleLocale}
          aria-label={locale === "en" ? "Chuyển sang tiếng Việt" : "Switch to English"}
        >
          {locale === "en" ? "VI" : "EN"}
        </Button>
        <ActionIcon
          className={styles.themeButton}
          variant="subtle"
          size="lg"
          aria-label={computedColorScheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          onClick={() => setColorScheme(computedColorScheme === "dark" ? "light" : "dark")}
        >
          <span aria-hidden="true">◐</span>
        </ActionIcon>
        <Burger opened={opened} onClick={open} aria-label="Open navigation" className={styles.burger} />
      </Group>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="100%"
        title="LE ANH TUAN / INDEX"
        classNames={{ content: styles.drawer, header: styles.drawerHeader, body: styles.drawerBody }}
      >
        <nav aria-label="Mobile navigation">
          <ol className={styles.mobileNav}>
            {navigation.map((item, index) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span data-copy="en">{item.label.en}</span>
                  <span data-copy="vi">{item.label.vi}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Drawer>
    </>
  );
}
