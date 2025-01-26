import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
export default function Component() {
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (accepted === "true") {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsAccepted(true);
  };

  if (isAccepted) return null;
  return (
    <Alert
      className={`absolute left-[2rem] top-[29rem] z-[2] flex w-[480px] flex-col gap-4`}
    >
      <AlertTitle className="flex items-center justify-between">
        <p className="text-[1.1.rem]">Cookies Settings</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1={18} y1={6} x2={6} y2={18} />
          <line x1={6} y1={6} x2={18} y2={18} />
        </svg>
      </AlertTitle>
      <AlertDescription>
        We use cookies and similar technologies to help personalise content,
        tailor and measure ads, and provide a better expe- rience. By clicking
        accept, you agree to this, as outlined in our Cookie Policy.
      </AlertDescription>
      <div className="flex justify-between gap-[3rem]">
        <Button className="w-full" onClick={handleAccept}>
          Accept
        </Button>
        <Button className="w-full" variant={"outline"}>
          Decline
        </Button>
      </div>
      <div className="relative right-[1rem] top-[2rem]"></div>
    </Alert>
  );
}
