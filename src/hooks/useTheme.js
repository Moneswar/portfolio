import { useState, useEffect } from "react";

/**
 * useTheme
 * Custom hook to manage theme state (dark | light) with localStorage persistence
 * and document root class synchronization. Defaults to "dark".
 */
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio_theme") || localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
    } catch {
      // Ignore localStorage access errors if any
    }
    return "dark";
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === "light") {
        root.classList.remove("dark");
        root.classList.add("light");
        root.setAttribute("data-theme", "light");
        root.style.colorScheme = "light";
      } else {
        root.classList.remove("light");
        root.classList.add("dark");
        root.setAttribute("data-theme", "dark");
        root.style.colorScheme = "dark";
      }
      localStorage.setItem("portfolio_theme", theme);
      localStorage.setItem("theme", theme);
    } catch {
      // Ignore localStorage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
};

export default useTheme;
