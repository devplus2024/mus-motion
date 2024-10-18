import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home V2 | NoneTheLes",
  description: "NoneTheLes - Pricing",
};
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
