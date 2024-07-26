import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton, Tooltip } from "@radix-ui/themes";
import Head from "next/head";

export const ThemeToggle = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof IconButton>) => {
  const { theme, systemTheme, setTheme } = useTheme();

  return (
    <>
      <div
        className="radix-themes-custom-fonts flex items-center"
        content="Toggle theme"
      >
        <IconButton
          className=""
          size="3"
          variant="ghost"
          color="gray"
          onClick={() => {
            // Set 'system' theme if the next theme matches the system theme
            const resolvedTheme = theme === "system" ? systemTheme : theme;
            const newTheme = resolvedTheme === "dark" ? "light" : "dark";
            const newThemeMatchesSystem = newTheme === systemTheme;
            setTheme(newThemeMatchesSystem ? "system" : newTheme);
          }}
          {...props}
        >
          <SunIcon
            width="21"
            height="21"
            style={{ display: "var(--theme-toggle-sun-icon-display)" }}
          />
          <MoonIcon
            width="21"
            height="21"
            style={{ display: "var(--theme-toggle-moon-icon-display)" }}
          />
        </IconButton>
      </div>
    </>
  );
};
