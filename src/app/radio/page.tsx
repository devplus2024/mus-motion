"use client";
import { useRef, useState } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [currentStation, setCurrentStation] = useState("Synthwave Nights");
  const [currentGenre, setCurrentGenre] = useState("Electronic");

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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    // Sử dụng phương thức play() để phát âm thanh
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <div className="mx-auto flex h-[calc(100vh-59px)] w-full flex-col">
      <div className="flex h-[calc(100vh-129px)] w-full justify-between">
        <ScrollArea className="w-[300px] flex-shrink-0">
          <Card className="w-[300px] rounded-none border-y-0 border-l-0 border-r bg-[#000000]">
            <CardHeader>
              <CardTitle>Stations</CardTitle>
            </CardHeader>
            <CardContent className=" ">
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
                      onClick={() => {
                        setCurrentStation(station.name);
                        setCurrentGenre(station.genre);
                      }}
                    >
                      <Radio className="mr-2 h-4 w-4" />
                      Tune In
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollArea>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-[2rem]">
            <div className="h-[14rem] w-[14rem] rounded-lg bg-[#0c0c0c]">
              <audio
                id="audio"
                ref={audioRef}
                src="/DaiDienHauSinhTuKienLouisRemix-VuongNgocManh-14125736.mp3"
                loop
                autoPlay
                className="hidden"
              ></audio>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-medium">{currentStation}</h1>
              <p className="text-md text-[#a1a1a1]">{currentGenre}</p>
            </div>
          </div>
        </div>
        <ScrollArea className="w-[300px] flex-shrink-0">
          <Card className="w-[300px] rounded-none border-y-0 border-l border-r bg-[#000000]">
            <CardHeader>
              <CardTitle>Stations</CardTitle>
            </CardHeader>
            <CardContent className=" ">
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
                      onClick={() => {
                        setCurrentStation(station.name);
                        setCurrentGenre(station.genre);
                      }}
                    >
                      <Radio className="mr-2 h-4 w-4" />
                      Tune In
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollArea>
      </div>
      <div>
        <div className="flex h-[70px] w-full items-center justify-between border-t dark:border-t-[#202020]">
          <div className="flex w-[299px] items-center gap-3 pl-[1rem]">
            <div className="h-[2rem] w-[2rem] rounded-md bg-[#0c0c0c]"></div>
            <div className="flex flex-col gap-1">
              <h1 className="text-sm font-medium">{currentStation}</h1>
              <p className="text-xs text-[#a1a1a1]">{currentGenre}</p>
            </div>
          </div>
          <div className="flex w-[20rem] flex-col items-center justify-center gap-[1rem]">
            <div className="flex gap-[2rem]">
              <Button
                variant={"outline"}
                size={"icon"}
                className="h-[1.8rem] w-[1.8rem]"
              >
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
                    d="M4.08144 8.21092C3.92706 8.11268 3.92706 7.88733 4.08144 7.78909L14.3658 1.24451C14.5322 1.1386 14.75 1.25815 14.75 1.45542L14.75 14.5446C14.75 14.7419 14.5322 14.8614 14.3658 14.7555L4.08144 8.21092ZM0.75 2V1.25H2.25V2V14V14.75H0.75V14V2Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={`${isPlaying ? "hidden" : "flex"} h-[1.8rem] w-[1.8rem]`}
                onClick={() => {
                  setIsPlaying(true);
                  handlePlay();
                }}
              >
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
                    d="M14.5528 7.77638C14.737 7.86851 14.737 8.13147 14.5528 8.2236L1.3618 14.8191C1.19558 14.9022 1 14.7813 1 14.5955L1 1.4045C1 1.21865 1.19558 1.09778 1.3618 1.18089L14.5528 7.77638Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`${!isPlaying ? "hidden" : "flex"} h-[1.8rem] w-[1.8rem]`}
                onClick={() => {
                  setIsPlaying(false);
                  handlePlay();
                }}
              >
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
                    d="M5.5 2.5V1.75H4V2.5V13.5V14.25H5.5V13.5V2.5ZM12 2.5V1.75H10.5V2.5V13.5V14.25H12V13.5V2.5Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>

              <Button
                variant="outline"
                size={"icon"}
                className="h-[1.8rem] w-[1.8rem]"
              >
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
              </Button>
            </div>
            <div className="">
              <Slider
                className="w-[20rem]"
                defaultValue={[33]}
                max={100}
                step={1}
              />
            </div>
          </div>
          <div className="flex w-[299px] items-center justify-end gap-[1.25rem] pr-[1rem]">
            {/* <svg
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
                d="M7.06463 3.20474C5.79164 1.93175 3.72772 1.93175 2.45474 3.20474C1.18175 4.47773 1.18175 6.54166 2.45474 7.81465L8 13.3599L13.5453 7.81465C14.8182 6.54166 14.8182 4.47773 13.5453 3.20474C12.2723 1.93175 10.2084 1.93175 8.93537 3.20474L8.53033 3.60979L8 4.14012L7.46967 3.60979L7.06463 3.20474ZM8 2.02321C6.13348 0.286219 3.21165 0.326509 1.39408 2.14408C-0.464694 4.00286 -0.464691 7.01653 1.39408 8.87531L7.46967 14.9509L8 15.4812L8.53033 14.9509L14.6059 8.87531C16.4647 7.01653 16.4647 4.00286 14.6059 2.14408C12.7884 0.326509 9.86653 0.286221 8 2.02321Z"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.00001 0.433594L8.65845 1.64093L10.5908 5.18412L14.5577 5.92698L15.9094 6.18011L14.9646 7.17942L12.192 10.1121L12.7113 14.1144L12.8883 15.4782L11.6459 14.8884L8.00001 13.1577L4.35408 14.8884L3.11173 15.4782L3.28869 14.1144L3.80802 10.1121L1.03538 7.17942L0.0906067 6.18011L1.44233 5.92698L5.40922 5.18412L7.34156 1.64093L8.00001 0.433594ZM8.00001 3.56646L6.55565 6.21487L6.38519 6.52743L6.03525 6.59296L3.07014 7.14822L5.14259 9.34029L5.38718 9.59899L5.34137 9.95205L4.95318 12.9436L7.67838 11.65L8.00001 11.4973L8.32163 11.65L11.0468 12.9436L10.6586 9.95205L10.6128 9.59899L10.8574 9.34029L12.9299 7.14822L9.96476 6.59296L9.61482 6.52743L9.44436 6.21487L8.00001 3.56646Z"
                fill="currentColor"
              />
            </svg> */}

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
                d="M0 5V11C0 11.5523 0.447715 12 1 12H3L10 16V0L3 4H1C0.447715 4 0 4.44772 0 5ZM14.2585 2.96051L14.6728 3.58567C15.5116 4.85121 16 6.3697 16 8C16 9.6303 15.5116 11.1488 14.6728 12.4143L14.2585 13.0395L13.0082 12.2108L13.4225 11.5857C14.1034 10.5582 14.5 9.32657 14.5 8C14.5 6.67343 14.1034 5.44176 13.4225 4.41433L13.0082 3.78916L14.2585 2.96051ZM12.059 4.98506L12.4125 5.64655C12.7876 6.34871 13 7.15067 13 8C13 8.84933 12.7876 9.65129 12.4125 10.3534L12.059 11.0149L10.736 10.3081L11.0895 9.64655C11.3513 9.15657 11.5 8.59676 11.5 8C11.5 7.40324 11.3513 6.84344 11.0895 6.35345L10.736 5.69195L12.059 4.98506Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
