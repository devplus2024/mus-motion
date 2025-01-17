import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Browse | Stroma",
  description: "Stroma - Browse",
};

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
