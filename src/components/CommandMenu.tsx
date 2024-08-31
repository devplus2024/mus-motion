"use client";
import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  RocketIcon,
  StickyNote,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";
import {
  MoonIcon,
  SunIcon,
  FileTextIcon,
  LaptopIcon,
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useCommandState } from "cmdk";
export function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const SubItem = (
    props: React.JSX.IntrinsicAttributes &
      Omit<
        { children?: React.ReactNode } & Omit<
          Pick<
            Pick<
              React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLDivElement>,
                HTMLDivElement
              >,
              "key" | keyof React.HTMLAttributes<HTMLDivElement>
            > & { ref?: React.Ref<HTMLDivElement> } & { asChild?: boolean },
            "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild"
          >,
          "onSelect" | "disabled" | "value"
        > & {
            disabled?: boolean;
            onSelect?: (value: string) => void;
            value?: string;
            keywords?: string[];
            forceMount?: boolean;
          } & React.RefAttributes<HTMLDivElement>,
        "ref"
      > &
      React.RefAttributes<HTMLDivElement>,
  ) => {
    const search = useCommandState((state) => state.search);
    if (!search) return null;
    return <CommandItem {...props} />;
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        onClick={() => setOpen((open) => !open)}
        className="group flex h-[36px] w-[260px] cursor-pointer items-center justify-between gap-4 rounded-[8px] border px-2 transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]"
      >
        <div className="flex h-full items-center gap-4 text-[#7c7c7c] transition-all duration-200 ease-out dark:group-hover:text-white">
          <div className="flex h-full items-center border-r pr-2">
            <MagnifyingGlassIcon width="21" height="21" />
          </div>
        </div>
        <p className="select-none text-sm text-[#7c7c7c] transition-colors duration-300 ease-out dark:group-hover:text-white">
          Search documetion...
        </p>
        <p className="text-sm text-muted-foreground">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </p>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="custom_command_scroll h-[500px]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Link">
            <CommandItem
              onSelect={() => {
                router.push("/");
                setOpen((open) => !open);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/docs");
                setOpen((open) => !open);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Docs</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/pricing");
                setOpen((open) => !open);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Pricing</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/resources");
                setOpen((open) => !open);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Resources</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/enterprise");
                setOpen((open) => !open);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Enterprise</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/docs");
                setOpen((open) => !open);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Play Now</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/docs");
                setOpen((open) => !open);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Download</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/chat");
                setOpen((open) => !open);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Chat</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/webfilm");
                setOpen((open) => !open);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>WebFilm</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem
              onSelect={() => {
                setTheme("light");
                setOpen((open) => !open);
              }}
            >
              <SunIcon className="mr-2 h-4 w-4" />
              <span>Light</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("dark");
                setOpen((open) => !open);
              }}
            >
              <MoonIcon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("system");
                setOpen((open) => !open);
              }}
            >
              <LaptopIcon className="mr-2 h-4 w-4" />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
