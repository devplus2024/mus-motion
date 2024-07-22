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
          className="w-full  px-[2rem]  relative border bg-white dark:bg-[#000000] dark:border-[#202020]  items-center rounded-md flex justify-between gap-[2rem] z-[1]"
        >
          <div className="h-[56px] text-sm    w-fit items-center  flex gap-[2rem] ">
            <Link
              href="/"
              className="dark:text-white text-[1.5rem] duration-300 transition-colors ease-out"
            >
              <Image
                src="/logo.svg"
                width="30"
                height="30"
                className="w-[30px] h-[30px]"
                alt="logo"
              />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger
                    className={classNames(
                      "text-sm relative rounded-full flex items-center h-7 px-3    text-[#a1a1a1] cursor-pointer select-none transition-colors",
                      {
                        "dark:text-white": hoveredTabIndex === 0,
                        "dark:bg-[#1f1f1f]": hoveredTabIndex === 0,
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
                      "text-sm relative rounded-full flex items-center h-7 px-3   text-[#a1a1a1] cursor-pointer select-none transition-colors",
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
                          "group inline-flex h-7 w-max items-center dark:hover:bg-[#1f1f1f] justify-center rounded-full  px-3  text-sm font-medium transition-colors  text-[#a1a1a1] hover:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-white data-[state=open]:bg-accent/50 data-[state=open]:text-white",
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
                        Documention
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
                          "group inline-flex h-7 w-max items-center dark:hover:bg-[#1f1f1f] justify-center rounded-full  px-3  text-sm font-medium transition-colors  text-[#a1a1a1] hover:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-white data-[state=open]:bg-accent/50 data-[state=open]:text-white",
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
                  <Link href="/resource" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <button
                        className={classNames(
                          "group inline-flex h-7 w-max items-center dark:hover:bg-[#1f1f1f] justify-center rounded-full  px-3  text-sm font-medium transition-colors  text-[#a1a1a1] hover:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-white data-[state=open]:bg-accent/50 data-[state=open]:text-white",
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
                          "group inline-flex h-7 w-max items-center dark:hover:bg-[#1f1f1f] justify-center rounded-full  px-3  text-sm font-medium transition-colors  text-[#a1a1a1] hover:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-white data-[state=open]:bg-accent/50 data-[state=open]:text-white",
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
          <div className="flex gap-[2rem]">
            <Button variant={"outline"}>Play Now</Button>
            <Button>Download</Button>
          </div>
          <div
            className="absolute z-[3] top-0 left-0 rounded-full bg-slate-100 dark:bg-[#1f1f1f] transition-[width]"
            style={hoverStyles}
          />
        </nav>
      </nav>
    </div>
  );
};
