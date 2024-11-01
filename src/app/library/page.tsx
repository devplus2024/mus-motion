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
  const [tracks, setTracks] = useState<TrackData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch("/api/random-tracks");
        if (!res.ok) {
          throw new Error("Failed to fetch tracks");
        }
        const data: TrackData[] = await res.json();
        setTracks(data);
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Random Tracks</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {tracks.map((track) => (
          <div key={track.id}>
            <h2>{track.name}</h2>
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
        ))}
      </div>
    </div>
  );
}
