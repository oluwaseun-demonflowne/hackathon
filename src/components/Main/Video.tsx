"use client";
import React, { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaPause, FaPlay } from "react-icons/fa6";
import Video from "next-video";

gsap.registerPlugin(ScrollTrigger);
const Videos = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState(true);
  useGSAP(() => {
    gsap.to("#videos", {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "800px bottom",
        end: "bottom+=400px bottom",
      },
      //   clipPath: `inset(7%)`,
      opacity: 1,
      borderRadius: "100px",
      ease: "power1.in",
    });

    gsap.to("#videoCon", {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "600px bottom",
        end: "bottom+=200px bottom",
      },
      //   clipPath: `inset(7%)`,
      paddingLeft: window.innerWidth > 760 ? "80px" : "25px",
      paddingRight: window.innerWidth > 760 ? "80px" : "25px",
      opacity: 1,
      //   borderRadius: "100px",
      ease: "power1.in",
    });
  }, []);

  const changeVideoState = () => {
    if (isPlay) {
      setIsPlay(false);
      videoRef.current?.pause();
    } else {
      setIsPlay(true);
      videoRef.current?.play();
    }
  };

  return (
    <div id="video" className="overflow-hidden bg-[#F5F4E2]">
      <div id="videoCon" className="py-20 px-0">
        <div className="relative videoCon">
          <Video
          className="videos"
            ref={videoRef}
            controls={false}
            autoPlay
            muted
            src="https://utfs.io/f/grKbXE59oIDeHIzCrAtvp1VhPxFgZyqDmKrWs9CTYABv6ik7"
          />
          <div
            onClick={() => changeVideoState()}
            className="bg-white right-8 p-3 hover:opacity-70 rounded-full text-2xl cursor-pointer bottom-8  absolute"
          >
            {isPlay ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
