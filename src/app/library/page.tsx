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

// Hàm lấy dữ liệu từ Spotify API
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

// Hàm lấy access_token mới bằng refresh_token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token"); // Lấy refresh_token từ localStorage
    if (!refreshToken) throw new Error("No refresh token available");

    const res = await fetch("/api/refresh-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token: refreshToken }), // Gửi refresh_token để làm mới access_token
    });

    if (!res.ok) {
      throw new Error("Failed to refresh access token");
    }

    const data = await res.json();
    localStorage.setItem("access_token", data.access_token); // Lưu access_token mới
    return data.access_token;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return null;
  }
};

// Hàm lấy refresh_token từ API login
const fetchRefreshToken = async (username: string, password: string) => {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      throw new Error("Failed to login");
    }

    const data = await res.json();
    localStorage.setItem("refresh_token", data.refresh_token); // Lưu refresh_token vào localStorage
    localStorage.setItem("access_token", data.access_token); // Lưu access_token vào localStorage

    return data.access_token;
  } catch (error) {
    console.error("Error fetching refresh token:", error);
    return null;
  }
};

export default function LibraryPage() {
  const [tracks, setTracks] = useState<TrackData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Lấy refresh_token và access_token khi login
  useEffect(() => {
    const loginAndFetchToken = async () => {
      const username = "user"; // Thay thế bằng tên đăng nhập thực tế
      const password = "password"; // Thay thế bằng mật khẩu thực tế
      const token = await fetchRefreshToken(username, password);
      setAccessToken(token);
    };

    loginAndFetchToken();
  }, []);

  // Lấy dữ liệu Spotify sau khi có accessToken
  useEffect(() => {
    if (!accessToken) return;

    const fetchTracks = async () => {
      try {
        const res = await fetch("/api/random-tracks");
        if (!res.ok) {
          throw new Error("Failed to fetch tracks");
        }
        const data: TrackData[] = await res.json();

        // Loại bỏ bài hát trùng lặp dựa trên `id` và nghệ sĩ
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
