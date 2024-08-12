"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { CommandMenu } from "./CommandMenu";
import { playlist, PlayList } from "./data/playlist";
import { imagelist, ImageList } from "./data/image";
import { list, List } from "./data/list";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
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
import { useTheme } from "next-themes";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useRouter } from "next/navigation";
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
import { NavigationEffect } from "@/components/NavigationEffect";
import { Toaster } from "@/components/ui/sonner";
import { Dot } from "lucide-react";
import DownloadButton from "./components/DownloadButton";
export default function Home() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [position, setPosition] = React.useState("benoit");
  return (
    <main className="flex GeistSans overflow-x-hidden  relative w-full min-h-screen gap-[3rem] dark:bg-black dark:[color-scheme:dark] flex-col items-center justify-between  py-0">
      <div className="w-ful mt-[3rem] flex gap-[3.5rem] items-center mx-[5rem]">
        <div className=" flex flex-col items-start gap-[2.5rem]">
          <div className="flex gap-[0rem] items-center">
            <Button
              variant="outline"
              className="font-medium  text-center  w-fit rounded-md px-3 text-black dark:text-white text-[1rem]"
            >
              Lasted Version
            </Button>
            <Dot className="h-[50px] w-[50px]" />
            <Button
              variant="outline"
              className="font-medium  text-center  w-fit rounded-md px-3 text-black dark:text-white text-[1rem]"
            >
              v2.5.3
            </Button>
          </div>
          <h1 className=" leading-[2.6rem]  text-[2.5rem] font-bold">
            Experience the Ultimate Music Journey with Our Innovative Software
          </h1>
          <p className="text w-[30rem]  text-[1rem] font-medium">
            Dive into a seamless music experience with our cutting-edge
            software. Unleash your creativity, manage your playlists, and
            explore a universe of sounds.
          </p>
          <div className="flex gap-[2rem]">
            <DownloadButton />
            <Link href="/docs">
              <Button variant={"outline"}>Try On The Web</Button>
            </Link>
          </div>
          <div>
            <p>
              By using Mus Motion, you agree to its{" "}
              <Link href="/license" className="underline">
                license
              </Link>{" "}
              and{" "}
              <Link className="underline" href="/privacy">
                privacy
              </Link>{" "}
              statement.
            </p>
          </div>
        </div>
        <div>
          <Image
            style={{ display: "var(--preview-image-dark-display)" }}
            src={"/image/preview-dark.png"}
            height={"600"}
            alt="preview_App"
            width={"650"}
            className="max-w-[600px] h-[398.39px]"
          ></Image>
          <Image
            src={"/image/preview-light.png"}
            height={"600"}
            alt="preview_App"
            width={"650"}
            className="max-w-[600px] h-[398.39px]"
            style={{ display: "var(--preview-image-light-display)" }}
          ></Image>
        </div>
      </div>
      <div className="contentsP active" id="musicContent">
        <div className="flex justify-center mt-[4rem] mb-[6rem]">
          <div className="h-[1020px] w-[1300px] flex flex-col rounded-lg border dark:border-[#202020]">
            <div className="flex gap-[2rem] dark:bg-black rounded-t-lg border-b dark:border-b-[#202020] ">
              <Menubar className="dark:bg-black border-none rounded-t-lg">
                <MenubarMenu>
                  <MenubarTrigger>MusMotion</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>About MusMotion</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Preferences<MenubarShortcut>⌘,</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Hide MusMotion<MenubarShortcut>⇧⌘H</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Hide Other<MenubarShortcut>⌘H</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Quit MusMotion
                      <MenubarShortcut>⌘Q</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarSub>
                      <MenubarSubTrigger>New</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Playlist</MenubarItem>
                        <MenubarItem>Playlist from Selection</MenubarItem>
                        <MenubarItem>Smart Playlist</MenubarItem>
                        <MenubarItem>Playlist Folder</MenubarItem>
                        <MenubarItem>Genius Playlist</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarItem>
                      Open Stream Url<MenubarShortcut>⌘U</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Close Window <MenubarShortcut>⌘W</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Libary</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Update Cloud Library</MenubarItem>
                        <MenubarItem>Update Genius</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Organize Library</MenubarItem>
                        <MenubarItem>Export Library</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Import Playlist</MenubarItem>
                        <MenubarItem>Export Playlist</MenubarItem>
                        <MenubarItem>Show Duplicate Items</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Get Album ArtWord</MenubarItem>
                        <MenubarItem>Get Track Name</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarItem>
                      Import... <MenubarShortcut>⌘O</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Burn Playlist to Dis... </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Show in Finder
                      <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Convert...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Page Setup</MenubarItem>
                    <MenubarItem>
                      Print
                      <MenubarShortcut>⌘P</MenubarShortcut>
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
                    <MenubarItem>
                      Cut <MenubarShortcut>⌘X</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Copy <MenubarShortcut>⌘C</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Paste <MenubarShortcut>⌘V</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Select All <MenubarShortcut>⌘A</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Deselect All<MenubarShortcut>⇧⌘A</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Smart Distation{" "}
                      <MenubarShortcut>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                          <circle cx="17" cy="7" r="5" />
                        </svg>
                      </MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Emoji & Symbols{" "}
                      <MenubarShortcut>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>
                      Show Lyrics
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Show Status Bar</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Enter Fullscreen</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Account</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem inset>Switch Account</MenubarItem>
                    <MenubarSeparator />
                    <MenubarRadioGroup
                      defaultValue="benoit"
                      value={position}
                      onValueChange={setPosition}
                    >
                      <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                      <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                      <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem inset>Manage Family...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Add Account...</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
            <div className="flex h-full w-full">
              <Tabs
                defaultValue="listennow_parent"
                className="flex w-full  rounded-t-none rounded-br-none rounded-bl-lg"
              >
                <TabsList className="flex justify-start pt-[24px] flex-col w-[238px] rounded-t-none rounded-br-none rounded-bl-lg h-full border-r dark:border-r-[#202020] dark:bg-black bg-white gap-[1rem] ">
                  <div>
                    <h1 className="flex pl-[12px] font-bold text-xl dark:text-white w-[190px] justify-start items-center gap-[1rem]">
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
                    <h1 className="flex pl-[12px] font-bold text-xl dark:text-white w-[190px] justify-start items-center gap-[1rem]">
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
                      {playlist.map((playlist: PlayList) => (
                        <TabsTrigger
                          key={playlist.id}
                          value={`${playlist.value}`}
                          className="flex -pl-[12px]  w-[190px] justify-start items-center gap-[1rem]"
                        >
                          <ListMusic className="w-4 h-4" />
                          <p>{playlist.name}</p>
                        </TabsTrigger>
                      ))}
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
                                <ScrollArea className=" border-t dark:border-t-[#202020] pt-[2rem] mt-[2rem] h-[450px]  w-[1000px]">
                                  <div className="flex gap-[3rem]">
                                    {list.slice(0, 4).map((list: List) => (
                                      <div key={list.id}>
                                        <ContextMenu>
                                          <ContextMenuTrigger>
                                            <Image
                                              src={`/image/${list.src}`}
                                              alt="Picture of the author"
                                              width={1300}
                                              height={1200}
                                              className="rounded-lg max-w-[255px] h-[350px]"
                                            />
                                          </ContextMenuTrigger>
                                          <ContextMenuContent className="w-[11rem]">
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Add to Library
                                            </ContextMenuItem>
                                            <ContextMenuSub>
                                              <ContextMenuSubTrigger
                                                inset
                                                className="pl-[8px]"
                                              >
                                                Add to Playlist
                                              </ContextMenuSubTrigger>
                                              <ContextMenuSubContent className="w-48">
                                                <ContextMenuItem>
                                                  <CirclePlus className="h-4 w-4 mr-2" />
                                                  New Playlist{" "}
                                                </ContextMenuItem>
                                                <ContextMenuSeparator />
                                                {playlist.map(
                                                  (playlist: PlayList) => (
                                                    <ContextMenuItem
                                                      key={playlist.id}
                                                    >
                                                      <ListMusic className="h-4 w-4 mr-2" />
                                                      {playlist.name}
                                                    </ContextMenuItem>
                                                  )
                                                )}
                                              </ContextMenuSubContent>
                                            </ContextMenuSub>
                                            <ContextMenuSeparator />
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Play Next
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Play After
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Create Station
                                            </ContextMenuItem>
                                            <ContextMenuSeparator />
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Like
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Share
                                            </ContextMenuItem>
                                          </ContextMenuContent>
                                        </ContextMenu>
                                        <div key={list.id}>
                                          <p className="text-sm mt-[0.5rem]">
                                            {list.title}
                                          </p>
                                          <p className="text-xs text-[#a1a1a1]">
                                            {list.artist}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
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
                                <ScrollArea className=" border-t dark:border-t-[#202020] pt-[2rem] mt-[2rem]   w-[1000px]">
                                  <div className="flex gap-[1.8rem]">
                                    {list.slice(4).map((list: List) => (
                                      <div key={list.id}>
                                        <ContextMenu>
                                          <ContextMenuTrigger>
                                            <Image
                                              src={`/image/${list.src}`}
                                              alt="Picture of the author"
                                              width={1300}
                                              height={1200}
                                              className="rounded-lg w-[150px] h-[150px]"
                                            />
                                          </ContextMenuTrigger>
                                          <ContextMenuContent className="w-[11rem]">
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Add to Library
                                            </ContextMenuItem>
                                            <ContextMenuSub>
                                              <ContextMenuSubTrigger
                                                inset
                                                className="pl-[8px]"
                                              >
                                                Add to Playlist
                                              </ContextMenuSubTrigger>
                                              <ContextMenuSubContent className="w-48">
                                                <ContextMenuItem>
                                                  <CirclePlus className="h-4 w-4 mr-2" />
                                                  New Playlist{" "}
                                                </ContextMenuItem>
                                                <ContextMenuSeparator />
                                                {playlist.map(
                                                  (playlist: PlayList) => (
                                                    <ContextMenuItem
                                                      key={playlist.id}
                                                    >
                                                      <ListMusic className="h-4 w-4 mr-2" />
                                                      {playlist.name}
                                                    </ContextMenuItem>
                                                  )
                                                )}
                                              </ContextMenuSubContent>
                                            </ContextMenuSub>
                                            <ContextMenuSeparator />
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Play Next
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Play After
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Create Station
                                            </ContextMenuItem>
                                            <ContextMenuSeparator />
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Like
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Share
                                            </ContextMenuItem>
                                          </ContextMenuContent>
                                        </ContextMenu>
                                        <p className="text-sm mt-[0.5rem]">
                                          {list.title}
                                        </p>
                                        <p className="text-xs text-[#a1a1a1]">
                                          {list.artist}
                                        </p>
                                      </div>
                                    ))}
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
                          <div className="h-[70px] justify-center flex items-center w-full dark:border-t-[#202020] border-t">
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
                      <TabsList className="dark:bg-black h-[300px] p-0 w-full">
                        <ScrollArea className="h-[300px] py-[1rem] w-full border-t dark:border-t-[#202020]">
                          <TabsTrigger
                            value="gio_list"
                            className="flex w-full gap-[3rem]  items-center flex-col"
                          >
                            <div className=" flex justify-between items-center px-[2rem] dark:border-[#202020] rounded-sm w-[1000px] h-[80px]">
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
                            <div className=" flex justify-between items-center px-[2rem] dark:border-[#202020] rounded-sm w-[1000px] h-[80px]">
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
      <div className="mb-[5rem]"> </div>
    </main>
  );
}
