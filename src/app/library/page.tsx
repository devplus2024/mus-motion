"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TrackData {
  name: string;
  trackName: string;
  artist: { name: string }[];
  album: { images: { url: string }[] };
}

export default function LibraryPage() {
  const [tracks, setTracks] = useState<TrackData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTracks = async () => {
    try {
      const res = await fetch("/api/random-tracks", {
        cache: "no-store", // Ngăn chặn lưu trữ cache
      });
      if (!res.ok) {
        throw new Error("Failed to fetch tracks");
      }
      const data: TrackData[] = await res.json();

      // Sử dụng Set để tránh lặp lại bài hát và nghệ sĩ
      const seenTracks = new Set();
      const seenArtists = new Set();
      const uniqueTracks = [];

      for (const track of data) {
        const artistNames = track.artist.map((a) => a.name).join(", ");
        // Kiểm tra nếu bài hát đã tồn tại trong tập hợp
        if (!seenTracks.has(track.trackName) && !seenArtists.has(artistNames)) {
          seenTracks.add(track.trackName);
          seenArtists.add(artistNames);
          uniqueTracks.push(track);
        }
      }

      setTracks(uniqueTracks);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
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
      {tracks.map((track, index) => (
        <div key={index}>
          <h2>{track.trackName}</h2>
          <p>Artist: {track.artist.map((a) => a.name).join(", ")}</p>
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
  );
}
