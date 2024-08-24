import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Browse",
  description: "MusMotion - Browse",
};

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}