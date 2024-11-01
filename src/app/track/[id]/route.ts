import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "@/lib/spotify";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { access_token } = await getAccessToken();

  const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch track data" },
      { status: response.status },
    );
  }

  const track = await response.json();
  return NextResponse.json(track);
}
