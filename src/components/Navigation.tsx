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
import ModeToggle from "./mode-toggle";
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
import { Switch } from "@/components/ui/switch";
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
              <LogoImage />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger
                    className={classNames(
                      "text-sm relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  text-[#7c7c7c] cursor-pointer select-none transition-colors",
                      {
                        "dark:text-white": hoveredTabIndex === 0,
                        "dark:bg-[#000000]": hoveredTabIndex === 0,
                      }
                    )}
                    ref={(el) => {
                      buttonRefs.current[0] = el;
                    }}
                    onPointerEnter={(e) => onEnterTab(e, 0)}
                    onFocus={(e) => onEnterTab(e, 0)}
                  >
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
                  <NavigationMenuTrigger
                    className={classNames(
                      "text-sm relative rounded-full flex items-center h-7 px-3   text-[#7c7c7c] cursor-pointer select-none transition-colors",
                      {
                        "dark:text-white": hoveredTabIndex === 1,
                      }
                    )}
                    ref={(el) => {
                      buttonRefs.current[1] = el;
                    }}
                    onPointerEnter={(e) => onEnterTab(e, 1)}
                    onFocus={(e) => onEnterTab(e, 1)}
                  >
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
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <button
                        className={classNames(
                          "group inline-flex h-7 w-max items-center dark:hover:bg-[#1f1f1f] justify-center rounded-full  px-3  text-sm  transition-colors text-[#7c7c7c] hover:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-white data-[state=open]:bg-accent/50 data-[state=open]:text-white",
                          {
                            "dark:text-white": hoveredTabIndex === 2,
                          }
                        )}
                        ref={(el) => {
                          buttonRefs.current[2] = el;
                        }}
                        onPointerEnter={(e) => onEnterTab(e, 2)}
                        onFocus={(e) => onEnterTab(e, 2)}
                      >
                        Docs
                      </button>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <button
                        className={classNames(
                          "group inline-flex h-7 w-max items-center dark:hover:bg-[#1f1f1f] justify-center rounded-full  px-3  text-sm  transition-colors  text-[#7c7c7c] hover:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-white data-[state=open]:bg-accent/50 data-[state=open]:text-white",
                          {
                            "dark:text-white": hoveredTabIndex === 3,
                          }
                        )}
                        ref={(el) => {
                          buttonRefs.current[3] = el;
                        }}
                        onPointerEnter={(e) => onEnterTab(e, 3)}
                        onFocus={(e) => onEnterTab(e, 3)}
                      >
                        Pricing
                      </button>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/resources" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <button
                        className={classNames(
                          "group inline-flex h-7 w-max items-center dark:hover:bg-[#1f1f1f] justify-center rounded-full  px-3  text-sm text-[#7c7c7c] transition-colors  hover:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-white data-[state=open]:bg-accent/50 data-[state=open]:text-white",
                          {
                            "dark:text-white": hoveredTabIndex === 4,
                          }
                        )}
                        ref={(el) => {
                          buttonRefs.current[4] = el;
                        }}
                        onPointerEnter={(e) => onEnterTab(e, 4)}
                        onFocus={(e) => onEnterTab(e, 4)}
                      >
                        Resources
                      </button>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/enterprise" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <button
                        className={classNames(
                          "group inline-flex h-7 w-max items-center dark:hover:bg-[#1f1f1f] justify-center rounded-full  px-3  text-sm  transition-colors  text-[#7c7c7c] hover:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-white data-[state=open]:bg-accent/50 data-[state=open]:text-white",
                          {
                            "dark:text-white": hoveredTabIndex === 5,
                          }
                        )}
                        ref={(el) => {
                          buttonRefs.current[5] = el;
                        }}
                        onPointerEnter={(e) => onEnterTab(e, 5)}
                        onFocus={(e) => onEnterTab(e, 5)}
                      >
                        Enterprise
                      </button>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-[2rem] items-center">
		    <CommandMenu />
			<div className="flex gap-[1rem] items-center">
			  <Switch defaultChecked id="theme-mode" />
			  <div className="cursor-pointer hidden h-[24px] border-r"></div>   
			  <Link href="https://github.com/devplus2024/music-app">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={21}
					height={21}
					fill="currentColor"
					className="bi bi-github"
					viewBox="0 0 16 16"
				  >
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
				</svg>
			  </Link>
			  <Link href="https://x.com/DeveloperPlus24">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={21}
					height={21}
					fill="currentColor"
					className="bi bi-twitter"
					viewBox="0 0 16 16"
				  >
					<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
				</svg>
			  </Link>
			  <Link href="https://discord.gg/WhZAF8Dz">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					fill="currentColor"
					className="bi bi-discord"
					viewBox="0 0 16 16"
				  >
					<path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
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
