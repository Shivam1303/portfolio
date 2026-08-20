"use client";
import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const ThemeContext = createContext<{ resolvedTheme: Theme; toggleTheme: () => void }>({ resolvedTheme: "light", toggleTheme: () => undefined });
const themeChangeEvent = "portfolio-theme-change";

function readTheme(): Theme {
  const saved = window.localStorage.getItem("portfolio-theme") as Theme | null;
  return saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function subscribeToTheme(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(themeChangeEvent, onStoreChange);
  media.addEventListener("change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(themeChangeEvent, onStoreChange);
    media.removeEventListener("change", onStoreChange);
  };
}

function getServerTheme(): Theme {
  return "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, readTheme, getServerTheme);
  useEffect(() => { document.documentElement.dataset.theme = theme; document.documentElement.style.colorScheme = theme; }, [theme]);
  const value = useMemo(() => ({ resolvedTheme: theme, toggleTheme: () => { const next = theme === "dark" ? "light" : "dark"; window.localStorage.setItem("portfolio-theme", next); window.dispatchEvent(new Event(themeChangeEvent)); } }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
