// components/DownloadButton.tsx
"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DownloadButton: React.FC = () => {
  const router = useRouter();
  const [downloadReady, setDownloadReady] = useState(false);

  const handleClick = async () => {
    // Chuyển trang và chờ quá trình chuyển hoàn tất
    await router.push("/docs/user-win-download");
    setDownloadReady(true);
  };
  return <Button onClick={handleClick}>Download for Windows</Button>;
};

export default DownloadButton;
