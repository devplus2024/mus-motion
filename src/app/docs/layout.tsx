import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Documention | MusMotion",
  description: "MusicHub App",
};
export default function DocumentionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
