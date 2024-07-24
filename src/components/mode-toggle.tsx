'use client'
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; // Đảm bảo bạn đã nhập các biểu tượng này
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
const ModeToggle = () => {
  const { setTheme } = useTheme();
  const [icontoggle, setIcon] = useState(<Sun size={16} />);

  const updateIcon = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIcon(isDarkMode ? <Moon size={16} /> : <Sun size={16} />);
  };

  const toggleTheme = () => {
	const isDarkMode = document.documentElement.classList.contains('dark');
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
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []); // Include an empty dependency array

  return (
    <Button variant="outline" onClick={toggleTheme} aria-label="Toggle Theme">
      {icontoggle}
    </Button>
  );
};

export default ModeToggle;
