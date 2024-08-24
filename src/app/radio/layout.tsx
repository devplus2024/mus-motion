import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Radio",
  description: "MusMotion - Radio",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}