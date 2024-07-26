import Image from "next/image";
import { useTheme } from "next-themes";

function LogoImage() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/light.svg";
      break;
    case "dark":
      src = "/dark.svg";
      break;
    default:
      const isDarkMode = document.documentElement.classList.contains("dark");
      src = isDarkMode ? "/dark" : "light.svg";
      break;
  }

  return <Image src={src} width={30} height={30} alt={""} />;
}

export default LogoImage;
