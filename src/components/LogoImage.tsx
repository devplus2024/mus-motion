"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const LogoImage = () => {
  const [src, setSrc] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const updateSrc = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      const baseSrc = isDarkMode ? "dark.svg" : "light.svg";
      const newSrc = pathname === "/chat/vn-vi" ? `../${baseSrc}` : baseSrc;
      setSrc(newSrc);
    };

    // Initial check
    updateSrc();

    // Update logo source when the theme or pathname changes
    const handlePathnameChange = () => updateSrc();
    window.addEventListener("popstate", handlePathnameChange);

    // Observe theme changes
    const observer = new MutationObserver(updateSrc);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Clean up event listener and observer on component unmount
    return () => {
      window.removeEventListener("popstate", handlePathnameChange);
      observer.disconnect();
    };
  }, [pathname]); // Depend on pathname to update logo when it changes

  return (
    <Image
      className="w-[30px] h-[30px]"
      alt="Logo"
      src={src}
      width={30}
      height={30}
    />
  );
};

export default LogoImage;
