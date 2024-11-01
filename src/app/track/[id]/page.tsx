import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface TrackData {
  album: string;
  artist: string;
  previewImage: string;
  trackName: string;
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
        // Kiểm tra err có phải là một Error không
        if (err instanceof Error) {
          setError(err.message); // Sử dụng message nếu err là Error
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

  return (
    <div>
      <h1>{track.trackName}</h1>
      <p>{track.artist}</p>
      <Image
        src={track.previewImage}
        alt={track.trackName}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
