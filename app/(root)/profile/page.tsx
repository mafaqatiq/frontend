"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import { motion } from "framer-motion"; 
import HireMeSection from "@/components/HireMeSection";
import FooterSection from "@/components/FooterSection";
import CountSection from "@/components/CountSection";

const Profile = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className="dark:selection:bg-[#212121] selection:bg-slate-400 mx-auto w-[90%] max-w-6xl mb-2 lg:mt-24 mt-20 lg:px-4 sm:px-4 lg:pt-4 sm:pt-4 lg:pb-3 sm:pb-2 px-1 py-2 dark:border-none border rounded-lg backdrop-blur-md dark:bg-[#242124]/50 bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="skills scroll-mt-24 dark:bg-[#2c2c2c] bg-[#FDFDFD] rounded-lg mt-2 mx-2 lg:mx-0 sm:mx-0 sm:mt-0 lg:mt-0 border"
      >
        {/* About Me Header */}
        <div className="flex justify-between sm:mx-6 sm:py-6 py-3 lg:mx-6 lg:py-4">
          <div className="flex items-center px-4 sm:px-0 lg:px-0 py-0">
            <span className="relative flex justify-center items-center w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 dark:bg-gray-500 bg-gray-500 rounded-full lg:mr-2 mr-2 animate-pulse before:content-[''] before:absolute before:w-2 before:h-2 lg:before:w-4 lg:before:h-4 before:rounded-full before:bg-gray-500 before:opacity-50 before:animate-wave"></span>
            <span className="lg:ml-1.5  sm:text-base lg:text-lg text-xs font-semibold text-[#959595] dark:text-[#b5b5b5]">
              About Me
            </span>
          </div>
        </div>

        {/* About Me Section */}
        <div className="px-6 pb-0 flex flex-col-reverse lg:flex-row items-center lg:items-center">
          {/* Left Side - Text */}
          <div className="lg:w-2/3 sm:mt-6 lg:text-left sm:text-left mt-4 lg:mt-0 pl-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center sm:text-left lg:text-left text-[#333] dark:text-white">
              It&apos;s Me, <span className="text-green-700">Afaq</span>
            </h2>
            <p className="mt-2 text-gray-600 text-center sm:text-left lg:text-left dark:text-gray-300 text-sm sm:text-lg lg:text-lg">
              A passionate software engineer with over four years of experience in building modern web and mobile applications. I specialize in creating scalable, high-performance solutions with clean and maintainable code.
            </p>
            <p className="mt-3 text-gray-600 font-bold sm:inline-block lg:inline-block hidden dark:text-gray-300 text-center sm:text-left lg:text-left text-sm sm:text-lg lg:text-lg">
              My expertise includes:
            </p>
 
            

            {/* Larger Screens: Bullet Points */}
            <ul className="hidden sm:block mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-lg lg:text-lg list-disc list-inside">
              <li>Full-stack web development</li>
              <li>Mobile application development</li>
              <li>Desktop application development</li>  
            </ul>
            <section className="dark:bg-[#2c2c2c] bg-[#FDFDFD] rounded-lg my-3 mx-2 lg:mx-0 sm:mx-0 sm:mt-14 lg:mt-6 lg:mb-6    ">
        <CountSection />
      </section>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/3 flex justify-center mt-2 lg:mt-0 ">
            <Image
              src="/bg-remove.png"
              alt="Afaq's Profile"
              width={250}
              height={250}
              className="w-32 h-32 sm:w-60 sm:h-60 lg:w-72 lg:h-72 sm:rounded-2xl rounded-full lg:rounded-full object-cover  border-2 md:dark:animate-pulse-glow md:animate-light-pulse-glow dark:animate-mobile-pulse-glow animate-mobile-light-pulse-glow"
            />
          </div>
        </div>
       
      </motion.div>
     

      {/* Hire Me Section */}
      <section className="hire-me scroll-mt-24 dark:bg-[#2c2c2c] bg-white rounded-lg mt-2 pb-0 lg:pb-8 sm:pb-8 mx-2 lg:mx-0 sm:mx-0 sm:mt-2 lg:mt-2 border">
        <HireMeSection />
      </section>

      {/* Footer Section */}
      <section className="dark:bg-[#2c2c2c] bg-white rounded-lg pb-0 mx-2 lg:mx-0 sm:mx-0 sm:mt-2 lg:mt-2">
        <FooterSection />
      </section>

    </div>
  );
};

export default Profile;