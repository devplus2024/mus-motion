import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center mt-[3rem]">
      <div className="border w-[900px] gap-[2rem] h-[400px] flex flex-col items-center justify-center rounded-lg">
        <p className="text-3xl"> Page Not Found</p>
        <div className="flex gap-[1rem]">
          <Link href="/">Home</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
      </div>
    </div>
  );
}
