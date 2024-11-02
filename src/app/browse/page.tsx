"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon, StarIcon } from "lucide-react";
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
import Image from "next/image";

export default function BrowsePage() {
  // This would typically come from a backend API
  interface TrackData {
    id: string;
    name: string;
    album: {
      images: { url: string; height: number; width: number }[];
      name: string;
    };
    artists: { name: string }[];
  }

  const softwareProducts = [
    {
      id: 1,
      name: "BeatMaker Pro",
      category: "DAW",
      rating: 4.5,
      price: "$199.99",
    },
    {
      id: 2,
      name: "SynthWizard",
      category: "Synthesizer",
      rating: 4.2,
      price: "$149.99",
    },
    {
      id: 3,
      name: "DrumCraft",
      category: "Drums",
      rating: 4.7,
      price: "$79.99",
    },
    {
      id: 4,
      name: "MixMaster",
      category: "Mixing",
      rating: 4.4,
      price: "$129.99",
    },
    {
      id: 5,
      name: "VocalEnhance",
      category: "Vocal Processing",
      rating: 4.3,
      price: "$89.99",
    },
    {
      id: 6,
      name: "GuitarSuite",
      category: "Guitar",
      rating: 4.6,
      price: "$109.99",
    },
  ];

  const categories = [
    "DAW",
    "Synthesizer",
    "Drums",
    "Mixing",
    "Vocal Processing",
    "Guitar",
    "Bass",
    "Mastering",
  ];
  const [tracks, setTracks] = useState<TrackData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch("/api/random-tracks");
        if (!res.ok) {
          throw new Error("Failed to fetch tracks");
        }
        const data: TrackData[] = await res.json();

        // Loại bỏ bài hát trùng lặp dựa trên `id`
        const uniqueTracks = Array.from(
          new Map(data.map((track) => [track.id, track])).values(),
        );

        setTracks(uniqueTracks);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchTracks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (tracks.length === 0) {
    setCheck(true);
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        {/* Sidebar */}

        {/* Main Content */}
        <div className="md:w-3/4 xl:w-full">
          <div className="mb-6 flex items-center justify-between gap-[3rem]">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for favorite songs"
                className="w-full pl-[3rem] placeholder:text-[#7c7c7c]"
              />
              <MagnifyingGlassIcon
                width="21"
                height="21"
                className="absolute left-[16px] top-1/2 -translate-y-1/2"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tracks.map((track) => (
              <Card key={track.id} className={`bg-[#000000]`}>
                <CardHeader
                  className={`${!check ? "animate-pulse rounded-md bg-primary/10" : ""}`}
                >
                  <CardTitle>{track.name}</CardTitle>
                </CardHeader>
                <CardContent
                  className={`${!check ? "animate-pulse rounded-md bg-primary/10" : ""}`}
                >
                  <Image
                    src={track.album.images[0]?.url || "/placeholder.jpg"}
                    alt={track.name}
                    style={{ maxWidth: "100%", height: "auto" }}
                    unoptimized
                    width={"200"}
                    height={"300"}
                    className="mb-4 h-[12rem] w-full rounded object-cover"
                  />
                  <p className="mb-2 text-sm text-muted-foreground">
                    Artist:{" "}
                    {track.artists.map((artist) => artist.name).join(", ")}
                  </p>
                  <div className="mb-2 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`? "fill-yellow-400 text-yellow-400" : "text-gray-300" } h-4 w-4`}
                      />
                    ))}
                    <span className="ml-2 text-sm"></span>
                  </div>
                  <p className="font-bold"></p>
                </CardContent>
                <CardFooter
                  className={`${!check ? "animate-pulse rounded-md bg-primary/10" : ""}`}
                >
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-1">
              Previous
            </Button>
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
