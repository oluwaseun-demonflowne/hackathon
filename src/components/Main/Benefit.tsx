"use client";
import { motion, useAnimationControls, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { GiPadlockOpen, GiTeacher } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { IoBuildOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";

const Benefit = () => {
  const benefits = [
    {
      icon: <IoBuildOutline className="text-4xl md:text-7xl" />,
      title: "Grant to build / scale solutions",
      description:
        "Get access to grants that help you build and scale your innovative solutions, bringing your ideas to life.",
    },
    {
      icon: <MdSupportAgent className="text-4xl md:text-7xl" />,
      title: "Support for product and integration",
      description:
        "Receive guidance and support for product development, integration, and refining your solution for market readiness.",
    },
    {
      icon: <AiOutlineEyeInvisible className="text-4xl md:text-7xl" />,
      title: "Visibility for your team / solution",
      description:
        "Showcase your project to a wide audience and gain visibility that opens up new opportunities for growth and collaboration.",
    },
    {
      icon: <GiPadlockOpen className="text-4xl md:text-7xl" />,
      title: "Access to community of founders",
      description:
        "Join a vibrant community of entrepreneurs, developers, and innovators who share knowledge and collaborate to grow together.",
    },
    {
      icon: <GiTeacher className="text-4xl md:text-7xl" />,
      title: "Coaching / Mentorship for founders",
      description:
        "Get personalized coaching and mentorship from experienced founders who can guide you on your entrepreneurial journey.",
    },
    {
      icon: <GrUserExpert className="text-4xl md:text-7xl" />,
      title: "Learn from renowned industry expert",
      description:
        "Learn firsthand from leading experts in the industry through workshops and sessions that help you stay ahead of the curve.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  const scrollWidth = benefits.length * 360; // Adjust based on card width + gap

  return (
    <section
      id="benefit"
      className="font-brush  overflow-hidden text-[#3c3b3a] space-y-16 py-40 bg-white"
    >
      <h1 className="font-black text-3xl px-4 md:px-20 md:text-6xl">
        What benefit will you get?
      </h1>
      <div ref={containerRef} className="relative overflow-hidden">
        <motion.div
          className="flex space-x-5"
          variants={{
            visible: {
              x: [0, -scrollWidth],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              },
            },
          }}
          initial="visible"
          animate={controls}
        >
          {[...benefits, ...benefits].map((benefit, index) => (
            <div
              key={index}
              className="p-10 h-[400px] w-[340px] flex-shrink-0 rounded-2xl bg-[#E1E0CE] space-y-3"
            >
              {benefit.icon}
              <h1 className="text-2xl md:text-3xl font-bold">
                {benefit.title}
              </h1>
              <p className="md:text-base text-[15px]">{benefit.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefit;
