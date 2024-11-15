import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing | Stroma",
  description: "Stroma - Pricing",
};
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
