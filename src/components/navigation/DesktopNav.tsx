"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GiCrackedAlienSkull } from "react-icons/gi";

export const linkArr = [
  { label: "Benefit", link: "#benefit" },
  { label: "Video", link: "#video" },
  { label: "Why", link: "#why" },
  { label: "FAQ", link: "#faq" },
];

const DesktopNav = () => {
  const paraRef = useRef<HTMLParagraphElement[]>([]);
  const [getId, setGetId] = useState(-1);
  console.log();

  useGSAP(() => {
    paraRef.current.forEach((el, index) => {
      gsap.to(el, {
        width: index === getId ? "100%" : "0%",
        duration: 0.5,
        ease: "power1.in",
      });
    });
  }, [getId]);

  useEffect(() => {
    console.log("hi");
    if (window.location.hash.split("#")[1] === "home") {
      setGetId(-1);
      return;
    }
    linkArr.map((i, index) => {
      if (i.label.toLowerCase() === window.location.hash.split("#")[1]) {
        setGetId(index);
      }
    });
  }, []);
  return (
    <div className="bg-white hidden py-3 px-20  md:flex  items-center gap-12 text-[#3c3b3a] w-[100%] shadow-lg z-30 fixed top-0">
      <header className="">
        <Link href="#home">
          <div className="flex gap-3 items-center">
            <GiCrackedAlienSkull className="text-4xl" />
            <h1 className="text-2xl font-medium">WelsuHackathon</h1>
          </div>
        </Link>
      </header>
      <nav className="flex justify-between items-center w-full">
        <div className="space-x-10 flex font-semibold">
          {linkArr.map((i, index) => (
            <div key={i.label} className="">
              <Link href={i.link}>{i.label}</Link>
              <p
                ref={(el) => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  paraRef.current && (paraRef.current[index] = el!);
                }}
                className={`h-1 w-0  rounded-md bg-black`}
              ></p>
            </div>
          ))}
        </div>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf4U9K0QXmv1vR_ePgKYcW9_rwfeyfhQeKjl8E3U4s_RqGeUA/viewform?pli=1">
        <button className="bg-[#3c3b3a] text-white hover:text-[#3c3b3a] button-58 flex items-center justify-center gap-2 rounded-md h-10 w-40 font-bold">
          <div>
            <p>Register</p>
          </div>
          <div>
            <p>Register</p>
          </div>
        </button>
        </Link>
        {/* <button className="border hover:border-0 button-58 rounded-md text-white px-5 h-12">
            
          </button> */}
      </nav>
    </div>
  );
};

export default DesktopNav;
