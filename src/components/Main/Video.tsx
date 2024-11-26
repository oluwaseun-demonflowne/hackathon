"use client";
import React, { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaPause, FaPlay } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);
const Videos = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState(false);
  useGSAP(() => {
    gsap.to("#video", {
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
      onStart: () => {
        setIsPlay(true);
        videoRef.current?.play();
      },
    });

    gsap.to("#videoCon", {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "400px bottom",
        end: "bottom+=400px bottom",
      },
      duration: 0.4,
      //   clipPath: `inset(7%)`,
      paddingLeft: window.innerWidth > 760 ? "170px" : "25px",
      paddingRight: window.innerWidth > 760 ? "170px" : "25px",
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
    <div className="">
      <div id="videoCon" className="py-20 px-0">
        <div className="relative">
          <video
            id="video"
            ref={videoRef}
            playsInline
            className=" w-[100%] rounded-none "
            muted
            loop
          >
            <source src="/hack.mp4" type="video/mp4" />
          </video>
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
