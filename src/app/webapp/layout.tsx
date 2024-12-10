import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Stroma WebApp",
  description: "Stroma WebApp",
};
export default function StromaWebAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
