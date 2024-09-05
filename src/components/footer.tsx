"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const path = usePathname();
  const isWebApp = path === "/webapp";
  const isAi = path === "/ai";
  return (
    <div
      className={`${isWebApp || isAi ? "webfilm-class" : ""} h-[60px] border-t`}
    ></div>
  );
}
