import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { CommandMenu } from "@/components/CommandMenu";
// import { Toaster } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/ProgressBarProvider";
import Footer from "@/components/footer";
import { ToasterSonner } from "../components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Stroma: A Useful Platform For Musicians",
  description: "Stroma - Home",
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
        <body className="relative overflow-x-hidden antialiased">
          <ThemeProvider enableSystem attribute="class" defaultTheme="system">
            <Navigation />
            <Toaster />
            <ToasterSonner
              toastOptions={{
                unstyled: true,
                classNames: {
                  toast: "bg-black",
                  title: "text-white",
                  description: "text-red-400",
                  actionButton: "bg-zinc-400",
                  cancelButton: "bg-black ",
                  closeButton: "bg-black",
                },
              }}
              closeButton
              position="top-center"
            />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
