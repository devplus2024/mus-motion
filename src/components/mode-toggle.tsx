"use client";

import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import Moon from "./Moon";
import Sun from "./Sun";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [iconToggle, setIcon] = useState<JSX.Element | null>(null);

  // Determine the icon based on the current theme
  const determineIcon = useCallback(() => {
    if (typeof document !== "undefined") {
      const isDarkMode = document.documentElement.classList.contains("dark");
      return isDarkMode ? <Moon /> : <Sun />;
    }
    // Default fallback for server-side rendering
    return <Sun />;
  }, []); // Remove `theme` from dependency array

  // Update the icon state
  const updateIcon = useCallback(() => {
    setIcon(determineIcon());
  }, [determineIcon]);

  // Toggle the theme between dark and light
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    updateIcon(); // Update the icon immediately after changing the theme
  };

  useEffect(() => {
    // Set initial icon based on the current theme
    updateIcon();

    // Create a MutationObserver to watch for changes to the html's class list
    const observer = new MutationObserver(() => {
      updateIcon();
    });

    // Observe changes in attributes on the html element
    if (typeof document !== "undefined") {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    // Clean up the observer on component unmount
    return () => {
      if (typeof document !== "undefined") {
        observer.disconnect();
      }
    };
  }, [updateIcon]);

  // Render a loading or placeholder icon if `iconToggle` is not set yet
  if (iconToggle === null) {
    return null; // or a loading spinner if preferred
  }

  return (
    <div
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="cursor-pointer"
    >
      {iconToggle}
    </div>
  );
};

export default ModeToggle;
