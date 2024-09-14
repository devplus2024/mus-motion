import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Docs | MusMotion",
  description: "MusMotion - Documention",
};
export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
