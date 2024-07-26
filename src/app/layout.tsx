import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { CommandMenu } from "@/components/CommandMenu";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "MusicHub App",
  description: "MusicHub App",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        suppressHydrationWarning
        lang="en"
        className={`${GeistSans.className} dark`}
        style={{ colorScheme: "dark" }}
      >
        <head />
        <body className="relative">
          <ThemeProvider enableSystem attribute="class" defaultTheme="system">
            <Navigation />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
