import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login | NoneTheLes",
  description: "NoneTheLes - Login",
};
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
