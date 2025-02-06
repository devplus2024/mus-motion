import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Radio | Stroma",
  description: "Stroma - Radio",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
