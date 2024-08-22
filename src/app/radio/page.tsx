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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Player Section */}
        <Card className="md:col-span-2 bg-[#000000]">
          <CardHeader>
            <CardTitle>Now Playing</CardTitle>
            <CardDescription>{currentStation}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Neon Cruise</h2>
                <p className="text-muted-foreground">RetroWave</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <PauseIcon className="h-4 w-4" />
                  ) : (
                    <PlayIcon className="h-4 w-4" />
                  )}
                </Button>
                <Button variant="outline" size="icon">
                  <SkipForwardIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <VolumeIcon className="h-5 w-5" />
                <Slider
                  value={[volume]}
                  max={100}
                  step={1}
                  className="w-full"
                  onValueChange={(value) => setVolume(value[0])}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stations List */}
        <Card className="bg-[#000000]">
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
                    <Radio className="h-4 w-4 mr-2" />
                    Tune In
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Recently Played Tracks */}
        <Card className="md:col-span-2 bg-[#000000]">
          <CardHeader>
            <CardTitle>Recently Played</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentTracks.map((track, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{track.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {track.artist}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {track.time}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Album Art / Track Info */}
        <Card className="bg-[#000000]">
          <CardHeader>
            <CardTitle>Album Art</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image
              src={`/image/5-1.png?height=100&width=200&text`}
              width={"200"}
              alt="prw"
              height={"300"}
              className="w-full h-32 object-cover mb-4 rounded"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
