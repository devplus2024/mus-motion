"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
const LogoImage = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const baseSrc = isDarkMode ? "dark.svg" : "light.svg";
  const [src, setSrc] = useState(baseSrc);
  const pathname = usePathname();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSrc = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const baseSrc = isDarkMode ? "dark.svg" : "light.svg";
    const newSrc = pathname === "/chat/vn-vi" ? `../${baseSrc}` : baseSrc;
    setSrc(newSrc);
  };

  useEffect(() => {
    // Initial check
    updateSrc();

    // Create a MutationObserver to watch for changes to the html's class list
    const observer = new MutationObserver(() => {
      updateSrc();
    });

    // Observe changes in attributes on the html element
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, [pathname, updateSrc]); // Include updateSrc in the dependency array

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
