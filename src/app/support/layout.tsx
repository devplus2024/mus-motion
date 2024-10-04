import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Support | NoneTheLes",
  description: "NoneTheLes - Support",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
