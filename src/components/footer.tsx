"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const path = usePathname();
  const isDocs = path === "/docs";
  return (
    <div className={`${isDocs ? "webfilm-class" : ""} h-[60px] border-t`}></div>
  );
}
