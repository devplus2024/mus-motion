import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Support | MusMotion",
  description: "MusMotion - Support",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
