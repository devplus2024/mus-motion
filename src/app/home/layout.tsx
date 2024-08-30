import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Home | MusMotion",
  description: "MusMotion - Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} dark_black`}
      style={{ colorScheme: "dark" }}
    >
      <body className="relative overflow-x-hidden dark:[color-scheme:dark]">
        {children}
      </body>
    </html>
  );
}
