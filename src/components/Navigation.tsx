"use client";
import classNames from "classnames";
import React, {
  PointerEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
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
import { useTheme } from "next-themes";
import ShinyButton from "@/components/magicui/shiny-button";
import ShineBorder from "@/components/magicui/shine-border";
import Sparkles from "./Sparkles";
import GitHub from "./GitHub";
import Discord from "./Discord";
import X from "./x";
import Linkedin from "./Linkedin";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
export const Navigation = (): JSX.Element => {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pathname = usePathname();
  const isWebfilmPath = pathname === "/webfilm";
  const isWebAppPath = pathname === "/webapp";
  const isAi = pathname === "/ai";
  const isChatV2 = pathname === "/chat-v2";
  const isSignIn = pathname === "/signin";
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${
        isWebfilmPath || isWebAppPath || isAi || isChatV2 || isSignIn
          ? "webfilm-class"
          : ""
      } sticky top-0 z-[20]`}
    >
      <nav className="relative z-[4] flex-shrink-0 items-center justify-center min-[375px]:hidden sm:hidden md:hidden lg:flex xl:flex">
        <nav
          className={`${isScrolled ? "border-b" : ""} relative z-[1] flex w-full items-center justify-between gap-[2rem] bg-white px-[2rem] dark:border-[#202020] dark:bg-[#0c0c0c]`}
        >
          <div className="flex h-[58px] w-fit items-center gap-[1rem] text-sm">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-[1.1rem] font-bold transition-colors duration-300 ease-out dark:text-white"
              >
                Stroma
              </Link>
              <Link
                href="/"
                className="rounded-full border px-4 py-1 text-xs font-bold transition-colors duration-300 ease-out dark:text-white"
              >
                v2.6.5
              </Link>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="font-medium">
                <NavigationMenuItem>
                  <Link href="/browse" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/browse"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } ${
                        pathname === "/docs" ||
                        pathname === "/help" ||
                        pathname === "/guides"
                          ? "hidden"
                          : ""
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Browse
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/pricing"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } ${
                        pathname === "/docs" ||
                        pathname === "/help" ||
                        pathname === "/guides"
                          ? "hidden"
                          : ""
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/docs"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      {pathname === "/docs" ? "Documention" : "Docs"}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/help" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/help"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } ${
                        pathname === "/browse" ||
                        pathname === "/support" ||
                        pathname === "/radio" ||
                        pathname === "/community" ||
                        pathname === "/pricing" ||
                        pathname === "/"
                          ? "hidden"
                          : "block"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Help
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/guides" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/guides"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } ${
                        pathname === "/browse" ||
                        pathname === "/support" ||
                        pathname === "/radio" ||
                        pathname === "/community" ||
                        pathname === "/pricing" ||
                        pathname === "/"
                          ? "hidden"
                          : "block"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Guides
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/radio" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/radio"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } ${
                        pathname === "/docs" ||
                        pathname === "/help" ||
                        pathname === "/guides"
                          ? "hidden"
                          : ""
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Radio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/community" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/community"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } ${
                        pathname === "/docs" ||
                        pathname === "/help" ||
                        pathname === "/guides"
                          ? "hidden"
                          : ""
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Community
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <Link href="/aboutus" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/aboutus"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link href="/support" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/support"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } ${
                        pathname === "/docs" ||
                        pathname === "/help" ||
                        pathname === "/guides"
                          ? "hidden"
                          : ""
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Support
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1320px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-[1rem]">
            {/* <div className="flex items-center justify-center gap-[1rem]">
              <LinkPreview
                className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1"
                url="https://github.com/devplus2024"
                isStatic
                imageSrc="/Opera Snapshot_2024-10-31_172630_github.com.png"
              >
                <GitHub />
                <span className="text-sm">Github</span>
              </LinkPreview>
              <LinkPreview
                imageSrc="/Opera Snapshot_2024-10-31_172414_x.com.png"
                isStatic
                className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1"
                url="https://x.com/DeveloperPlus24"
              >
                <X />
                <span className="text-sm">Twitter</span>
              </LinkPreview>
            </div> */}
            <div className="h-[1.2rem] border-r"></div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]">
                <GitHub />
              </div>
              <div className="flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]">
                <X />
              </div>
              <ThemeToggle />
              <CommandMenu />
            </div>
            <div className="flex items-center gap-[1rem]">
              <Link
                className="flex items-center justify-center gap-3"
                href="/signin"
              >
                <Button
                  variant={"outline"}
                  className="flex h-fit items-center px-3 py-1 hover:bg-accent dark:hover:bg-[#1a1a1a]"
                >
                  {/* <Image
                    src={"/windows11.svg"}
                    className="mr-2 h-[16px] w-[16px] dark:invert-[1]"
                    width={"16"}
                    height={"16"}
                    alt="window-logo"
                  ></Image> */}
                  {/* Install */}
                  Sign In
                </Button>
              </Link>
              <Link href="/ai">
                <Button variant="outline" className="h-fit px-3 py-1">
                  {/* <Sparkles />
                  Ask Ai */}
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute left-0 top-0 z-[3] rounded-full bg-slate-100 transition-[width] dark:bg-[#000000]" />
        </nav>
      </nav>
    </div>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
