"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col justify-around lg:flex-row lg:gap-32 lg:items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
        {/* IMAGE CONTAINER */}
        <div className="h-[200px] w-[200px] self-center lg:h-[500px] lg:w-[500px] overflow-hidden rounded-full border-4 border-orange-400 relative">
          <Image src="/Subject.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-[60%] lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-3xl md:text-6xl font-bold">
            Full Stack Java<span className="text-yellow-500">script</span> Developer
          </h1>
          {/* DESC */}
          <p className="md:text-lg">
            Welcome to my portfolio page! I&apos;m a full-stack developer with a passion for creating efficient and dynamic web applications. Here, you&apos;ll find a showcase of the projects I&apos;ve worked on, each highlighting my skills in JavaScript, React, MongoDB, Node.js and many more.
          </p>
          <p className="md:text-lg">
            I hope my work gives you a glimpse into my capabilities, and I look forward to the opportunity to collaborate on future projects!
          </p>
          {/* BUTTONS */}
          <div className="justify-between h-[10%] text-xs lg:text-xl w-full  flex gap-4">
            <button className="w-1/4 h-full rounded-lg ring-1 ring-black bg-black text-white">
              <Link href='/portfolio' className="hover:text-orange-400">
                View My Work
              </Link>
            </button>
            <button className="w-1/4 rounded-lg ring-1 ring-black">
              <Link href='/contact' className="hover:text-orange-400">
                Contact Me
              </Link>
            </button>
            <button className="w-1/4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href='/pdfs/Resume.pdf' className="hover:text-orange-400">
                Check my CV
              </Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
