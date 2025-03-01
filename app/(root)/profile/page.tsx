"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FooterSection from "@/components/FooterSection";
import HireMeSection from "@/components/HireMeSection";

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
        <div className="flex items-center px-4 lg:ml-6 sm:ml-6 ml-0 sm:px-0 lg:px-0 py-1">
          <span
            className="relative flex justify-center items-center w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 dark:bg-gray-500 bg-[#5a5959] rounded-full 
          lg:mr-2 mr-2 animate-pulse before:content-[''] before:absolute before:w-2 before:h-2 lg:before:w-4 lg:before:h-4 before:rounded-full before:bg-gray-500 before:opacity-50 before:animate-wave"
          ></span>
          <span className="lg:ml-1.5 sm:text-base lg:text-lg text-xs font-semibold text-[#5a5959] dark:text-[#b5b5b5]">
            About Me
          </span>
        </div>

        {/* About Me Section */}
        <div className="p-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#333] dark:text-white">
            It&apos;s Me, Afaq
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm lg:text-base">
            I am a highly skilled software engineer with over four years of
            experience in software development. My expertise spans across web
            development, Android & iOS app development, desktop applications,
            web scraping, and artificial intelligence. As a passionate
            developer, I continuously strive to deliver high-quality solutions
            tailored to meet diverse client needs.
          </p>

          {/* Profile Image */}
          <div className="mt-6 flex justify-center">
            <Image
              src="/profile.png"
              alt="Afaq's Profile"
              width={160}
              height={160}
              className="rounded-full object-cover shadow-lg border-4 border-gray-300 dark:border-gray-600"
            />
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-sm lg:text-base">
            Over the years, I have worked with multiple satisfied clients,
            providing top-notch development services and innovative solutions.
            Whether it&apos;s building scalable web applications, crafting
            user-friendly mobile apps, or leveraging AI to enhance efficiency, I
            am dedicated to bringing ideas to life through code. Let&apos;s
            collaborate and create something amazing!
          </p>
        </div>
      </motion.div>
      <section className="hire-me   scroll-mt-24 dark:bg-[#2c2c2c] bg-white rounded-lg mt-2 pb-0 lg:pb-8 sm:pb-8 mx-2 lg:mx-0 sm:mx-0 sm:mt-2 lg:mt-2 border">
        <HireMeSection />
      </section>
      <section className="dark:bg-[#2c2c2c]  bg-white rounded-lg   pb-0  mx-2 lg:mx-0 sm:mx-0 sm:mt-2 lg:mt-2  ">
        <FooterSection />
      </section>
    </div>
  );
};

export default Profile;
