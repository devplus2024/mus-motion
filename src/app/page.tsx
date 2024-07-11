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
            <div className="flex h-full">
              <div className="border-r w-[300px] py-[1.5rem] flex flex-col items-start   gap-[2rem]  border-r-[#202020]">
                <div className="flex  flex-col gap-[1rem]">
                  <div className="text-xl font-bold pl-[2rem]">Discover</div>
                  <Tabs defaultValue="listennow" className="flex gap-[1rem]">
                    <TabsList className="flex flex-col pl-[1rem] text-md gap-[1rem]">
                      <TabsTrigger
                        value="listennow"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <CirclePlay className="w-4 h-4" />
                        <p>Listen Now</p>
                      </TabsTrigger>
                      <Button
                        variant="ghost"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <LayoutGrid className="w-4 h-4" />
                        <p>Browser</p>
                      </Button>
                      <Button
                        variant="ghost"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <Radio className="w-4 h-4" />
                        <p>Radio</p>
                      </Button>
                    </TabsList>
                    <TabsContent value="listennow"></TabsContent>
                  </Tabs>
                </div>
                <div className="flex pl-[2rem] flex-col gap-[1rem]">
                  <div className="text-xl font-bold">Library</div>
                  <div className="flex gap-[1rem]">
                    <div className="flex flex-col text-md gap-[1rem]">
                      <div className="flex items-center gap-[1rem]">
                        <ListMusic className="w-4 h-4" />
                        <p>Playlist</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <Music2 className="w-4 h-4" />
                        <p>Songs</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <User className="w-4 h-4" />
                        <p>Make for You</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                          <circle cx="17" cy="7" r="5"></circle>
                        </svg>
                        <p>Artists</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <Library className="w-4 h-4" />
                        <p>Albums</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[1rem]">
                  <div className="text-xl font-bold pl-[2rem]">Playlists</div>
                  <div className="flex gap-[1rem]">
                    <ScrollArea className="h-[310px] pl-[1rem] w-[240px]">
                      <div className="flex flex-col text-md gap-[1rem]">
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Recently Added</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Recently Played</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Top Songs</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Top Albums</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Top Artists</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Logic Discography</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Bedtime Beats</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Feeling Happy</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>I miss Y2K Pop</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Runtober</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Mellow Days</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>Eminem Essentials</p>
                        </Button>
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
