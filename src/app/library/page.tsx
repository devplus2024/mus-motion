"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface TrackData {
  id: string;
  name: string;
  album: {
    images: { url: string; height: number; width: number }[];
    name: string;
  };
  artists: { name: string }[];
}

const fetchSpotifyData = async (endpoint: string, accessToken: string) => {
  try {
    const res = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 401) {
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        return fetchSpotifyData(endpoint, newAccessToken);
      }
    }

    if (!res.ok) {
      throw new Error("Failed to fetch Spotify data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return null;
  }
};

const refreshAccessToken = async () => {
  try {
    const res = await fetch("/api/refresh_token", {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Failed to refresh access token");
    }

    const data = await res.json();
    return data.access_token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default function LibraryPage() {
  const [tracks, setTracks] = useState<TrackData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Fetch the access token on initial render
  useEffect(() => {
    const fetchAccessToken = async () => {
      const newAccessToken = await refreshAccessToken();
      setAccessToken(newAccessToken);
    };

    fetchAccessToken();
  }, []);

  // Fetch the tracks only after receiving the access token
  useEffect(() => {
    if (!accessToken) return;

    const fetchTracks = async () => {
      try {
        const res = await fetch("/api/random-tracks");
        if (!res.ok) {
          throw new Error("Failed to fetch tracks");
        }
        const data: TrackData[] = await res.json();

        // Loại bỏ bài hát trùng lặp dựa trên `id` và `artist`
        const uniqueTracks = Array.from(
          new Map(
            data.map((track) => [track.id + track.artists[0]?.name, track]),
          ).values(),
        );

        setTracks(uniqueTracks);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchTracks();
  }, [accessToken]);

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
            <h3>{track.name}</h3>
            <p>
              Artist: {track.artists.map((artist) => artist.name).join(", ")}
            </p>
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
