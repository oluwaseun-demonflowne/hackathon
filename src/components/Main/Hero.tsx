import React from "react";
import { SlCalender } from "react-icons/sl";
import { GiCash } from "react-icons/gi";
const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white pt-32 md:pt-10 items-center w-[100%] gap-10 px-4 md:px-20 overflow-hidden h-screen flex md:flex-row flex-col text-[#3c3b3a]"
    >
      <div className="md:w-[40%] font-brush space-y-6">
        <h1 className=" text-3xl md:text-5xl font-black">
          Wellspring University Hackathon: Where brilliance meets innovation!
        </h1>
        <p className="text-[15px]">
          Join the brightest minds at the Wellspring University Hackathon.
        </p>
        <div className="space-x-3 flex">
          <button className="bg-[#3c3b3a] text-white flex items-center justify-center gap-2 rounded-md h-12 w-40 font-bold">
            <SlCalender />
            View Events
          </button>
          <button className="bg-[#3c3b3a] text-white flex items-center justify-center gap-2 rounded-md h-12 w-40 font-bold">
            <GiCash />
            Sponsor
          </button>
        </div>
      </div>
      <div className="md:w-[60%] rounded-2xl overflow-hidden">
        <video playsInline autoPlay muted loop>
          <source src="/hack.MP4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
