"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface TrackData {
  trackName: string;
  album: {
    name: string;
    release_date: string;
    total_tracks: number;
    album_type: string;
    images: { url: string }[];
  };
  artist: { name: string }[];
  popularity: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: string;
  preview_url: string | null;
  track_number: number;
}

export default function TrackPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [track, setTrack] = useState<TrackData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchTrack = async () => {
      try {
        const res = await fetch(`/api/spotify?id=${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch track data");
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

    fetchTrack();
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const durationMinutes = Math.floor(track.duration_ms / 6000);
  const durationSeconds = ((track.duration_ms % 60000) / 1000).toFixed(0);

  return (
    <div>
      <h1>{track.trackName}</h1>
      <p>Artist: {track.artist.map((a) => a.name).join(", ")}</p>
      <p>Album: {track.album.name}</p>
      <p>Release Date: {track.album.release_date}</p>
      <p>Total Tracks in Album: {track.album.total_tracks}</p>
      <p>Album Type: {track.album.album_type}</p>
      <p>Track Number: {track.track_number}</p>
      <p>
        Duration: {durationMinutes}:{durationSeconds} minutes
      </p>
      <p>Popularity: {track.popularity}</p>
      <p>Explicit: {track.explicit ? "Yes" : "No"}</p>
      <p>
        Listen on Spotify:{" "}
        <a href={track.external_urls} target="_blank" rel="noopener noreferrer">
          Spotify Link
        </a>
      </p>
      {track.preview_url && (
        <div>
          <p>Preview:</p>
          <audio controls>
            <source src={track.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
      <Image
        src={track.album.images.map((a) => a.url).join(", ")}
        alt={track.trackName}
        width={300}
        height={300}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
