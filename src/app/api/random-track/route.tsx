import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks`; // Playlist công khai (Top Hits)

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

export async function GET() {
  const { access_token } = await getAccessToken();

  const res = await fetch(PLAYLIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch playlist data" },
      { status: res.status },
    );
  }

  const data = await res.json();

  // Lấy tối đa 20 bài hát
  const tracks = data.items.slice(0, 20).map((item: any) => item.track);

  return NextResponse.json(tracks);
}
