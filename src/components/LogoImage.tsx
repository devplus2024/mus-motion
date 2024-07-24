import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you are using react-router for routing

const LogoImage = () => {
  const [src, setSrc] = useState('light.svg');
  const location = useLocation();

  const updateSrc = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const baseSrc = isDarkMode ? 'dark.svg' : 'light.svg';
    const newSrc = location.pathname === '/chat/vi-vn' ? `../${baseSrc}` : baseSrc;
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
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, [location.pathname]); // Re-run the effect when the pathname changes

  return (
    <Image
      width={"30"}
      height={"30"}
      className="w-[30px] h-[30px]"
      alt="Logo"
      src={src}
    />
  );
};

export default LogoImage;

