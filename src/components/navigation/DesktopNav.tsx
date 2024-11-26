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
    <div className="bg-[#F5F4E2] flex  items-center text-[#3c3b3a] w-[100%] shadow-lg z-30 fixed top-0">
      <header className="py-6 px-20">
        <Link href="#home">
          <div className="flex gap-3 items-center">
            <GiCrackedAlienSkull className="text-4xl" />
            <h1 className="text-2xl font-medium">WelsuHackathon</h1>
          </div>
        </Link>
      </header>
      <nav>
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
      </nav>
    </div>
  );
};

export default DesktopNav;
