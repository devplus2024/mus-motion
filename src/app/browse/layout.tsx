"use client";
import type { Metadata } from "next";
import MainLayOut from "./components/main";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
export const metadata: Metadata = {
  title: "Browse | NoneTheLes",
  description: "NoneTheLes - Browse",
};

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); // Hiển thị giao diện sau 5 giây
    }, 5000);

    // Cleanup timeout nếu component bị unmount trước khi setTimeout kết thúc
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {children}
      <div className={`${showContent ? "hidden" : "block"}`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array(30).map((_, index) => (
            <Card key={index} className={`bg-[#000000]`}>
              <CardHeader className="h-[1rem] w-[4rem] animate-pulse rounded-md bg-primary/10">
                <CardTitle></CardTitle>
              </CardHeader>
              <CardContent className="animate-pulse rounded-md bg-primary/10">
                <div className="mb-4 h-[12rem] w-full rounded object-cover"></div>
                <p className="mb-2 text-sm text-muted-foreground"></p>
                <div className="mb-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`? "fill-yellow-400 text-yellow-400" : "text-gray-300" } h-4 w-4`}
                    />
                  ))}
                  <span className="ml-2 text-sm"></span>
                </div>
                <p className="font-bold"></p>
              </CardContent>
              <CardFooter className="h-[1rem] w-[3rem] animate-pulse rounded-md bg-primary/10">
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
