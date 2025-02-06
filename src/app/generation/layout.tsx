import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Generation | Stroma",
  description: "Stroma - Generation",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
