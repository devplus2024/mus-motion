import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login | Stroma",
  description: "Stroma - Login",
};
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
