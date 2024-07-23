import Image from "next/image";
import React, { useEffect, useState } from "react";

const LogoImage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the body has the class 'dark'
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains("dark"));
    };

    // Initial check
    checkDarkMode();

    // Optional: Add an event listener to check for changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true });

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <Image
      className="w-[30px] h-[30px]"
      alt="Logo"
      src={isDarkMode ? "dark.svg" : "light.svg"}
    />
  );
};

export default LogoImage;
