"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import { motion } from "framer-motion"; 
import HireMeSection from "@/components/HireMeSection";
import FooterSection from "@/components/FooterSection";

const Profile = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className="selection:bg-[#212121] mx-auto w-[90%] max-w-6xl mb-2 lg:mt-24 mt-20 lg:px-4 sm:px-4 lg:pt-4 sm:pt-4 lg:pb-2 sm:pb-2 px-1 py-2 dark:border-none border rounded-lg backdrop-blur-md dark:bg-[#242124]/50 bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="skills scroll-mt-24 dark:bg-[#2c2c2c] bg-[#FDFDFD] rounded-lg mt-6 mx-2 lg:mx-0 sm:mx-0 sm:mt-14 lg:mt-0 border"
      >
         <div className="flex justify-between sm:mx-6 sm:py-6 py-2 lg:mx-6 lg:py-4">
                <div
                  className="flex items-center px-4 sm:px-0 lg:px-0 py-0"
                >
                  <span
                    className="relative flex justify-center items-center w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 dark:bg-gray-500 bg-gray-500 rounded-full 
                          lg:mr-2 mr-2 animate-pulse before:content-[''] before:absolute before:w-2 before:h-2 lg:before:w-4 lg:before:h-4 before:rounded-full before:bg-gray-500 before:opacity-50 before:animate-wave"
                  ></span>
                  <span className="lg:ml-1.5 sm:text-base lg:text-lg text-xs font-semibold text-[#959595] dark:text-[#b5b5b5]">
                    About Me
                  </span>
                </div>
              </div>

        {/* About Me Section */}
        <div className="px-6 pb-6 flex flex-col-reverse lg:flex-row items-center lg:items-center">
          {/* Left Side - Text */}
          <div className="lg:w-2/3 lg:text-left sm:text-left text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#333] dark:text-white">
              It&apos;s Me, Afaq
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm lg:text-base">
              A passionate software engineer with over four years of experience
              in developing modern web and mobile applications. My expertise
              lies in building scalable, high-performance applications with
              clean and maintainable code. I thrive on solving complex problems,
              optimizing performance, and delivering seamless user experiences.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm lg:text-base">
              Throughout my career, I have successfully collaborated with
              multiple clients worldwide, helping them transform their ideas
              into reality. Whether it&apos;s full-stack web development, mobile
              applications, AI-driven solutions, or web scraping automation, I
              am always up for a challenge.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/3 flex justify-center mt-2 lg:mt-0">
  <Image
    src="/profile.png"
    alt="Afaq's Profile"
    width={200}
    height={200}
    className="w-28 h-28 sm:w-48 sm:h-48 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg border-4 border-gray-300 dark:border-gray-600"
  />
</div>

        </div>
      </motion.div>
      <section className="hire-me scroll-mt-24 dark:bg-[#2c2c2c] bg-white rounded-lg mt-2 pb-0 lg:pb-8 sm:pb-8 mx-2 lg:mx-0 sm:mx-0 sm:mt-2 lg:mt-2 border">
        <HireMeSection />
      </section>
      <section className="dark:bg-[#2c2c2c] bg-white rounded-lg pb-0 mx-2 lg:mx-0 sm:mx-0 sm:mt-2 lg:mt-2">
        <FooterSection />
      </section>
    </div>
  );
};

export default Profile;
