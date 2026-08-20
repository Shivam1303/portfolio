"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  return <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}><Sun className="sun" aria-hidden="true" /><Moon className="moon" aria-hidden="true" /></button>;
}
