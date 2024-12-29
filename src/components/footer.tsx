"use client";
import { Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Mail, Github, Twitter, Music2 } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
export default function Footer() {
  const path = usePathname();
  const isWebApp = path === "/webapp";
  const isAi = path === "/ai";
  const isChatV2 = path === "/chat-v2";
  const isRadio = path === "/radio";
  const isSignIn = path === "/signin";
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
  };
  return (
    <div
      className={`${isWebApp || isAi || isChatV2 || isRadio || isSignIn ? "webfilm-class" : ""} h-[60px] border-t py-4`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Logo Column */}
          <div className="col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <Music2 className="h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold tracking-tight">
                MusicSoft
              </h3>
            </div>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h4 className="mb-3 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-xs">
              {["Docs", "Learn", "Showcase", "Blog", "Analytics"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* More Column */}
          <div className="col-span-1">
            <h4 className="mb-3 text-sm font-semibold">More</h4>
            <ul className="space-y-2 text-xs">
              {[
                "Music Store",
                "Contact Sales",
                "GitHub",
                "Releases",
                "Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div className="col-span-1">
            <h4 className="mb-3 text-sm font-semibold">About MusicSoft</h4>
            <ul className="space-y-2 text-xs">
              {[
                "MusicSoft + AI",
                "Open Source Software",
                "GitHub",
                "Community",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1">
            <h4 className="mb-3 text-sm font-semibold">
              Subscribe to our newsletter
            </h4>
            <p className="mb-3 text-xs text-gray-400">
              Stay updated on new releases and features, guides, and case
              studies.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="you@domain.com"
                className="h-8 border-gray-800 bg-[#111] text-xs text-white placeholder:text-gray-500"
                required
              />
              <Button
                type="submit"
                className="h-8 w-full bg-white text-xs text-black hover:bg-gray-200"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} MusicSoft, Inc.
          </p>
          <div className="flex space-x-5">
            <a
              href="#"
              className="text-gray-400 transition-colors duration-200 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors duration-200 hover:text-white"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors duration-200 hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
