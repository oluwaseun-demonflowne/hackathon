import React from "react";

const TextUnderVideo = () => {
  return (
    <div className="text-[#3c3b3a] flex space-y-4 md:flex-row flex-col items-start px-4 md:px-20 bg-[#F5F4E2]">
      <div className="md:w-[50%] md:px-20 ">
        <h1 className="text-3xl font-bold">
          A new horizon for innovation and creativity at Wellspring
        </h1>
      </div>
      <div className="md:w-[50%] space-y-6">
        <p className="font-black text-lg tracking-wide opacity-80">
          The Wellspring Hackathon opens the door to limitless opportunities,
          offering a chance to transform your ideas into groundbreaking
          solutions. With cash prizes that reward your innovation and
          dedication, this is your stage to shine. Compete, collaborate, and win
          big while pushing the boundaries of creativity and technology. It’s
          not just about the challenge—it’s about the rewards that await your
          success!
        </p>
        <div className="bg-[#ff5a00] text-white w-fit space-y-3 rounded-2xl py-7 px-4">
          <h4 className="text-3xl  font-bold">₦ 300,000</h4>
          <p className="text-7xl animate-pulse">🎉</p>
          <p className="text-lg tracking-wide ">Winner</p>
        </div>
      </div>
    </div>
  );
};

export default TextUnderVideo;
