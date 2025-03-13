import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaDesktop,
  FaRobot,
  FaGlobe,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Full-stack development with modern web technologies",
    icon: <FaGlobe className="text-1xl sm:text-2xl lg:text-3xl text-white" />, 
    glow: "shadow-red-500/50",
    border: "border-red-500",
  },
  {
    title: "Desktop Applications",
    description: "Tkinter & PyQt5 specialist creating robust desktop solutions",
    icon: <FaDesktop className="text-1xl sm:text-2xl lg:text-3xl text-white" />, 
    glow: "shadow-purple-500/50",
    border: "border-purple-500",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications with Flutter",
    icon: <FaMobileAlt className="text-1xl sm:text-2xl lg:text-3xl text-white" />,
    glow: "shadow-yellow-500/50",
    border: "border-yellow-500",
  },
  {
    title: "Python Development",
    description: "Expert in Python programming, scripting solutions",
    icon: <FaCode className="text-xl sm:text-2xl lg:text-3xl text-white" />, 
    glow: "shadow-blue-500/50",
    border: "border-blue-500",
  },
  {
    title: "Automation",
    description: "Web scraping, bots, and business process automation",
    icon: <FaRobot className="text-1xl sm:text-2xl lg:text-3xl text-white" />, 
    glow: "shadow-green-500/50",
    border: "border-green-500",
  },
  {
    title: "Containerized Deployment",
    description: "Proficient in deployment with Docker environments",
    icon: <FaServer className="text-1xl sm:text-2xl lg:text-3xl text-white" />, 
    glow: "shadow-teal-500/50",
    border: "border-teal-500",
  },
];

const SkillsCards = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3 sm:gap-2 gap-1 sm:px-6 lg:px-6 px-2 sm:py-4 py-2 lg:py-4"
    >
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative bg-[#F8F9FA] border hover:border-black  dark:bg-[#373737] dark:text-white rounded-lg lg:p-5 sm:p-6 p-3 flex flex-row sm:flex-col lg:flex-col items-center sm:items-start lg:items-start transition-all duration-300 hover:shadow-xl  hover:bg-gradient-to-r group ${service.glow}`}
        >
          <div className="lg:w-12 lg:h-12 sm:w-12 sm:h-12 w-12 h-11 flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-r dark:bg-black/50 bg-black/80 group-hover:opacity-90 transition-all">
            {service.icon}
          </div>

          <div className="ml-3 sm:ml-0 lg:ml-0 flex flex-col w-full">
            <h3 className="lg:my-3 sm:my-3 my-1 text-sm sm:text-xl lg:text-xl font-semibold">
              {service.title}
            </h3>
            <p className="text-xs sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default SkillsCards;
