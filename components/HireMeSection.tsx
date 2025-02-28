import { motion } from "framer-motion";
import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { Button } from "./ui/button";

const HireMeSection = () => {
  return (
    <div className="flex-col pt-2 lg:pt-2 sm:pt-4">
      <div className="flex justify-between sm:mx-6 lg:mx-6 lg:py-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center px-4 sm:px-0 lg:px-0 py-0"
        >
          <span
            className="relative flex justify-center items-center w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 dark:bg-gray-500 bg-gray-500 rounded-full 
                  lg:mr-2 mr-2 animate-pulse before:content-[''] before:absolute before:w-2 before:h-2 lg:before:w-4 lg:before:h-4 before:rounded-full before:bg-gray-500 before:opacity-50 before:animate-wave"
          ></span>
          <span className="lg:ml-1.5 sm:text-base lg:text-lg text-xs font-semibold text-[#959595] dark:text-[#b5b5b5]">
            Hire Me
          </span>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full gap-4 p-1 mt-4 mb-4">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center ml-2"
        >
          <div className="lg:flex-start flex-col items-center justify-center lg:ml-6 sm:ml-8">
            <div className="text-center lg:text-left sm:text-left">
              <h1 className="my-2 text-2xl sm:text-4xl lg:text-5xl font-bold">
                Get In Touch
              </h1>
              <div className="hidden sm:hidden lg:block lg:text-base text-sm   sm:mr-6 text-[#959595] dark:text-[#b5b5b5] max-w-2xl mx-auto">
                <p>Need a developer to turn your vision into reality?</p>
                <p>Let’s connect and bring your project to life.</p>
              </div>

              <div className=" block sm:block lg:hidden lg:text-base text-sm sm:text-xs  text-[#959595] dark:text-[#b5b5b5] max-w-2xl mx-auto">
                <div className="mx-4 sm:mx-1">
                  <span className="block sm:block  lg:hidden ">
                    Let’s connect and bring your project to life.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start sm:justify-start items-center">
              <div className="flex mt-4 items-center lg:justify-start lg:mx-0 sm:justify-start sm:mx-0">
                <SocialMediaIcons />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center mx-2 sm:mr-6 lg:mr-6  text-sm lg:text-base "
        >
          <div className="bg-[#373737] lg:p-4 sm:p-4 px-3 py-4 rounded-lg shadow-md w-full max-w-md">
            <form className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 bg-[#2c2c2c] text-white rounded-lg focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 bg-[#2c2c2c] text-white rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-2 bg-[#2c2c2c] text-white rounded-lg   focus:outline-none  "
                ></textarea>
              </div>
              <Button className="w-full bg-[#454346] hover:bg-[#555355] text-white text-xs lg:text-sm sm:text-sm font-bold py-2 px-4 rounded-lg transition">
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HireMeSection;
