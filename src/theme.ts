import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "cyanSignal",
  primaryShade: { light: 7, dark: 4 },
  defaultRadius: 0,
  cursorType: "pointer",
  fontFamily: "var(--font-sans), sans-serif",
  fontFamilyMonospace: "var(--font-mono), monospace",
  headings: {
    fontFamily: "var(--font-display), sans-serif",
    fontWeight: "700",
  },
  colors: {
    cyanSignal: [
      "#e1ffff",
      "#c5faf9",
      "#91f3f1",
      "#59ece9",
      "#2de6e2",
      "#18dcd8",
      "#00b8b6",
      "#009492",
      "#007271",
      "#005354",
    ],
  },
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(20),
    lg: rem(32),
    xl: rem(48),
  },
});
