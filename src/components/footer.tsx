"use client";
import { Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const path = usePathname();
  const isWebApp = path === "/webapp";
  const isAi = path === "/ai";
  const isChatV2 = path === "/chat-v2";
  const isRadio = path === "/radio";
  const isSignIn = path === "/signin";
  return (
    <div
      className={`${isWebApp || isAi || isChatV2 || isRadio || isSignIn ? "webfilm-class" : ""} h-[60px] border-t`}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <Music className="mr-2 h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">MusicSoft</span>
            </Link>
            <p className="mt-2 text-sm">
              Empowering musicians with cutting-edge software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Products", "Features", "Pricing", "Tutorials", "Support"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="transition-colors hover:text-indigo-400"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 transition-colors hover:text-indigo-400"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Stay Updated
            </h3>
            <form className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} MusicSoft. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
