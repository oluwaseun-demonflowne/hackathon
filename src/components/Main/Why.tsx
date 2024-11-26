import React from "react";
import { CiMedal } from "react-icons/ci";
import { GoGift } from "react-icons/go";
import { LiaHammerSolid } from "react-icons/lia";

const Why = () => {
  return (
    <section id="why" className="font-brush px-4 md:px-20 space-y-16 py-40 text-[#3c3b3a] bg-[#F5F4E2]">
      <h1 className="font-black text-3xl md:text-6xl">
        Why the Wellspring University<br></br> Hackathon is the ultimate event
        <br></br>for aspiring tech innovators.
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 ">
        <div className=" p-10 bg-[#E1E0CE] space-y-3 rounded-2xl">
          <GoGift className="text-5xl md:text-7xl" />
          <h1 className="text-2xl md:text-3xl font-bold">Wellspring Hackathon Rewards</h1>
          <p className="md:text-base text-[15px]">
            Join the hackathon and turn your skills into prizes. Collaborate,
            innovate, and win big while showcasing your talent. 🏆💡💻 Terms
            apply.
          </p>
        </div>
        <div className=" p-10 bg-[#E1E0CE] space-y-3 rounded-2xl">
          <CiMedal className="text-5xl md:text-7xl" />
          <h1 className="text-2xl md:text-3xl font-bold">Wellspring Hackathon</h1>
          <p className="md:text-base text-[15px]">
            Code. Compete. Conquer. Your journey to innovation starts here! 🎉
          </p>
        </div>
        <div className=" p-10 bg-[#E1E0CE] space-y-3 rounded-2xl">
          <LiaHammerSolid className="text-5xl md:text-7xl" />
          <h1 className="text-2xl md:text-3xl font-bold">
            Wellspring Innovators Challenge
          </h1>
          <p className="md:text-base text-[15px]">
            Step up, code, and collaborate to create groundbreaking solutions!
            Compete, innovate, and make your mark in the tech world! 🚀💻🎉
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
