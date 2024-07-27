import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Resource",
  description: "MusicHub App",
};
export default function WebFilmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
