import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chat",
  description: "MusicHub App",
};
export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
