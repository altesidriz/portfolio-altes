"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row lg:gap-32 lg:items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
        {/* IMAGE CONTAINER */}
        <div className="h-[40%] lg:h-[500px] lg:w-[500px] overflow-hidden rounded-full border-4 border-yellow-600 relative">
          <Image src="/Subject.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-3xl md:text-6xl font-bold">
            Full Stack Java<span className="text-yellow-500">script</span> Developer
          </h1>
          {/* DESC */}
          <p className="md:text-lg">
            Welcome to my portfolio page! I'm a full-stack developer with a passion for creating efficient and dynamic web applications. Here, you'll find a showcase of the projects I've worked on, each highlighting my skills in JavaScript, React, MongoDB, Node.js and many more.
          </p>
          <p className="md:text-lg">
            I hope my work gives you a glimpse into my capabilities, and I look forward to the opportunity to collaborate on future projects!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="w-1/4 p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="w-1/4 p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
            <button className="w-1/4 p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Check my CV
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
