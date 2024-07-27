"use client";
import classNames from "classnames";
import {
  PointerEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
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
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
import { CommandMenu } from "./CommandMenu";
import LogoImage from "./LogoImage";
import { ThemeToggle } from "./mode-toggle";
export const Navigation = (): JSX.Element => {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, 5); // Điều chỉnh số lượng cho phù hợp với số tab
  }, []);

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true);

  const onLeaveTabs = () => {
    setIsInitialHoveredElement(true);
    setHoveredTabIndex(null);
  };

  const onEnterTab = (
    e: PointerEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>,
    i: number
  ) => {
    if (!e.target || !(e.target instanceof HTMLButtonElement)) return;

    setHoveredTabIndex((prev) => {
      if (prev != null && prev !== i) {
        setIsInitialHoveredElement(false);
      }
      return i;
    });
    setHoveredRect(e.target.getBoundingClientRect());
  };

  let hoverStyles: CSSProperties = { opacity: 0 };
  if (navRect && hoveredRect) {
    hoverStyles.transform = `translate3d(${hoveredRect.left - navRect.left}px,${
      hoveredRect.top - navRect.top
    }px,0px)`;
    hoverStyles.width = hoveredRect.width;
    hoverStyles.height = hoveredRect.height;
    hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0;
    hoverStyles.transition = isInitialHoveredElement
      ? `opacity 150ms`
      : `transform 150ms 0ms, opacity 150ms 0ms, width 150ms`;
  }

  return (
    <div className="sticky top-0 z-[20]">
      <nav
        ref={navRef}
        onPointerLeave={onLeaveTabs}
        className="flex flex-shrink-0 justify-center   items-center relative z-[4] "
      >
        <nav
          ref={navRef}
          onPointerLeave={onLeaveTabs}
          className="w-full  px-[2rem]  relative border-b bg-white dark:bg-[#000000] dark:border-[#202020]  items-center  flex justify-between gap-[2rem] z-[1]"
        >
          <div className="h-[56px] text-sm    w-fit items-center  flex gap-[2rem] ">
            <Link
              href="/"
              className="dark:text-white text-[1.5rem] duration-300 transition-colors ease-out"
            >
              <p className="font-bold">LostMotion</p>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger className="text-[0.9rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                    Feature
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[30rem] data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight   py-[1rem] px-[1rem] flex  gap-[2.5rem]">
                    <div className="flex flex-col gap-[2rem]">
                      <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                        <div>
                          <Lightbulb className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                        </div>
                        <div className="flex justify-start items-start flex-col">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Smart Recommendations
                          </NavigationMenuLink>
                          <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                            Discover music curated just for you.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                        <div>
                          <WifiOff className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                        </div>
                        <div className="flex justify-start items-start flex-col">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Offline Mode
                          </NavigationMenuLink>
                          <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                            Download songs and listen offline.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                        <div>
                          <Podcast className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                        </div>
                        <div className="flex justify-start items-start flex-col">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Podcasts
                          </NavigationMenuLink>
                          <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                            Access a wide range of podcasts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between">
                      <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                        <div>
                          <NotebookText className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                        </div>
                        <div className="flex justify-start items-start flex-col">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Lyrics Display
                          </NavigationMenuLink>
                          <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                            Sing along with on-screen lyrics.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                        <div>
                          <Medal className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                        </div>
                        <div className="flex justify-start items-start flex-col">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            High-Quality Audio
                          </NavigationMenuLink>
                          <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                            Enjoy lossless audio streaming.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                        <div>
                          <Share2 className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                        </div>
                        <div className="flex justify-start items-start flex-col">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Social Sharing
                          </NavigationMenuLink>
                          <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                            Share your favorite tracks on social media.
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[0.9rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                    Library
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[37rem]    py-[1rem] px-[1rem] flex justify-between  gap-[2.5rem]">
                    <div className="grid grid-cols-2 w-[37rem] place-content-between gap-[2rem]">
                      <div className="flex flex-col gap-[1.5rem]">
                        <div>
                          <h1 className="text-[1rem] text-[#a1a1a1]">
                            Playlist
                          </h1>
                        </div>
                        <div className="flex flex-col gap-[1.8rem]">
                          <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                            <div>
                              <ListPlus className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                            </div>
                            <div className="flex justify-start items-start flex-col">
                              <NavigationMenuLink className="text-nowrap text-sm font-bold">
                                Create New
                              </NavigationMenuLink>
                              <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                                Start personalized playlists here.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                            <div>
                              <Heart className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                            </div>
                            <div className="flex justify-start items-start flex-col">
                              <NavigationMenuLink className="text-nowrap text-sm font-bold">
                                Favorites
                              </NavigationMenuLink>
                              <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                                Manage curated favorite playlists.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                            <div>
                              <Play className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                            </div>
                            <div className="flex justify-start items-start flex-col">
                              <NavigationMenuLink className="text-nowrap text-sm font-bold">
                                Currently Playing
                              </NavigationMenuLink>
                              <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                                View active playlists now.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[1.5rem]">
                        <div>
                          <h1 className="text-[1rem] text-[#a1a1a1] ">
                            Listening History
                          </h1>
                        </div>
                        <div className="flex flex-col gap-[1.8rem]">
                          <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                            <div>
                              <Clock className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                            </div>
                            <div className="flex justify-start items-start flex-col">
                              <NavigationMenuLink className="text-nowrap text-sm font-bold">
                                Recent
                              </NavigationMenuLink>
                              <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                                Review recently played songs and albums.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center cursor-pointer group  gap-[0.5rem]">
                            <div>
                              <Save className="text-[#a1a1a1] dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-white group-hover:bg-black duration-300 ease-out transition-colors  border w-[2rem] h-[2rem] p-1 rounded-sm" />
                            </div>
                            <div className="flex justify-start items-start flex-col">
                              <NavigationMenuLink className="text-nowrap text-sm font-bold">
                                Saved
                              </NavigationMenuLink>
                              <p className="text-xs dark:group-hover:text-white group-hover:text-black duration-300 ease-out transition-colors text-[#a1a1a1] text-nowrap">
                                Access saved songs and albums.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuIndicator className="" />
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className="text-[0.9rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                      Docs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="text-[0.9rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/resources" legacyBehavior passHref>
                    <NavigationMenuLink className="text-[0.9rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                      Resources
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/enterprise" legacyBehavior passHref>
                    <NavigationMenuLink className="text-[0.9rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                      Enterprise
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-[2rem] items-center">
            <CommandMenu />
            <div className="flex gap-[1rem] items-center">
              <ThemeToggle />
              <Link href="https://github.com/devplus2024/music-app">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link href="https://x.com/DeveloperPlus24">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link href="https://discord.gg/WhZAF8Dz">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div
            className="absolute z-[3] top-0 left-0 rounded-full bg-slate-100 dark:bg-[#000000] transition-[width]"
            style={hoverStyles}
          />
        </nav>
      </nav>
    </div>
  );
};
