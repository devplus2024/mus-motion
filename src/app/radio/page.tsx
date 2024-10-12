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
  ];

  const recentTracks = [
    { title: "Neon Cruise", artist: "RetroWave", time: "2:34" },
    { title: "Midnight Drive", artist: "SynthMaster", time: "3:45" },
    { title: "Digital Dreams", artist: "Cybernetic", time: "4:12" },
    { title: "Retro Flashback", artist: "80s Revival", time: "3:21" },
  ];

  return (
    <div className="mx-auto flex h-[calc(100vh-59px)] w-full flex-col">
      <div className="grid h-full grid-cols-2 gap-8 md:grid-cols-3">
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
            <SkipBack />
            <PlayCircle />
            <SkipForward />
          </div>
        </div>
      </div>
    </div>
  );
}
