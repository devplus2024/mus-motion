import { NextRequest, NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TRACK_ENDPOINT = `https://api.spotify.com/v1/tracks/`;

// Lấy access token từ Spotify API
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Track ID is required" },
      { status: 400 },
    );
  }

  const { access_token } = await getAccessToken();

  const trackInfo = await fetch(`${TRACK_ENDPOINT}${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!trackInfo.ok) {
    return NextResponse.json(
      { error: "Failed to fetch track data" },
      { status: trackInfo.status },
    );
  }

  const data = await trackInfo.json();

  return NextResponse.json({
    album: data.album.name,
    artist: data.artists
      .map((artist: { name: string }) => artist.name)
      .join(", "),
    previewImage: data.album.images[0]?.url, // Hình ảnh lớn nhất của album
    trackName: data.name,
  });
}
