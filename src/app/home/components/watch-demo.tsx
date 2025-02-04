import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FrameVideo from "./frame-video";
export default function WatchDemo()  {
  const [isView,setView] = useState(false);
return(
  <div onClick={() => setView(true)} className="cursor-pointer">
             {isView && 
             ( <FrameVideo isView={isView} setView={setView}/>)
             }
              <Button className="">
                <svg
                  className="mr-2 h-4 w-4"
                  data-testid="geist-icon"
                  height={16}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={16}
                  style={{ color: "currentcolor" }}
                >
                  <path
                    fill="#666"
                    fillRule="evenodd"
                    d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z"
                    clipRule="evenodd"
                    style={{ fill: "currentColor" }}
                  />
                </svg>
                {/* <Globe  /> */}
                Watch Demo Now
              </Button>
            </div>
)
    }