import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "fumadocs-ui/style.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { CommandMenu } from "@/components/CommandMenu";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/ProgressBarProvider";
import Footer from "@/components/footer";
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
    <>
      <html
        suppressHydrationWarning
        lang="en"
        className={`${GeistSans.className} custom_command_scroll dark`}
        style={{ colorScheme: "dark" }}
      >
        <head />
        <body className="relative antialiased">
          <Providers>
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
              <Footer />
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  );
}
