"use client";
import { useEffect, useState } from "react";
import Moon from "./Moon";
import Sun from "./Sun";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(theme === "dark" ? <Moon /> : <Sun />);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    setIcon(theme === "dark" ? <Moon /> : <Sun />);
  }, [theme]);

  return (
    <div
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="cursor-pointer"
    >
      {icon}
    </div>
  );
};

export default ModeToggle;
