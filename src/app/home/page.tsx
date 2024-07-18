"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { CommandMenu } from "./CommandMenu";
import TabsComponent from "./TabsComponent";
import {
  EllipsisVertical,
  Heart,
  House,
  ListPlus,
  Play,
  PlayCircle,
  Podcast,
  Save,
  SkipBack,
  SkipForward,
  UserRound,
} from "lucide-react";
import { Library } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Search } from "lucide-react";
import { CalendarPlus } from "lucide-react";
import { Mic } from "lucide-react";
import { CirclePlay } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Radio } from "lucide-react";
import { ListMusic } from "lucide-react";
import { Clock } from "lucide-react";
import { Guitar } from "lucide-react";
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
import { HoverTabs } from "./HoverTabs";
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
import { NavigationEffect } from "../NavigationEffect";
export default function Home() {
  return (
    <main className="flex GeistSans  relative w-full min-h-screen gap-[3rem] bg-black dark:[color-scheme:dark] flex-col items-center justify-between  py-0">
      <CommandMenu />
      <div className="w-full  px-[2rem]  border bg-[#000000] border-[#202020] sticky top-0 items-center rounded-md flex justify-between gap-[2rem] z-[3]">
        <div className="h-[56px] text-sm    w-fit items-center  flex gap-[2rem] ">
          <Link
            href="/home"
            className="text-white text-[1.5rem] duration-300 transition-colors ease-out"
          >
            /:\
          </Link>
          <HoverTabs />
        </div>
        <div className="flex gap-[2rem]">
          <Button variant={"outline"}>Play Now</Button>
          <Button>Download</Button>
        </div>
      </div>
      <div className="mt-[3rem] w-full px-[5rem] items-center justify-center gap-[1.5rem] flex flex-col">
        <div className="items-center gap-[2rem] justify-center flex flex-col">
          <h1 className="text-center  text-[3rem] font-bold">
            Your Gateway to Unlimited Music
          </h1>
          <p className="text-[1.2rem] w-[40rem] text-center">
            Discover new horizons in music. Listen to your favorite tracks,
            create personalized playlists, and enjoy high-quality audio
            streaming. MusicHub brings the world of music to your fingertips.
          </p>
        </div>
        <div className="flex w-full justify-center gap-[2rem] mt-[2rem]">
          <Button>Explore Now</Button>
          <Button variant="outline">Discover Features</Button>
        </div>
      </div>
      <div className="contentsP active" id="musicContent">
        <div className="flex justify-center mt-[4rem] mb-[6rem]">
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
            <div className="flex h-full w-full">
              <Tabs
                defaultValue="listennow_parent"
                className="flex w-full  rounded-t-none rounded-br-none rounded-bl-lg"
              >
                <TabsList className="flex justify-start pt-[24px] flex-col w-[238px] rounded-t-none rounded-br-none rounded-bl-lg h-full border-r border-r-[#202020] bg-black gap-[1rem] ">
                  <div>
                    <h1 className="flex pl-[12px] font-bold text-xl text-white w-[190px] justify-start items-center gap-[1rem]">
                      Discorver
                    </h1>
                  </div>
                  <TabsTrigger
                    value="listennow_parent"
                    className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                  >
                    <CirclePlay className="w-4 h-4" />
                    <p className="text-md">Listen Now</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="browser_parent"
                    className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                  >
                    <LayoutGrid className="w-4 h-4" />
                    <p>Browser</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="radio_parent"
                    className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                  >
                    <Radio className="w-4 h-4" />
                    <p>Radio</p>
                  </TabsTrigger>
                  <div>
                    <h1 className="flex pl-[12px] font-bold text-xl text-white w-[190px] justify-start items-center gap-[1rem]">
                      Library
                    </h1>
                  </div>
                  <TabsTrigger
                    value="playlist"
                    className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                  >
                    <ListMusic className="w-4 h-4" />
                    <p>Playlist</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="song"
                    className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                  >
                    <Music2 className="w-4 h-4" />
                    <p>Song</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="make_for_you"
                    className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                  >
                    <User className="w-4 h-4" />
                    <p>Make for You</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="artists"
                    className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                  >
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
                  </TabsTrigger>
                  <TabsTrigger
                    value="albums"
                    className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                  >
                    <Library className="w-4 h-4" />
                    <p>Albums</p>
                  </TabsTrigger>
                  <div>
                    <h1 className="flex pl-[12px] font-bold text-xl text-white w-[190px] justify-start items-center gap-[1rem]">
                      Library
                    </h1>
                  </div>
                  <ScrollArea className="h-[310px]  pl-[1rem] w-[230px]">
                    <div className="flex flex-col text-md gap-[1rem]">
                      <TabsTrigger
                        value="recently_added"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <ListMusic className="w-4 h-4" />
                        <p>Recently Added</p>
                      </TabsTrigger>
                      <TabsTrigger
                        value="recently_added"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <ListMusic className="w-4 h-4" />
                        <p>Recently Added</p>
                      </TabsTrigger>
                      <TabsTrigger
                        value="recently_added"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <ListMusic className="w-4 h-4" />
                        <p>Recently Added</p>
                      </TabsTrigger>
                      <TabsTrigger
                        value="recently_added"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <ListMusic className="w-4 h-4" />
                        <p>Recently Added</p>
                      </TabsTrigger>
                      <TabsTrigger
                        value="recently_added"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <ListMusic className="w-4 h-4" />
                        <p>Recently Added</p>
                      </TabsTrigger>
                      <TabsTrigger
                        value="recently_added"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <ListMusic className="w-4 h-4" />
                        <p>Recently Added</p>
                      </TabsTrigger>
                      <TabsTrigger
                        value="recently_added"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <ListMusic className="w-4 h-4" />
                        <p>Recently Added</p>
                      </TabsTrigger>
                      <TabsTrigger
                        value="recently_added"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <ListMusic className="w-4 h-4" />
                        <p>Recently Added</p>
                      </TabsTrigger>
                    </div>
                  </ScrollArea>
                </TabsList>
                <TabsContent value="listennow_parent" className="w-full h-full">
                  <div className="flex w-full flex-col">
                    <div className="flex mt-[1rem] mx-[2rem] justify-between">
                      <div className="">
                        <Tabs defaultValue="music" className="w-[400px]">
                          <TabsList>
                            <TabsTrigger value="music">Music</TabsTrigger>
                            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                            <TabsTrigger value="live">Live</TabsTrigger>
                          </TabsList>
                          <TabsContent value="music">
                            <div className="mt-[2rem]">
                              <div className="">
                                <h1 className="font-bold text-2xl">
                                  Listen Now
                                </h1>
                                <p className="text-sm text-[#a1a1a1]">
                                  Top picks for you. Updated daily.
                                </p>
                              </div>
                              <div>
                                <ScrollArea className=" border-t border-t-[#202020] pt-[2rem] mt-[2rem] h-[450px]  w-[1000px]">
                                  <div className="flex gap-[3rem]">
                                    <div>
                                      <Image
                                        src="/kelly-sikkema-_-TwILDnZSU-unsplash.jpg"
                                        alt="Picture of the author"
                                        width={1300}
                                        height={1200}
                                        className="rounded-lg max-w-[255px] max-h-[350px]"
                                      />
                                      <p className="text-sm mt-[0.5rem]">
                                        React Rendezvous
                                      </p>
                                      <p className="text-xs text-[#a1a1a1]">
                                        Ethan Byte
                                      </p>
                                    </div>
                                    <div>
                                      <Image
                                        src="/averie-woodard-th3rQu0K3aM-unsplash.jpg"
                                        width={1300}
                                        height={1200}
                                        alt="Picture of the author"
                                        className="rounded-lg max-w-[255px] max-h-[350px]"
                                      />
                                      <p className="text-sm mt-[0.5rem]">
                                        Async Awakenings
                                      </p>
                                      <p className="text-xs text-[#a1a1a1]">
                                        Nina Netcode
                                      </p>
                                    </div>
                                    <div>
                                      <Image
                                        src="/daniel-angele-2gu4hKuFhi0-unsplash.jpg"
                                        width={1300}
                                        height={1200}
                                        alt="Picture of the author"
                                        className="rounded-lg max-w-[255px] h-[350px]"
                                      />
                                      <p className="text-sm mt-[0.5rem]">
                                        The Art of Reusability
                                      </p>
                                      <p className="text-xs text-[#a1a1a1]">
                                        Lena Logic
                                      </p>
                                    </div>
                                    <div>
                                      <Image
                                        src="/man-person-music-road-street-guitar-1409658-pxhere.com.jpg"
                                        width={1300}
                                        height={1200}
                                        alt="Picture of the author"
                                        className="rounded-lg max-w-[255px] max-h-[350px]"
                                      />
                                      <p className="text-sm mt-[0.5rem]">
                                        Stateful Symphony
                                      </p>
                                      <p className="text-xs text-[#a1a1a1]">
                                        Beth Binary
                                      </p>
                                    </div>
                                  </div>
                                  <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                              </div>
                            </div>
                            <div className="mt-[2rem]">
                              <div className="">
                                <h1 className="font-bold text-2xl">
                                  Make for You
                                </h1>
                                <p className="text-sm text-[#a1a1a1]">
                                  Your personal playlists. Updated daily.
                                </p>
                              </div>
                              <div>
                                <ScrollArea className=" border-t border-t-[#202020] pt-[2rem] mt-[2rem]   w-[1000px]">
                                  <div className="flex gap-[1.8rem]">
                                    <div>
                                      <Image
                                        src="/5-1.png"
                                        alt="Picture of the author"
                                        width={1300}
                                        height={1200}
                                        className="rounded-lg w-[150px] h-[150px]"
                                      />
                                      <p className="text-sm mt-[0.5rem]">
                                        Thinking Components
                                      </p>
                                      <p className="text-xs text-[#a1a1a1]">
                                        Lena Logic
                                      </p>
                                    </div>
                                    <div>
                                      <Image
                                        src="/piano-tutor-header-testimonial.jpg"
                                        width={1300}
                                        height={1200}
                                        alt="Picture of the author"
                                        className="rounded-lg w-[150px] h-[150px]"
                                      />
                                      <p className="text-sm mt-[0.5rem]">
                                        Functional Fury
                                      </p>
                                      <p className="text-xs text-[#a1a1a1]">
                                        Beth Binary
                                      </p>
                                    </div>
                                    <div>
                                      <Image
                                        src="/kelly-sikkema-nPMkfYtO9JA-unsplash-1365x2048.jpg"
                                        width={1300}
                                        height={1200}
                                        alt="Picture of the author"
                                        className="rounded-lg w-[150px] h-[150px]"
                                      />
                                      <p className="text-sm mt-[0.5rem]">
                                        React Rendezvous
                                      </p>
                                      <p className="text-xs text-[#a1a1a1]">
                                        Ethan Byte
                                      </p>
                                    </div>
                                    <div>
                                      <Image
                                        src="/Carolyn-Arends-Allow-For-Space-In-The-Music.jpg"
                                        width={1300}
                                        height={1200}
                                        alt="Picture of the author"
                                        className="rounded-lg w-[150px] h-[150px]"
                                      />
                                      <p className="text-sm mt-[0.5rem]">
                                        Stateful Symphony
                                      </p>
                                      <p className="text-xs text-[#a1a1a1]">
                                        Beth Binary
                                      </p>
                                    </div>
                                    <div>
                                      <Image
                                        src="/averie-woodard-th3rQu0K3aM-unsplash.jpg"
                                        width={1300}
                                        height={1200}
                                        alt="Picture of the author"
                                        className="rounded-lg w-[150px] h-[150px]"
                                      />
                                      <p className="text-sm mt-[0.5rem]">
                                        Async Awakenings
                                      </p>
                                      <p className="text-xs text-[#a1a1a1]">
                                        Nina Netcode
                                      </p>
                                    </div>
                                    <div>
                                      <Image
                                        src="/man-person-music-road-street-guitar-1409658-pxhere.com.jpg"
                                        width={1300}
                                        height={1200}
                                        alt="Picture of the author"
                                        className="rounded-lg w-[150px] h-[150px]"
                                      />
                                      <p className="text-sm mt-[0.5rem]">
                                        The Art of Reusability
                                      </p>
                                      <p className="text-xs text-[#a1a1a1]">
                                        Lena Logic
                                      </p>
                                    </div>
                                  </div>
                                  <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="podcasts">
                            Change your password here.
                          </TabsContent>
                          <TabsContent value="live">
                            Change your password here.
                          </TabsContent>
                        </Tabs>
                      </div>
                      <div>
                        <Button>
                          <CirclePlus className="mr-2 h-4 w-4" /> Add Music
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent
                  value="browser_parent"
                  className="mt-0 w-full h-full  "
                >
                  <div className="h-full  flex items-center  w-full">
                    <Tabs
                      defaultValue="all"
                      className="w-full flex flex-col h-full pt-[2rem]"
                    >
                      <TabsList className="ml-[33px] w-fit">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="united_state">
                          United State
                        </TabsTrigger>
                        <TabsTrigger value="on_world">On World</TabsTrigger>
                      </TabsList>
                      <TabsContent value="all" className="w-full  h-full">
                        <div className="h-full w-full flex flex-col gap-[1rem]  justify-between">
                          <ScrollArea className="h-[800px] mt-[1rem] ">
                            <div>
                              <h1 className="font-bold   text-xl ml-[33px]">
                                New Releases
                              </h1>
                              <div className="grid gap-x-[2rem] mt-[1rem] gap-y-[2rem] w-[970px] grid-cols-3 ml-[33px] ">
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h1 className="font-bold mt-[1rem] text-xl ml-[33px]">
                                New Releases
                              </h1>
                              <div className="grid gap-x-[2rem] mt-[1rem] gap-y-[2rem] w-[970px] grid-cols-3 ml-[33px] ">
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h1 className="font-bold mt-[1rem] text-xl ml-[33px]">
                                New Releases
                              </h1>
                              <div className="grid gap-x-[2rem] mt-[1rem] gap-y-[2rem] w-[970px] grid-cols-3 ml-[33px] ">
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                  <Skeleton className="w-[100px] h-[100px]"></Skeleton>
                                  <div className="flex flex-col justify-between h-[100px]">
                                    <Skeleton className="w-[12rem] h-[2rem]"></Skeleton>
                                    <Skeleton className="w-[8rem] h-[1rem]"></Skeleton>
                                    <Skeleton className="w-[5rem] h-[1rem]"></Skeleton>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ScrollArea>
                          <div className="h-[70px] justify-center flex items-center w-full border-t-[#202020] border-t">
                            <div className="flex gap-[2rem]">
                              <SkipBack />
                              <PlayCircle />
                              <SkipForward />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </TabsContent>
                <TabsContent value="radio_parent">
                  <div className="flex w-full flex-col">aa</div>
                </TabsContent>
                <TabsContent value="recently_added">
                  <div className="flex w-full flex-col"></div>
                </TabsContent>
                <TabsContent value="playlist" className="mt-0 w-full  h-full">
                  <div className="w-full h-full">
                    <Tabs
                      defaultValue="gio_list"
                      className="flex flex-col h-full justify-between w-full  "
                    >
                      <TabsContent
                        value="gio_list"
                        className="flex w-full mt-0 h-full items-center justify-center"
                      >
                        <div className="flex flex-col gap-[2rem]">
                          <Image
                            width={400}
                            height={300}
                            alt="Gio_Cover_Image"
                            src="/1678963583887_500.jpg"
                            className="w-[300px] h-[300px] rounded-md"
                          />
                          <div className="flex justify-between">
                            <SkipBack />
                            <Play />
                            <SkipForward />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsList className="bg-black h-[300px] p-0 w-full">
                        <ScrollArea className="h-[300px] py-[1rem] w-full border-t border-t-[#202020]">
                          <TabsTrigger
                            value="gio_list"
                            className="flex w-full gap-[3rem]  items-center flex-col"
                          >
                            <div className=" flex justify-between items-center px-[2rem] border-[#202020] rounded-sm w-[1000px] h-[80px]">
                              <div className="flex gap-[2rem] items-center">
                                <Image
                                  width={400}
                                  height={300}
                                  alt="Gio_Cover_Image"
                                  src="/1678963583887_500.jpg"
                                  className="w-[4rem] h-[4rem] rounded-full"
                                />
                                <div className="flex flex-col">
                                  <h1 className="font-bold text-md">Gio</h1>
                                  <p className="text-[#a1a1a1] text-sm">Jank</p>
                                </div>
                              </div>
                              <div className="flex gap-[2rem]">
                                <EllipsisVertical className="text-[#acacac]" />
                              </div>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger
                            value="gio_list"
                            className="flex w-full gap-[3rem]  items-center flex-col"
                          >
                            <div className=" flex justify-between items-center px-[2rem] border-[#202020] rounded-sm w-[1000px] h-[80px]">
                              <div className="flex gap-[2rem] items-center">
                                <Image
                                  width={400}
                                  height={300}
                                  alt="Gio_Cover_Image"
                                  src="/1678963583887_500.jpg"
                                  className="w-[4rem] h-[4rem] rounded-full"
                                />
                                <div className="flex flex-col">
                                  <h1 className="font-bold text-md">Gio</h1>
                                  <p className="text-[#a1a1a1] text-sm">Jank</p>
                                </div>
                              </div>
                              <div className="flex gap-[2rem]">
                                <EllipsisVertical className="text-[#acacac]" />
                              </div>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger
                            value="gio_list"
                            className="flex w-full gap-[3rem]  items-center flex-col"
                          >
                            <div className=" flex justify-between items-center px-[2rem] border-[#202020] rounded-sm w-[1000px] h-[80px]">
                              <div className="flex gap-[2rem] items-center">
                                <Image
                                  width={400}
                                  height={300}
                                  alt="Gio_Cover_Image"
                                  src="/1678963583887_500.jpg"
                                  className="w-[4rem] h-[4rem] rounded-full"
                                />
                                <div className="flex flex-col">
                                  <h1 className="font-bold text-md">Gio</h1>
                                  <p className="text-[#a1a1a1] text-sm">Jank</p>
                                </div>
                              </div>
                              <div className="flex gap-[2rem]">
                                <EllipsisVertical className="text-[#acacac]" />
                              </div>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger
                            value="gio_list"
                            className="flex w-full gap-[3rem]  items-center flex-col"
                          >
                            <div className=" flex justify-between items-center px-[2rem] border-[#202020] rounded-sm w-[1000px] h-[80px]">
                              <div className="flex gap-[2rem] items-center">
                                <Image
                                  width={400}
                                  height={300}
                                  alt="Gio_Cover_Image"
                                  src="/1678963583887_500.jpg"
                                  className="w-[4rem] h-[4rem] rounded-full"
                                />
                                <div className="flex flex-col">
                                  <h1 className="font-bold text-md">Gio</h1>
                                  <p className="text-[#a1a1a1] text-sm">Jank</p>
                                </div>
                              </div>
                              <div className="flex gap-[2rem]">
                                <EllipsisVertical className="text-[#acacac]" />
                              </div>
                            </div>
                          </TabsTrigger>
                        </ScrollArea>
                      </TabsList>
                    </Tabs>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <div>
        <NavigationEffect />
      </div>
      <div className="mb-[5rem]">
        <Toaster richColors closeButton />
        <Button onClick={() => toast.success("Event has been created")}>
          The End
        </Button>
      </div>
    </main>
  );
}
