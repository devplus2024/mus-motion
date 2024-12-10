import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Support | Stroma",
  description: "Stroma - Support",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
