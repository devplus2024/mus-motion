"use client";
import { useEffect, useState, forwardRef } from "react";
import Moon from "./Moon";
import Sun from "./Sun";
import { useTheme } from "next-themes";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import classNames from "classnames";

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { setTheme } = useTheme();
  const [iconToggle, setIcon] = useState(<Moon />);

  const updateIcon = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIcon(isDarkMode ? <Moon /> : <Sun />);
  };

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "light" : "dark");
    updateIcon(); // Update icon when theme is toggled
  };

  useEffect(() => {
    // Initial check
    updateIcon();

    // Create a MutationObserver to watch for changes to the html's class list
    const observer = new MutationObserver(() => {
      updateIcon();
    });

    // Observe changes in attributes on the html element
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        classNames
      )}
      {...props}
      ref={ref}
      onClick={toggleTheme}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )}
      >
        {iconToggle}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
