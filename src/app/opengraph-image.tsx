import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "MusicHub";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ url }) {
  // Determine content based on hostname
  const hostname = url.hostname;
  let content = '';

  if (hostname === 'nguyendangbinh.vercel.app') {
    content = 'Đăng Bình';
  } else if (hostname === 'phamviettuan.vercel.app') {
    content = 'Viết Tuấn';
  }

  // Load font
  const geistLight = await fetch(
    new URL("../font/Geist-Bold.woff", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {content}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistLight,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
