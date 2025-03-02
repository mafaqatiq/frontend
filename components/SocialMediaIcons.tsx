import { FaGithub, FaLinkedin } from "react-icons/fa";
import FiverrIcon from "./icons/FiverrIcon";
import UpworkIcon from "./icons/UpwrorkIcon";
import { Tooltip } from "react-tooltip";
import React from "react";

export default function SocialButtons() {
  const tooltipStyle: React.CSSProperties = {
    backgroundColor: "#222", // Dark background
    color: "#fff", // White text
    padding: "8px 12px", // Padding inside tooltip
    borderRadius: "8px", // Rounded corners
    fontSize: "14px", // Text size
    maxWidth: "120px", // Maximum width
    textAlign: "center", // Center text
  };

  return (
    <div className="flex flex-wrap gap-3">
      {/* Fiverr Button */}
      <a
        href="https://www.fiverr.com/"
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-id="fiverr-tooltip"
        className="w-11 h-11 flex items-center hover:border hover:border-black justify-center text-white bg-green-600 dark:bg-[#373737] border-white/10 shadow-lg rounded-full transition-all duration-300 ease-in-out dark:hover:bg-green-600 hover:bg-green-500"
      >
        <FiverrIcon className="text-2xl" />
      </a>
      <Tooltip id="fiverr-tooltip" place="bottom" content="Fiverr" style={tooltipStyle} />

      {/* Upwork Button */}
      <a
        href="https://www.upwork.com/"
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-id="upwork-tooltip"
        className="w-11 h-11 flex items-center hover:border hover:border-black justify-center text-white bg-[#128f00] dark:bg-[#373737] border-white/10 shadow-lg rounded-full transition-all duration-300 ease-in-out dark:hover:bg-[#128f00] hover:bg-[#128f00]/80"
      >
        <UpworkIcon className="text-2xl" />
      </a>
      <Tooltip id="upwork-tooltip" place="bottom" content="Upwork" style={tooltipStyle} />

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-id="linkedin-tooltip"
        className="w-11 h-11 flex items-center hover:border hover:border-black justify-center text-white bg-blue-600 dark:bg-[#373737] border-white/10 shadow-lg rounded-full transition-all duration-300 ease-in-out dark:hover:bg-blue-600 hover:bg-blue-500"
      >
        <FaLinkedin className="text-2xl" />
      </a>
      <Tooltip id="linkedin-tooltip" place="bottom" content="LinkedIn" style={tooltipStyle} />

      {/* GitHub Button */}
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-id="github-tooltip"
        className="w-11 h-11 flex items-center hover:border hover:border-black justify-center text-white bg-gray-700 dark:bg-[#373737] border-white/10 shadow-lg rounded-full transition-all duration-300 ease-in-out dark:hover:bg-gray-700 hover:bg-gray-600"
      >
        <FaGithub className="text-2xl" />
      </a>
      <Tooltip id="github-tooltip" place="bottom" content="GitHub" style={tooltipStyle} />
    </div>
  );
}
