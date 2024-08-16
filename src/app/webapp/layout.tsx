import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mus Motion WebApp",
  description: "Mus Motion WebApp",
};
export default function MusMotionWebAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
