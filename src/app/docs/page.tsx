"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { House, Podcast, UserRound } from "lucide-react";
import { Library } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Search } from "lucide-react";
import { Mic } from "lucide-react";
import { CirclePlay } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Radio } from "lucide-react";
import { ListMusic } from "lucide-react";
import React, { useEffect, useState } from "react";
import { PanelGroup, Panel } from "react-resizable-panels";
import { Music2 } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { Pizza } from "lucide-react";
import { Apple } from "lucide-react";
import { CupSoda } from "lucide-react";
import { Fish } from "lucide-react";
import { Ham } from "lucide-react";
import { Cake } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share2 } from "lucide-react";
import { User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Mail } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Headphones } from "lucide-react";
import { WifiOff } from "lucide-react";
import { NotebookText } from "lucide-react";
import { Medal } from "lucide-react";
import { Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
export default function Home() {
  return (
    <main className="flex GeistSans relative w-full min-h-screen gap-[3rem] bg-black dark:[color-scheme:dark] flex-col items-center justify-between  py-0">
      <div className="w-full backdrop-blur px-[2rem] blur-0 border bg-[#00000099] border-[#202020] sticky top-0 items-center rounded-md flex justify-between gap-[2rem] z-[3]">
        <div className="h-[56px] text-sm    w-fit items-center  flex gap-[2rem] ">
          <Link
            href="/home"
            className="text-white text-[1.5rem] duration-300 transition-colors ease-out"
          >
            /:\
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Feature</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[30rem] bg-black   py-[1rem] px-[1rem] flex  gap-[2.5rem]">
                  <div className="flex flex-col gap-[2rem]">
                    <Button
                      variant={"ghost"}
                      className="flex items-center py-[1.5rem] gap-[0.5rem]"
                    >
                      <div>
                        <Lightbulb />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-md font-bold">
                          Smart Recommendations
                        </NavigationMenuLink>
                        <p className="text-sm text-nowrap">
                          Discover music curated just for you.
                        </p>
                      </div>
                    </Button>
                    <Button
                      variant={"ghost"}
                      className="flex items-center py-[1.5rem] gap-[0.5rem]"
                    >
                      <div>
                        <WifiOff />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-md font-bold">
                          Offline Mode
                        </NavigationMenuLink>
                        <p className="text-sm text-nowrap">
                          Download songs and listen offline.
                        </p>
                      </div>
                    </Button>
                    <Button
                      variant={"ghost"}
                      className="flex items-center py-[1.5rem] gap-[0.5rem]"
                    >
                      <div>
                        <Podcast />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-md font-bold">
                          Podcasts
                        </NavigationMenuLink>
                        <p className="text-sm text-nowrap">
                          Access a wide range of podcasts.
                        </p>
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-between">
                    <Button
                      variant={"ghost"}
                      className="flex items-center py-[1.5rem] gap-[0.5rem]"
                    >
                      <div>
                        <NotebookText />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-md font-bold">
                          Lyrics Display
                        </NavigationMenuLink>
                        <p className="text-sm text-nowrap">
                          Sing along with on-screen lyrics.
                        </p>
                      </div>
                    </Button>
                    <Button
                      variant={"ghost"}
                      className="flex items-center py-[1.5rem] gap-[0.5rem]"
                    >
                      <div>
                        <Medal />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-md font-bold">
                          High-Quality Audio
                        </NavigationMenuLink>
                        <p className="text-sm text-nowrap">
                          Enjoy lossless audio streaming.
                        </p>
                      </div>
                    </Button>
                    <Button
                      variant={"ghost"}
                      className="flex items-center py-[1.5rem] gap-[0.5rem]"
                    >
                      <div>
                        <Share2 />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-md font-bold">
                          Social Sharing
                        </NavigationMenuLink>
                        <p className="text-sm text-nowrap">
                          Create and share your own playlists.
                        </p>
                      </div>
                    </Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Library</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[30rem] py-[1rem] px-[1rem] flex  gap-[1rem]">
                  <div className="flex flex-col gap-[0.8rem]">
                    <div>
                      <NavigationMenuLink className="text-nowrap text-md font-bold">
                        Smart Recommendations
                      </NavigationMenuLink>
                      <p className="text-sm text-nowrap">
                        Discover music curated just for you.
                      </p>
                    </div>
                    <div>
                      <NavigationMenuLink className="text-nowrap text-md font-bold">
                        Offline Mode
                      </NavigationMenuLink>
                      <p className="text-sm text-nowrap">
                        Download songs and listen offline.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <NavigationMenuLink className="text-nowrap text-md font-bold">
                        Lyrics Display
                      </NavigationMenuLink>
                      <p className="text-sm text-nowrap">
                        Sing along with on-screen lyrics.
                      </p>
                    </div>
                    <div>
                      <NavigationMenuLink className="text-nowrap text-md font-bold">
                        High-Quality Audio
                      </NavigationMenuLink>
                      <p className="text-sm text-nowrap">
                        Enjoy lossless audio streaming.
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Enterprise
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-[2rem]">
          <Button variant={"outline"}>Try It</Button>
          <Button>Download</Button>
        </div>
      </div>
      <div className="mt-[3rem]">
        <div>
          <h1 className="text-center text-[3rem] font-bold">
            MusicHub - Unlimited Music
          </h1>
          <p className="text-[1.5rem] text-center">
            Discover, listen, and enjoy music your way.
          </p>
        </div>
        <div className="flex w-full justify-center gap-[2rem] mt-[2rem]">
          <Button>Explore Now</Button>
          <Button variant="outline">Discover Features</Button>
        </div>
      </div>
      <div className="contentsP active" id="musicContent">
        <div className="flex justify-center mt-[6rem]">
          <div className="h-[1020px] w-[1300px] flex flex-col rounded-lg border border-[#202020]">
            <div className="flex gap-[2rem] bg-black rounded-t-lg border-b border-b-[#202020] ">
              <Menubar className="bg-black border-none">
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Share</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Email link</MenubarItem>
                        <MenubarItem>Messages</MenubarItem>
                        <MenubarItem>Notes</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                      Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Find</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Search the web</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Find...</MenubarItem>
                        <MenubarItem>Find Next</MenubarItem>
                        <MenubarItem>Find Previous</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem>
                      Always Show Bookmarks Bar
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>
                      Always Show Full URLs
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem inset>
                      Reload <MenubarShortcut>⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled inset>
                      Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Profiles</MenubarTrigger>
                  <MenubarContent>
                    <MenubarRadioGroup value="benoit">
                      <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                      <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                      <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem inset>Edit...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Add Profile...</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
            <div className="flex h-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
