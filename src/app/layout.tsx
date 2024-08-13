import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { CommandMenu } from "@/components/CommandMenu";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mus Motion",
  description: "MusMotion App",
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
            <Toaster
              className=""
              closeButton
              hotkey={["alt + C"]}
              toastOptions={{
                unstyled: false,
                classNames: {
                  cancelButton: "bg-orange-400",
                  closeButton:
                    "dark:bg-black transition-[background] transition-colors  ease-out duration-500 bg-white hover:bg-muted dark:hover:bg-white dark:hover:text-black",
                },
              }}
            />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
