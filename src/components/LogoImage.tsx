import Image from "next/image";
import React, { useEffect, useState } from "react";

const LogoImage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Initial check
    checkDarkMode();

    // Create a MutationObserver to watch for changes to the body's class list
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    // Observe changes in attributes on the body element
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <Image
      className="w-[30px] h-[30px]"
      width={"30"}
      height={"30"}
      alt="Logo"
      src={isDarkMode ? "dark.svg" : "light.svg"}
    />
  );
};

export default LogoImage;
