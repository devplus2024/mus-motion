"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const path = usePathname();
  const isWebApp = path === "/webapp";
  const isAi = path === "/ai";
  const isChatV2 = path === "/chat-v2";
  const isRadio = path === "/radio";
  return (
    <div
      className={`${isWebApp || isAi || isChatV2 || isRadio ? "webfilm-class" : ""} h-[60px] border-t`}
    ></div>
  );
}
