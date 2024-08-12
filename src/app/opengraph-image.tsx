"use client",
import { ImageResponse } from "next/og";
import React, { useEffect, useState } from 'react';
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
export default async function Image() {
  // Font
  const [content, setContent] = useState('');

  useEffect(() => {
    const url = window.location.hostname;

    if (url === 'nguyendangbinh.vercel.app') {
      setContent('Đăng Bình');
    } else if (url === 'phamviettuan.vercel.app') {
      setContent('Viết Tuấn');
    }
  }, []);


  const geistLight = fetch(
    new URL("../font/Geist-Bold.woff", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
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
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Geist",
          data: await geistLight,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
