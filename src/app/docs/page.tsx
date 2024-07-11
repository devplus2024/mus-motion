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
export default function Home() {
  return (
    <main className="flex GeistSans relative w-full min-h-screen gap-[3rem] bg-black dark:[color-scheme:dark] flex-col items-center justify-between  py-0">
      <div className="w-full  px-[2rem]  border bg-[#000000] border-[#202020] sticky top-0 items-center rounded-md flex justify-between gap-[2rem] z-[3]">
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
                <NavigationMenuContent className="w-[30rem]    py-[1rem] px-[1rem] flex  gap-[2.5rem]">
                  <div className="flex flex-col gap-[2rem]">
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <Lightbulb className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Smart Recommendations
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Discover music curated just for you.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <WifiOff className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Offline Mode
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Download songs and listen offline.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <Podcast className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Podcasts
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Access a wide range of podcasts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between">
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <NotebookText className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Lyrics Display
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Sing along with on-screen lyrics.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <Medal className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          High-Quality Audio
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Enjoy lossless audio streaming.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <Share2 className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Social Sharing
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Share your favorite tracks on social media.
                        </p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Libary</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[30rem]    py-[1rem] px-[1rem] flex  gap-[2.5rem]">
                  <div className="flex flex-col gap-[2rem]">
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <ListMusic className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Playlists
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Manage and create your own playlists.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <Music2 className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Music
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Browse and organize all your songs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <Library className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Albums
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          View and manage your album collection.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between">
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className=" text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                          <circle cx="17" cy="7" r="5"></circle>
                        </svg>
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Artists
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Follow and explore your favorite artists.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <Guitar className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Genres
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Discover music by different genres.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                      <div>
                        <Clock className="text-[#a1a1a1] group-hover:text-black group-hover:bg-white duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                      </div>
                      <div className="flex justify-start items-start flex-col">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Recently Added
                        </NavigationMenuLink>
                        <p className="text-xs group-hover:text-white duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                          Find the most recently added songs and albums.
                        </p>
                      </div>
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
          <Button variant={"outline"}>Play Now</Button>
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
                  <div className="flex gap-[1rem]">
                    <div className="flex flex-col pl-[1rem] text-md gap-[1rem]">
                      <Button
                        variant="secondary"
                        className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                      >
                        <CirclePlay className="w-4 h-4" />
                        <p>Listen Now</p>
                      </Button>
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
                    </div>
                  </div>
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
                    <ScrollArea className="h-[320px] pl-[1rem] w-[230px]">
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
                            <h1 className="font-bold text-2xl">Listen Now</h1>
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
                            <h1 className="font-bold text-2xl">Make for You</h1>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
