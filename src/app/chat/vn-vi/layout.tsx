import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import OpenGraphImage from "./opengraph-image";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Chat App",
  description: "ChatHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${GeistSans.className} dark_black`}
        style={{ colorScheme: "dark" }}
      >
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
