"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CirclePlus, Copy, Check } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import SocialMediaIconsHeroSection from "./SocialMediaIconsHeroSection";

const HeroScetion = () => {
  const [copied, setCopied] = useState(false);
  const email = "mafaqatiq@email.com";
  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          fallbackCopyText(email);
        });
    } else {
      fallbackCopyText(email);
    }
  };

  const fallbackCopyText = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <>
      <div className="lg:h-[500px]">
        <div className="flex justify-between lg:mx-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center px-4 sm:px-0 lg:px-0 py-1"
          >
            
            <span
              className="relative flex justify-center items-center w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 dark:bg-gray-500 bg-[#5a5959] rounded-full 
          lg:mr-2 mr-2 animate-pulse before:content-[''] before:absolute before:w-2 before:h-2 lg:before:w-4 lg:before:h-4 before:rounded-full before:bg-gray-500 before:opacity-50 before:animate-wave"
            ></span>
            <span className="lg:ml-1.5 sm:text-base  lg:text-lg text-xs font-semibold text-[#5a5959] dark:text-[#b5b5b5]">
              Software Developer
            </span>
          </motion.div>

          {/* Animated "AVAILABLE FOR WORK" */}
          <a
            onClick={() => {
              const section = document.querySelector(".hire-me");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex items-center lg:px-4 lg:py-1 sm:px-4 sm:py-1 mr-3 rounded-full 
      sm:dark:bg-green-900 sm:bg-green-700 lg:dark:bg-green-900 lg:bg-green-700 
      text-green-300 text-sm font-semibold cursor-pointer mt-2"
            >
              <span
                className="relative flex justify-center items-center w-1 h-1 dark:bg-green-400 bg-green-300 rounded-full 
      lg:mr-2 mr-3 animate-pulse 
      before:content-[''] before:absolute before:w-3 before:h-3 lg:before:w-4 lg:before:h-4 
      before:rounded-full before:bg-green-400 before:opacity-50 before:animate-wave"
              ></span>
              <span className="hidden lg:block sm:block ml-2 text-gray-100 dark:text-gray-300">
                AVAILABLE FOR WORK
              </span>
            </motion.div>
          </a>
        </div>

        {/* Personal Info Section */}
        <div className="flex flex-col-reverse  md:flex-row w-full p-1 mt-8  ">
          {/* Left Content - Animated from Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-1 items-center justify-center"
          >
            <div className="lg:flex-start flex-col items-center  justify-center lg:ml-6 sm:ml-8">
              <div
                style={{ fontFamily: "sans-serif" }}
                className="text-center lg:text-left sm:text-left"
              >
                <h1 className="my-2 text-2xl sm:text-5xl lg:text-8xl font-bold ">
                  I&apos;m Afaq
                </h1>
                <p className="lg:text-xl text-sm sm:text-md text-[#5a5959] dark:text-[#b5b5b5] max-w-2xl mx-auto">
                  <span className="hidden sm:inline">
                    Transforming ideas into seamless, innovative,
                    <br /> and immersive digital experiences that inspire.
                  </span>
                  <span className="sm:hidden">
                    Transforming ideas into immersive digital experiences.
                  </span>
                </p>
              </div>
              <SocialMediaIconsHeroSection />
              <div className="flex justify-center lg:justify-start sm:justify-start items-center">
                <div className="flex mt-4   lg:justify-start lg:mx-0 sm:justify-start sm:mx-0">
                  <Button
                    className="w-28 dark:bg-white dark:hover:bg-white/90 bg-[#4D4DF5] hover:bg-[#4D4DF5]/90"
                    onClick={() => {
                      const section = document.querySelector(".hire-me");
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    <CirclePlus /> Hire Me
                  </Button>

                  <Button
                    variant="secondary"
                    className="w-30 ml-2 flex items-center justify-center dark:border-none border dark:hover:bg-[#303030] hover:bg-[#edebeb]"
                    onClick={handleCopyEmail}
                  >
                    {copied ? (
                      <Check className="text-green-500 font-extrabold" />
                    ) : (
                      <Copy />
                    )}
                    <span className="ml-1 w-[70px] text-center">
                      {copied ? "Copied!" : "Copy email"}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image - Animated from Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center items-center "
          >
            <div className="lg:my-6 sm:max-w-52 md:dark:animate-pulse-glow md:animate-light-pulse-glow lg:max-w-xs max-w-24 rounded-full dark:bg-[#27272a]  bg-[#5a5959]  flex justify-center items-center overflow-hidden">
              <Image
                src="/bg-remove.png"
                alt="Portfolio"
                width={300}
                height={300}
                className="w-full h-full  object-cover rounded-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroScetion;
