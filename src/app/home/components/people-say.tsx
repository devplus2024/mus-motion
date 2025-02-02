import * as Masonry from "./masonry";
import * as React from "react";

const items = [
  {
    id: "1",
    title: "Smooth Interface",
    description:
      "The music player has a smooth and user-friendly interface, making it easy to navigate.",
  },
  {
    id: "2",
    title: "High-Quality Sound",
    description:
      "The audio quality is top-notch, delivering crystal-clear sound with deep bass.",
  },
  {
    id: "3",
    title: "Fast Performance",
    description:
      "The app loads songs instantly and plays without any lag, even with large playlists.",
  },
  {
    id: "4",
    title: "Customization Options",
    description:
      "It offers a lot of customization, from themes to equalizer settings, giving users full control.",
  },
  {
    id: "5",
    title: "Offline Mode",
    description:
      "Being able to listen to music offline is a great feature, especially when traveling.",
  },
  {
    id: "6",
    title: "Playlist Creation",
    description:
      "You can easily create and manage your own playlists, making it perfect for personalizing your listening experience.",
  },
  {
    id: "7",
    title: "Smart Recommendations",
    description:
      "The app suggests songs based on your listening habits, which is great for discovering new music.",
  },
  {
    id: "8",
    title: "Seamless Syncing",
    description:
      "It synchronizes seamlessly across all devices, so you can pick up where you left off.",
  },
  {
    id: "9",
    title: "High Compatibility",
    description:
      "The music player supports a wide range of file formats, making it versatile for different audio types.",
  },
  {
    id: "10",
    title: "Sound Quality Customization",
    description:
      "With advanced equalizer settings, you can adjust the sound to your preferences, whether it's for bass or treble.",
  },
  {
    id: "11",
    title: "Battery Friendly",
    description:
      "The app is optimized for battery usage, making it ideal for long listening sessions without draining your battery quickly.",
  },
  {
    id: "12",
    title: "Cloud Integration",
    description:
      "Integration with cloud storage allows easy access to your music library anywhere.",
  },
  {
    id: "13",
    title: "Dark Mode",
    description:
      "Dark mode is perfect for night listening, reducing eye strain while enhancing the experience.",
  },
  {
    id: "14",
    title: "High-Resolution Audio Support",
    description:
      "For audiophiles, the app supports high-resolution audio files, offering an unparalleled listening experience.",
  },
  {
    id: "15",
    title: "Gesture Controls",
    description:
      "The app includes gesture controls, allowing users to skip tracks or adjust volume with a simple swipe.",
  },
  {
    id: "16",
    title: "Radio Feature",
    description:
      "It offers an integrated radio feature with customizable stations, providing a new way to explore music.",
  },
  {
    id: "17",
    title: "Podcast Support",
    description:
      "The app also supports podcasts, allowing you to enjoy both music and podcasts in one place.",
  },
  {
    id: "18",
    title: "Integrated Lyrics",
    description:
      "Integrated lyrics display allows you to sing along with your favorite tracks.",
  },
  {
    id: "19",
    title: "Fast Updates",
    description:
      "The app is frequently updated with new features and bug fixes, ensuring a smooth user experience.",
  },
  {
    id: "20",
    title: "User Community",
    description:
      "The app has an active user community where you can share playlists, recommend songs, and discover new artists.",
  },
];

export function PeopleSay() {
  return (
    <Masonry.Root columnCount={3} gap={12}>
      {items.map((item) => (
        <Masonry.Item key={item.id} asChild>
          <div className="flex flex-col gap-1 rounded-md border bg-card p-4 text-card-foreground shadow-sm">
            <div className="text-sm font-medium leading-tight sm:text-base">
              {item.title}
            </div>
            <span className="text-sm text-muted-foreground">
              {item.description}
            </span>
          </div>
        </Masonry.Item>
      ))}
    </Masonry.Root>
  );
}
