"use client";

import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const { toast } = useToast();
  const list_version = [
    {
      id: 1,
      version: "10.8.9",
      day: "22/12/2024",
      description:
        "Enhanced music loading speed, added an advanced equalizer, and fixed critical issues for a smoother experience.",
      features: [
        {
          id: 1_1,
          text: "Added a 10-band Equalizer with multiple presets.",
        },
        {
          id: 1_2,
          text: "Introduced real-time synchronized lyrics.",
        },
        {
          id: 1_3,
          text: "Enabled high-quality offline downloads (up to FLAC).",
        },
        {
          id: 1_4,
          text: "Added a Recently Played section for quick access.",
        },
      ],
      improvements: [
        {
          id: 1_1,
          text: "Improved playlist loading speed by 30%.",
        },
        {
          id: 1_2,
          text: "Optimized UI responsiveness when switching songs.",
        },
        {
          id: 1_3,
          text: "Enhanced music recommendation algorithm.",
        },
      ],
      fixes: [
        {
          id: 1_1,
          text: "Fixed an issue where offline songs would disappear.",
        },
        {
          id: 1_2,
          text: "Resolved high CPU usage when playing long playlists.",
        },
      ],
    },
    {
      id: 1,
      version: "9.8.4",
      day: "7/9/2024",
      description:
        "Updated the recommendation engine and fixed offline playback issues.",
      features: [
        {
          id: 1_1,
          text: "Added a 10-band Equalizer with multiple presets.",
        },
        {
          id: 1_2,
          text: "Introduced real-time synchronized lyrics.",
        },
        {
          id: 1_3,
          text: "Enabled high-quality offline downloads (up to FLAC).",
        },
        {
          id: 1_4,
          text: "Added a Recently Played section for quick access.",
        },
      ],
      improvements: [
        {
          id: 1_1,
          text: "Improved playlist loading speed by 30%.",
        },
        {
          id: 1_2,
          text: "Optimized UI responsiveness when switching songs.",
        },
        {
          id: 1_3,
          text: "Enhanced music recommendation algorithm.",
        },
      ],
      fixes: [
        {
          id: 1_1,
          text: "Fixed an issue where offline songs would disappear.",
        },
        {
          id: 1_2,
          text: "Resolved high CPU usage when playing long playlists.",
        },
      ],
    },
    {
      id: 1,
      version: "8.2.4",
      day: "26/8/2024",
      description: "Launched a modern, redesigned UI with dark mode support.",
      features: [
        {
          id: 1_1,
          text: "Added a 10-band Equalizer with multiple presets.",
        },
        {
          id: 1_2,
          text: "Introduced real-time synchronized lyrics.",
        },
        {
          id: 1_3,
          text: "Enabled high-quality offline downloads (up to FLAC).",
        },
        {
          id: 1_4,
          text: "Added a Recently Played section for quick access.",
        },
      ],
      improvements: [
        {
          id: 1_1,
          text: "Improved playlist loading speed by 30%.",
        },
        {
          id: 1_2,
          text: "Optimized UI responsiveness when switching songs.",
        },
        {
          id: 1_3,
          text: "Enhanced music recommendation algorithm.",
        },
      ],
      fixes: [
        {
          id: 1_1,
          text: "Fixed an issue where offline songs would disappear.",
        },
        {
          id: 1_2,
          text: "Resolved high CPU usage when playing long playlists.",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="mt-[3rem] text-center text-xl font-bold">
        <p>The Release Version </p>
      </div>
      <div className="my-[4rem] grid grid-cols-3 justify-items-center gap-[3rem] px-[2rem]">
        {list_version.map((list) => (
          <div
            key={list.id}
            className="flex w-[450px] flex-col gap-4 rounded-lg border p-4"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="text-xl font-bold">Stroma v{list.version}</p>
                <div className="flex items-center gap-2">
                  {" "}
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
                      d="M5.5 0.5V1.25V2H10.5V1.25V0.5H12V1.25V2H14H15.5V3.5V13.5C15.5 14.8807 14.3807 16 13 16H3C1.61929 16 0.5 14.8807 0.5 13.5V3.5V2H2H4V1.25V0.5H5.5ZM2 3.5H14V6H2V3.5ZM2 7.5V13.5C2 14.0523 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.0523 14 13.5V7.5H2Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-sm font-semibold">{list.day}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm text-[#a1a1a1]">{list.description}</p>
              </div>
              <div>
                <p className="font-semibold">Change:</p>
                <div className="mt-2 pl-[1rem]">
                  <div className="flex items-center gap-2">
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
                        d="M2.5 5.5V2.5H5.5V5.5H2.5ZM1 2C1 1.44772 1.44772 1 2 1H6C6.55228 1 7 1.44772 7 2V6C7 6.55228 6.55228 7 6 7H2C1.44772 7 1 6.55228 1 6V2ZM2.5 13.5V10.5H5.5V13.5H2.5ZM1 10C1 9.44772 1.44772 9 2 9H6C6.55228 9 7 9.44772 7 10V14C7 14.5523 6.55228 15 6 15H2C1.44772 15 1 14.5523 1 14V10ZM10.5 2.5V5.5H13.5V2.5H10.5ZM10 1C9.44772 1 9 1.44772 9 2V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V2C15 1.44772 14.5523 1 14 1H10ZM10.5 13.5V10.5H13.5V13.5H10.5ZM9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V10Z"
                        fill="currentColor"
                      />
                    </svg>

                    <p className="text-sm">New Features:</p>
                  </div>
                  <ul className="mt-2 flex flex-col gap-2 pl-[1rem]">
                    {list.features.map((gh) => (
                      <li
                        key={gh.id}
                        className="flex items-center gap-2 text-sm text-[#a1a1a1]"
                      >
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        {gh.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2 pl-[1rem]">
                  <div className="flex items-center gap-2">
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
                        d="M7.15714 0L2.33264 9.40776L1.77252 10.5H3.00001H7.00001C7.13808 10.5 7.25001 10.6119 7.25001 10.75V16H8.84288L13.6674 6.59224L14.2275 5.5H13H9.00001C8.86194 5.5 8.75001 5.38807 8.75001 5.25V0H7.15714ZM7.00001 9H4.22749L7.25001 3.1061V5.25C7.25001 6.2165 8.03351 7 9.00001 7H11.7725L8.75001 12.8939V10.75C8.75001 9.7835 7.96651 9 7.00001 9Z"
                        fill="currentColor"
                      />
                    </svg>

                    <p className="text-sm">Improvements:</p>
                  </div>
                  <ul className="mt-2 flex flex-col gap-2 pl-[1rem]">
                    {list.improvements.map((gh) => (
                      <li
                        key={gh.id}
                        className="flex items-center gap-2 text-sm text-[#a1a1a1]"
                      >
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        {gh.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2 pl-[1rem]">
                  <div className="flex items-center gap-2">
                    <svg
                      data-testid="geist-icon"
                      height={16}
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width={16}
                      style={{ color: "currentcolor" }}
                    >
                      <path
                        d="M12.798 1.24199L13.3283 1.77232L14.0567 1.04389L13.1398 0.574402L12.798 1.24199ZM9.95705 4.0829L9.42672 3.55257L9.95705 4.0829ZM6.5844 6.95555L7.11473 7.48588L7.46767 7.13295L7.27837 6.67111L6.5844 6.95555ZM1.49995 12.04L2.03027 12.5703L2.03028 12.5703L1.49995 12.04ZM1.49994 14.54L0.969615 15.0703H0.969615L1.49994 14.54ZM3.99995 14.54L4.53028 15.0703L3.99995 14.54ZM9.10147 9.43848L9.37633 8.74066L8.91883 8.56046L8.57114 8.90815L9.10147 9.43848ZM14.7848 3.25519L15.4568 2.92229L14.9931 1.98617L14.2544 2.72486L14.7848 3.25519ZM11.9571 6.0829L11.4267 5.55257L11.9571 6.0829ZM10.5428 6.0829L11.0732 5.55257L11.0732 5.55257L10.5428 6.0829ZM9.95705 5.49711L9.42672 6.02744L9.42672 6.02745L9.95705 5.49711ZM12.2676 0.711655L9.42672 3.55257L10.4874 4.61323L13.3283 1.77232L12.2676 0.711655ZM10.7499 1.5C11.3659 1.5 11.9452 1.64794 12.4562 1.90957L13.1398 0.574402C12.4221 0.206958 11.6091 0 10.7499 0V1.5ZM6.99994 5.25C6.99994 3.17893 8.67888 1.5 10.7499 1.5V0C7.85045 0 5.49994 2.3505 5.49994 5.25H6.99994ZM7.27837 6.67111C7.09913 6.23381 6.99994 5.75443 6.99994 5.25H5.49994C5.49994 5.95288 5.63848 6.62528 5.89043 7.23999L7.27837 6.67111ZM6.05407 6.42522L0.969615 11.5097L2.03028 12.5703L7.11473 7.48588L6.05407 6.42522ZM0.969616 11.5097C-0.0136344 12.4929 -0.013635 14.0871 0.969615 15.0703L2.03027 14.0097C1.63281 13.6122 1.63281 12.9678 2.03027 12.5703L0.969616 11.5097ZM0.969615 15.0703C1.95287 16.0536 3.54703 16.0536 4.53028 15.0703L3.46962 14.0097C3.07215 14.4071 2.42774 14.4071 2.03027 14.0097L0.969615 15.0703ZM4.53028 15.0703L9.6318 9.96881L8.57114 8.90815L3.46962 14.0097L4.53028 15.0703ZM10.7499 9C10.2637 9 9.80071 8.90782 9.37633 8.74066L8.82661 10.1363C9.4232 10.3713 10.0724 10.5 10.7499 10.5V9ZM14.4999 5.25C14.4999 7.32107 12.821 9 10.7499 9V10.5C13.6494 10.5 15.9999 8.1495 15.9999 5.25H14.4999ZM14.1127 3.5881C14.3604 4.08811 14.4999 4.65168 14.4999 5.25H15.9999C15.9999 4.4156 15.8047 3.62465 15.4568 2.92229L14.1127 3.5881ZM12.4874 6.61323L15.3151 3.78552L14.2544 2.72486L11.4267 5.55257L12.4874 6.61323ZM10.0125 6.61323C10.6959 7.29665 11.804 7.29665 12.4874 6.61323L11.4267 5.55257C11.3291 5.6502 11.1708 5.6502 11.0732 5.55257L10.0125 6.61323ZM9.42672 6.02745L10.0125 6.61323L11.0732 5.55257L10.4874 4.96678L9.42672 6.02745ZM9.42672 3.55257C8.7433 4.23599 8.7433 5.34403 9.42672 6.02744L10.4874 4.96678C10.3898 4.86915 10.3897 4.71086 10.4874 4.61323L9.42672 3.55257Z"
                        fill="currentColor"
                      />
                    </svg>

                    <p className="text-sm">Fixed:</p>
                  </div>
                  <ul className="mt-2 flex flex-col gap-2 pl-[1rem]">
                    {list.fixes.map((gh) => (
                      <li
                        key={gh.id}
                        className="flex items-center gap-2 text-sm text-[#a1a1a1]"
                      >
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        {gh.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex gap-[4rem]">
              <Button className="w-full" variant={"outline"}>
                Download
              </Button>
              <Button className="w-full">View It</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
