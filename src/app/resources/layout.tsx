import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Resource",
  description: "MusicHub App",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
