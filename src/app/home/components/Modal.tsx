"use client";

import { motion, AnimatePresence } from "framer-motion";
import Video from 'next-video';
  import getStarted from '/videos/get-started.mp4';
import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
  } from 'media-chrome/react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black w-[50rem] h-[35rem] border rounded-lg pt-4 z-10"
            style={{ transformStyle: "preserve-3d", perspective: 500 }}
            initial={{ opacity: 0, rotateZ: 10, scale: 0.8 }}
            animate={{ opacity: 1, rotateZ: 0, scale: 1 , rotateX:20 }}
            exit={{ opacity: 0, rotateZ: -10, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
           <div className="flex h-[20px] px-3 w-full justify-end">
          <div className="ease-outs group flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full border transition duration-300 hover:bg-white hover:text-black">
            <svg
              onClick={onClose}
              className=""
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center">
        <Video aria-errormessage="" aria-hidden="false" className="host" src={getStarted} />
          {/* <div className="flex h-[6rem] w-[6rem] items-center justify-center rounded-full">
            <svg
              data-testid="geist-icon"
              height={50}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={50}
              style={{ color: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.4549 7.22745L13.3229 7.16146L2.5 1.74999L2.4583 1.72914L1.80902 1.4045L1.3618 1.18089C1.19558 1.09778 1 1.21865 1 1.4045L1 1.9045L1 2.63041L1 2.67704L1 13.3229L1 13.3696L1 14.0955L1 14.5955C1 14.7813 1.19558 14.9022 1.3618 14.8191L1.80902 14.5955L2.4583 14.2708L2.5 14.25L13.3229 8.83852L13.4549 8.77253L14.2546 8.37267L14.5528 8.2236C14.737 8.13147 14.737 7.86851 14.5528 7.77638L14.2546 7.62731L13.4549 7.22745ZM11.6459 7.99999L2.5 3.42704L2.5 12.5729L11.6459 7.99999Z"
                fill="currentColor"
              />
            </svg>
          </div> */}
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
