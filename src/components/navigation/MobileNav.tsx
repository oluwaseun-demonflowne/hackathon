"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { GiCrackedAlienSkull } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import { linkArr } from "./DesktopNav";



const MobileNav = () => {
  const getCurrent = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  const paraRef = useRef<HTMLParagraphElement[]>([]);
  const [getId, setGetId] = useState(-1);
  const { ref, inView } = useInView({ threshold: 0 });
  const timeline1 = gsap.timeline({
    // repeat: -1,
    // repeatDelay: 1,
    // yoyo: true,
  });
  const timeline2 = gsap.timeline({
    // repeat: -1,
    // repeatDelay: 1,
    // yoyo: true,
  });

  useEffect(() => {
    if (inView) {
      paraRef.current.forEach((el, index) => {
        gsap.to(el, {
          width: index === getId ? "109px" : "0%",
          duration: 0.5,
          ease: "power1.in",
        });
      });
    } else {
      paraRef.current.forEach((el) => {
        gsap.to(el, {
          width: "0%",
          duration: 0.5,
          ease: "power1.in",
        });
      });
    }
  }, [getId, inView]);

  useEffect(() => {
    setOpenDrawer(false);
    if (getCurrent.split("/")[1] === "") {
      setGetId(-1);
      return;
    }
    linkArr.map((i, index) => {
      if (i.label === getCurrent.split("/")[1]) {
        setGetId(index);
      }
    });
  }, [getCurrent]);

  useGSAP(() => {
    if (openDrawer) {
      gsap.to("#drawer", {
        duration: 0.5,
        x: 0,
        ease: "power1.in",
        opacity: 1,
      });

      timeline1.to("#firsticon", {
        duration: 0.1,
        y: 4,
        ease: "power1.in",
      });
      timeline1.to("#firsticon", {
        duration: 0.1,
        rotate: -45,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        y: -4,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        rotate: 45,
        ease: "power1.in",
      });
    } else {
      gsap.to("#drawer", {
        ease: "power1.in",
        x: -900,
        duration: 0.1,
      });
      timeline1.to("#firsticon", {
        duration: 0.1,
        rotate: 0,
        ease: "power1.in",
      });
      timeline1.to("#firsticon", {
        duration: 0.1,
        y: 0,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        rotate: 0,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        y: 0,
        ease: "power1.in",
      });
    }
  }, [openDrawer]);
  return (
    <div className=" z-[99]  fixed top-0 w-[100%] md:hidden shadow-lg bg-[#F5F4E2] flex px-4 items-center justify-between h-20 ">
      <Link href="#home">
        <div className="flex gap-3 items-center">
          <GiCrackedAlienSkull className="text-4xl" />
          <h1 className="text-2xl font-medium">WelsuHackathon</h1>
        </div>
      </Link>
      <div
        // id="divnote"
        onClick={() => {
          setOpenDrawer((prev) => !prev);
        }}
        className="flex cursor-pointer gap-1 flex-col  "
      >
        <p id="firsticon" className="bg-[#3c3b3a] w-7  h-1"></p>
        <p id="secondicon" className="bg-[#3c3b3a] w-7  h-1"></p>
      </div>
      <div
        ref={ref}
        id="drawer"
        className={`pt-10 flex ${
          openDrawer ? "" : "opacity-0"
        } text-slate-400 left-0 pl-4 z-[99] flex-col top-[79px] h-screen w-fdivl backdrop-blur-lg  absolute text-xl w-[100%] font-black gap-5`}
      >
        {linkArr.map((i, index) => (
          <div className="" key={i.label}>
            <Link
              className={`hover:text-white text-[#3c3b3a] ${
                i.label === getCurrent.split("/")[1] ? "text-[#3c3b3a]" : ""
              } `}
              href={i.link}
              key={i.label}
            >
              {i.label}
            </Link>
            <p
              ref={(el) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                paraRef.current && (paraRef.current[index] = el!);
              }}
              className={`h-1 w-10  rounded-md bg-[#FEDB62]`}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
