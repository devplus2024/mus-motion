"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Track {
  id: string;
  name: string;
  album: {
    images: { url: string; height: number; width: number }[];
  };
  artists: { name: string }[];
}

export default function LibraryPage() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const res = await fetch("/api/spotify");
        if (!res.ok) {
          throw new Error("Failed to fetch library data");
        }
        const data = await res.json();
        setTracks(data.items.map((item: { track: Track }) => item.track));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchLibrary();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Your Spotify Library</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {tracks.length === 0 ? (
          <p>Loading...</p>
        ) : (
          tracks.map((track) => (
            <div key={track.id} style={{ width: "200px" }}>
              <Image
                src={track.album.images[0]?.url || "/placeholder.jpg"}
                alt={track.name}
                width={200}
                height={200}
                unoptimized={true} // Tắt tối ưu hóa
              />
              <p>{track.name}</p>
              <p>Artist: {track.artists.map((a) => a.name).join(", ")}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
