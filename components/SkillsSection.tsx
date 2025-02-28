import { motion } from "framer-motion";
import React from "react";
import SkillsCards from "./SkillsCards";
import SocialMediaIcons from "./SocialMediaIcons";

const SkillsSection = () => {
  return (
    <div className="flex-col  pt-2 lg:pt-2 sm:pt-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center px-4 lg:ml-6 sm:ml-6 ml-0 sm:px-0 lg:px-0 py-1"
      >
        <span
          className="relative flex justify-center items-center w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 dark:bg-gray-500 bg-[#5a5959] rounded-full 
          lg:mr-2 mr-2 animate-pulse before:content-[''] before:absolute before:w-2 before:h-2 lg:before:w-4 lg:before:h-4 before:rounded-full before:bg-gray-500 before:opacity-50 before:animate-wave"
        ></span>
        <span className="lg:ml-1.5 sm:text-base lg:text-lg text-xs font-semibold text-[#5a5959] dark:text-[#b5b5b5]">
          Technical Skills
        </span>
      </motion.div>
      <SkillsCards />
    </div>
  );
};

export default SkillsSection;
