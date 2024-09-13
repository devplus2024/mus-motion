import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import { source } from "@/app/source";
import type { Metadata } from "next";
import "fumadocs-ui/style.css";
export const metadata: Metadata = {
  title: "Documention | MusMotion",
  description: "MusicHub App",
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
