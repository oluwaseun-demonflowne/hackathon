import React from "react";
import DayTimeline from "./Daily-timeline";
const events = [
  {
    time: "09:00 AM",
    title: "Morning Team Standup",
    description:
      "Daily team meeting to discuss progress and plans for the day.",
  },
  {
    time: "11:30 AM",
    title: "Client Presentation",
    description: "Presenting the new project proposal to the client.",
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    description: "Time to recharge and have a healthy meal.",
  },
  {
    time: "02:30 PM",
    title: "Design Review",
    description: "Reviewing the latest UI designs with the design team.",
  },
  {
    time: "04:30 PM",
    title: "Code Review Session",
    description:
      "Reviewing and merging pull requests with the development team.",
  },
];

const RegisterNow = () => {
  return (
    <section className="px-4 md:px-20 py-16 space-y-10 bg-white text-[#3c3b3a]">
      <h1 className="text-3xl md:text-5xl font-black">Timeline</h1>
      <div className="flex md:flex-row flex-col gap-10 items-start font-brush  bg-white">
        <div className="md:w-[50%] lg:sticky lg:top-32 space-y-4">
          <h1 className="font-bold text-2xl">
            Don’t let this chance to learn, grow and create pass you by.
            Register for the hackaholics today and let’s build.
          </h1>
          <div className="relative">
            <button className="w-44 absolute top-2 left-2 h-12 border-4 border-[#3c3b3a] rounded-lg"></button>
            <button className="bg-[#3c3b3a] z-20 text-white h-12 rounded-lg text-lg w-44 font-bold">
              Register Now
            </button>
          </div>
        </div>
        <DayTimeline date="June 15, 2023" events={events} />
        {/* <div className="p-6 sm:p-10">
          <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
              <div className="text-lg font-bold">
                March 14, 1879 - Invention of Quantum Computing
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                Scientists at a leading research institution unveil a
                groundbreaking breakthrough in quantum computing
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
              <div className="text-lg font-bold">
                April 1, 1939 - First Quantum Computer
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                The first quantum computer is built by a team of researchers in
                a laboratory in the United States.
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
              <div className="text-lg font-bold">
                June 12, 1954 - Quantum Computing Research
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                A group of scientists in Europe publish a paper on quantum
                computing research.
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
              <div className="text-lg font-bold">
                December 31, 1979 - Quantum Computing Breakthrough
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                A team of researchers in Asia makes a significant breakthrough
                in quantum computing.
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default RegisterNow;
