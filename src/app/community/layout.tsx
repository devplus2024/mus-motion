import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Community | MusMotion",
  description: "MusMotion - Community",
};
export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
