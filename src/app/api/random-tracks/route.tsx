import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
let refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!; // Token có thể được cập nhật sau khi hết hạn

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks`; // Playlist công khai (Top Hits)

// Hàm lấy access token từ Spotify
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Không thể làm mới access token");
  }

  // Trả về access token và refresh token (nếu có)
  return {
    access_token: data.access_token,
    refresh_token: data.refresh_token || refresh_token, // Nếu Spotify trả về refresh_token mới, nó sẽ được cập nhật
  };
};

// API GET để lấy danh sách bài hát từ playlist
export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    // Gửi yêu cầu lấy playlist với access_token đã nhận
    const res = await fetch(PLAYLIST_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store", // Không lưu cache, luôn lấy dữ liệu mới
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Không thể lấy dữ liệu playlist" },
        { status: res.status },
      );
    }

    const data = await res.json();

    // Lấy tối đa 52 bài hát
    const tracks = data.items.slice(0, 52).map((item: any) => item.track);

    return NextResponse.json(tracks);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
