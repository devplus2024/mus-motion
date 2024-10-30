import { ImageResponse } from "next/og";
import { headers } from "next/headers";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "NoneTheLes";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const path = headersList.get("x-invoke-path") || ""; // nếu bạn muốn đường dẫn, nếu không x-invoke-path có thể không có

  const currentUrl = `${protocol}://${host}`;
  let imagePreview = "";
  if (currentUrl === "https://phamviettuan.vercel.app/") {
    imagePreview = "Viết Tuấn";
  } else if (currentUrl === "https://nguyendangbinh.vercel.app/") {
    imagePreview = "Đăng Bình";
  } else if (currentUrl === "https://localhost:3000/") {
    imagePreview = "Đăng Bình";
  } else {
    imagePreview = "NoneTheLes";
  }

  const geistLight = fetch(
    new URL("./font/Geist-Bold.woff", import.meta.url),
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          gap: "2rem",
        }}
      >
        <span
          style={{
            borderRadius: 9999,
            border: 1,
            borderColor: "#202020",
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 4,
            paddingTop: 4,
            fontSize: 12,
            fontWeight: 700,
          }}
          className="rounded-full border px-4 py-1 text-xs font-bold transition-colors duration-300 ease-out dark:text-white"
        >
          v2.6.5
        </span>
        <span
          style={{
            fontSize: 128,
            background: "black",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textDecorationLine: "italic",
            gap: "2rem",
          }}
        >
          {imagePreview}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              paddingLeft: 12,
              paddingRight: 12,
              paddingBottom: 4,
              paddingTop: 4,
              borderRadius: 9999,
              border: 1,
              borderColor: "#202020",
              color: "white",
            }}
            className="rounded-full border px-3 py-1"
          >
            View Now
          </button>
          <button
            style={{
              paddingLeft: 12,
              paddingRight: 12,
              paddingBottom: 4,
              paddingTop: 4,
              borderRadius: 9999,
              border: 1,
              borderColor: "#202020",
              color: "white",
            }}
            className=""
          >
            Getting Started
          </button>
        </div>
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
    },
  );
}
