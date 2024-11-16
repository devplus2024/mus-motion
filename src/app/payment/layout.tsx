import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Paymemnt | Stroma",
  description: "Stroma",
};
export default function PayMentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
