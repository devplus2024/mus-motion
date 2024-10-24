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
  const docsTitle = [
    {
      id: "1",
      name: "Home",
      src: "/",
    },
    {
      id: "1",
      name: "Browse",
      src: "browse",
    },
    {
      id: "1",
      name: "Pricing",
      src: "pricing",
    },
    {
      id: "1",
      name: "Docs",
      src: "docs",
    },
    {
      id: "1",
      name: "Radio",
      src: "radio",
    },
    {
      id: "1",
      name: "Community",
      src: "community",
    },
    {
      id: "1",
      name: "Support",
      src: "support",
    },
  ];
  return (
    <>
      <div
        onClick={() => setOpen((open) => !open)}
        className="group flex h-[36px] w-[40px] cursor-pointer items-center justify-center rounded-md transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]"
      >
        <div className="flex h-full items-center justify-center transition-all duration-200 ease-out dark:text-[#ffffff] dark:group-hover:text-white">
          <div className="flex h-full items-center">
            <MagnifyingGlassIcon width="21" height="21" />
          </div>
        </div>
        {/* <p className="select-none text-sm text-[#7c7c7c] transition-colors duration-300 ease-out dark:group-hover:text-white">
          Search documetion...
        </p> */}
        {/* <p className="text-sm text-muted-foreground">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </p> */}
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="custom_command_scroll h-[500px]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Link">
            {docsTitle.map((items_cm) => (
              <CommandItem
                key={items_cm.id}
                onSelect={() => {
                  router.push(`${items_cm.src}`);
                  setOpen((open) => !open);
                }}
              >
                <svg
                  data-testid="geist-icon"
                  height={16}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={16}
                  className="mr-2"
                  style={{ color: "currentcolor" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.5 13.5V6.5V5.41421C14.5 5.149 14.3946 4.89464 14.2071 4.70711L9.79289 0.292893C9.60536 0.105357 9.351 0 9.08579 0H8H3H1.5V1.5V13.5C1.5 14.8807 2.61929 16 4 16H12C13.3807 16 14.5 14.8807 14.5 13.5ZM13 13.5V6.5H9.5H8V5V1.5H3V13.5C3 14.0523 3.44772 14.5 4 14.5H12C12.5523 14.5 13 14.0523 13 13.5ZM9.5 5V2.12132L12.3787 5H9.5ZM5.13 5.00062H4.505V6.25062H5.13H6H6.625V5.00062H6H5.13ZM4.505 8H5.13H11H11.625V9.25H11H5.13H4.505V8ZM5.13 11H4.505V12.25H5.13H11H11.625V11H11H5.13Z"
                    fill="currentColor"
                  />
                </svg>

                <span>{items_cm.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem
              onSelect={() => {
                setTheme("light");
                setOpen((open) => !open);
              }}
            >
              <SunIcon className="mr-2" />
              <span>Light</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("dark");
                setOpen((open) => !open);
              }}
            >
              <MoonIcon className="mr-2" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("system");
                setOpen((open) => !open);
              }}
            >
              <LaptopIcon className="mr-2" />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
