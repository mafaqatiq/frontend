import { FaGithub, FaLinkedin } from "react-icons/fa";
import FiverrIcon from "./icons/FiverrIcon";
import UpworkIcon from "./icons/UpwrorkIcon"; 
import React from "react";

export default function SocialMediaIconsHeroSection() {
  

  return (
    <div className="flex flex-wrap justify-center lg:justify-start sm:justify-start gap-4 mt-3 mb-0">
      {/* Fiverr Button */}
      <a
        href="https://www.fiverr.com/"
        target="_blank"
        rel="noopener noreferrer" 
        className="w-11 h-11 hover:border hover:border-black  flex items-center justify-center text-white bg-green-600 dark:bg-[#27272a] border-white/10 shadow-lg rounded-full transition-all duration-300 ease-in-out dark:hover:bg-green-600 hover:bg-green-500"
      >
        <FiverrIcon className="text-3xl" />
      </a> 
      {/* Upwork Button */}
      <a
        href="https://www.upwork.com/"
        target="_blank"
        rel="noopener noreferrer" 
        className="w-11 h-11 hover:border hover:border-black  flex items-center justify-center text-white bg-[#128f00] dark:bg-[#27272a] border-white/10 shadow-lg rounded-full transition-all duration-300 ease-in-out dark:hover:bg-[#128f00] hover:bg-[#128f00]/80"
      >
        <UpworkIcon className="text-2xl" />
      </a> 
      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer" 
        className="w-11 h-11 hover:border hover:border-black  flex items-center justify-center text-white bg-blue-600 dark:bg-[#27272a] border-white/10 shadow-lg rounded-full transition-all duration-300 ease-in-out dark:hover:bg-blue-600 hover:bg-blue-500"
      >
        <FaLinkedin className="text-2xl" />
      </a> 
      {/* GitHub Button */}
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer" 
        className="w-11 h-11 hover:border hover:border-black  flex items-center justify-center text-white bg-gray-700 dark:bg-[#27272a] border-white/10 shadow-lg rounded-full transition-all duration-300 ease-in-out dark:hover:bg-gray-700 hover:bg-gray-600"
      >
        <FaGithub className="text-2xl" />
      </a> 
    </div>
  );
}
