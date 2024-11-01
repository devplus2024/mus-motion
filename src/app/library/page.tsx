"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface TrackData {
  id: string;
  name: string;
  album: {
    images: { url: string; height: number; width: number }[];
    name: string;
  };
  artists: { name: string }[];
}

export default function LibraryPage() {
  const [track, setTrack] = useState<TrackData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomTrack = async () => {
      try {
        const res = await fetch("/api/random-track");
        if (!res.ok) {
          throw new Error("Failed to fetch random track");
        }
        const data: TrackData = await res.json();
        setTrack(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchRandomTrack();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Random Track: {track.name}</h1>
      <p>Artist: {track.artists.map((a) => a.name).join(", ")}</p>
      <p>Album: {track.album.name}</p>
      <Image
        src={track.album.images[0]?.url || "/placeholder.jpg"}
        alt={track.name}
        width={300}
        height={300}
        style={{ maxWidth: "100%", height: "auto" }}
        unoptimized
      />
    </div>
  );
}
