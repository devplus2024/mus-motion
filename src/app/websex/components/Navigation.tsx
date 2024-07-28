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
import { useRouter } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
import { CommandMenu } from "./CommandMenu";
import LogoImage from "./LogoImage";
import { ThemeToggle } from "./mode-toggle";
import { DropdownMenuUser } from "./drop-menu-user";
export const Navigation = (): JSX.Element => {
  return (
    <div className="sticky top-0 z-[20]">
      <nav className="w-full  px-[2rem]  relative border-b bg-white dark:bg-[#000000] dark:border-[#202020]  items-center  flex justify-between gap-[2rem] z-[1]">
        <div className="h-[66px] text-sm    w-fit items-center  flex gap-[2rem] ">
          <Link
            href="/"
            className="dark:text-white text-[1.5rem] duration-300 transition-colors ease-out"
          >
            <p className="font-bold">WebFilm</p>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuIndicator className="" />
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className="text-[1rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="text-[1rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                    Movies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink className="text-[1rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                    TV Shows
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/enterprise" legacyBehavior passHref>
                  <NavigationMenuLink className="text-[1rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                    Recently Added
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/enterprise" legacyBehavior passHref>
                  <NavigationMenuLink className="text-[1rem] relative rounded-full flex items-center h-7 px-3 duration-300 ease-out  dark:text-[#9b9b9b] dark:hover:text-white  cursor-pointer select-none transition-colors">
                    My List
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
            <DropdownMenuUser />
          </div>
        </div>
      </nav>
    </div>
  );
};
