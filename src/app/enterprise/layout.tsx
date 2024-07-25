import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Enterprise",
  description: "MusicHub App",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
