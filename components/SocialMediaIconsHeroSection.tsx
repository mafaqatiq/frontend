import { FaGithub, FaLinkedin } from "react-icons/fa";
import FiverrIcon from "./icons/FiverrIcon";
import UpworkIcon from "./icons/UpwrorkIcon"; 
import React from "react";

export default function SocialMediaIconsHeroSection() {
  

  return (
    <div className="flex flex-wrap justify-center lg:justify-start sm:justify-start gap-4 mt-3 mb-0">
      {/* Fiverr Button */}
      <a
        href="https://www.fiverr.com/zaidbinharis293/"
        rel="noopener noreferrer" 
        className="lg:w-11 sm:w-11 lg:h-11  sm:h-11 w-10 h-10 hover:border animate-wiggle  shadow-icon-pulse-glow hover:border-black  flex items-center justify-center text-white bg-green-600 dark:bg-[#27272a] border-white/10   rounded-full transition-all duration-300 ease-in-out dark:hover:bg-green-600 hover:bg-green-500"
      >
        <FiverrIcon className="lg:text-3xl sm:text-3xl text-lg " />
      </a> 
      {/* Upwork Button */}
      <a
        href="https://www.upwork.com/freelancers/~01c91a1c64736ef715?mp_source=share"
        rel="noopener noreferrer" 
        className="lg:w-11 sm:w-11 lg:h-11  sm:h-11 w-10 h-10 hover:border animate-wiggle  shadow-icon-pulse-glow hover:border-black  flex items-center justify-center text-white bg-[#128f00] dark:bg-[#27272a] border-white/10 rounded-full transition-all duration-300 ease-in-out dark:hover:bg-[#128f00] hover:bg-[#128f00]/80"
      >
        <UpworkIcon className="lg:text-2xl sm:text-2xl text-lg " />
      </a> 
      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/muhammad-afaq-3b8820224/"
        rel="noopener noreferrer" 
        className="lg:w-11 sm:w-11 lg:h-11  sm:h-11 w-10 h-10 hover:border animate-wiggle   shadow-icon-pulse-glow  hover:border-black  flex items-center justify-center text-white bg-blue-600 dark:bg-[#27272a] border-white/10 rounded-full transition-all duration-300 ease-in-out dark:hover:bg-blue-600 hover:bg-blue-500"
      >
        <FaLinkedin className="lg:text-2xl sm:text-2xl text-lg " />
      </a> 
      {/* GitHub Button */}
      <a
        href="https://github.com/mafaqatiq" 
        rel="noopener noreferrer" 
        className="lg:w-11 sm:w-11 lg:h-11  sm:h-11 w-10 h-10 hover:border animate-wiggle  shadow-icon-pulse-glow hover:border-black  flex items-center justify-center text-white bg-gray-700 dark:bg-[#27272a] border-white/10 rounded-full transition-all duration-300 ease-in-out dark:hover:bg-gray-700 hover:bg-gray-600"
      >
        <FaGithub className="lg:text-2xl sm:text-2xl text-lg " />
      </a> 
    </div>
  );
}
