"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  PlayIcon,
  PauseIcon,
  SkipForwardIcon,
  VolumeIcon,
  Radio,
  SkipBack,
  PlayCircle,
  SkipForward,
} from "lucide-react";
import Image from "next/image";
export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [currentStation, setCurrentStation] = useState("Synthwave Nights");

  const stations = [
    { name: "Synthwave Nights", genre: "Electronic" },
    { name: "Jazz Cafe", genre: "Jazz" },
    { name: "Classical Serenity", genre: "Classical" },
    { name: "Rock Legends", genre: "Rock" },
    { name: "Hip Hop Beats", genre: "Hip Hop" },
    { name: "Heart Over Mind", genre: "EDM" },
    { name: "Heart Over Mind", genre: "EDM" },
    { name: "Heart Over Mind", genre: "EDM" },
    { name: "Heart Over Mind", genre: "EDM" },
  ];

  const recentTracks = [
    { title: "Neon Cruise", artist: "RetroWave", time: "2:34" },
    { title: "Midnight Drive", artist: "SynthMaster", time: "3:45" },
    { title: "Digital Dreams", artist: "Cybernetic", time: "4:12" },
    { title: "Retro Flashback", artist: "80s Revival", time: "3:21" },
  ];

  return (
    <div className="mx-auto flex h-[calc(100vh-59px)] w-full flex-col">
      <div className="grid h-[calc(100vh-129px)] grid-cols-2 gap-8 overflow-y-auto md:grid-cols-3">
        <Card className="w-[300px] rounded-none border-y-0 border-l-0 border-r bg-[#000000]">
          <CardHeader>
            <CardTitle>Stations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {stations.map((station) => (
                <li
                  key={station.name}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{station.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {station.genre}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentStation(station.name)}
                  >
                    <Radio className="mr-2 h-4 w-4" />
                    Tune In
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div>
        <div className="flex h-[70px] w-full items-center justify-center border-t dark:border-t-[#202020]">
          <div className="flex gap-[2rem]">
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.14697 7.11102L5.11553 7.13103L4.53256 7.50201L4.08144 7.78909C3.92706 7.88733 3.92706 8.11268 4.08144 8.21092L4.53256 8.498L5.11553 8.86898L5.14697 8.88899L13.25 14.0455L13.3308 14.0969L14.0343 14.5446L14.3658 14.7555C14.5322 14.8614 14.75 14.7419 14.75 14.5446V14.1517V13.3178V13.222L14.75 2.77797V2.6822V1.84828V1.45542C14.75 1.25815 14.5322 1.1386 14.3658 1.24451L14.0343 1.45542L13.3308 1.90313L13.25 1.95455L5.14697 7.11102ZM13.25 3.73251L6.54394 8.00001L13.25 12.2675L13.25 3.73251ZM0.75 2V1.25H2.25V2V14V14.75H0.75V14V2Z"
                fill="currentColor"
              />
            </svg>

            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                fill="#666"
                fillRule="evenodd"
                d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z"
                clipRule="evenodd"
                style={{ fill: "currentColor" }}
              />
            </svg>

            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6686 8.21092C11.8229 8.11268 11.8229 7.88733 11.6686 7.78909L1.38422 1.24451C1.21779 1.1386 1 1.25815 1 1.45542V14.5446C1 14.7419 1.21779 14.8614 1.38422 14.7555L11.6686 8.21092ZM15 2V1.25H13.5V2V14V14.75H15V14V2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
