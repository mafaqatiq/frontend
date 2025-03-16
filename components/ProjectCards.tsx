import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react"; // Importing Lucide ChevronRight icon
import Link from "next/link";

const services = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack shopping application with payment integration",
    imageUrl: "/images/ecommerce.png", // Replace with actual image path
    glow: "shadow-blue-500/50",
  },
  {
    id: "2",
    title: "AI Image Generator",
    description: "Generate custom images using machine learning algorithms",
    imageUrl: "/images/ai-generator.png", // Replace with actual image path
    glow: "shadow-purple-500/50",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Productivity tool for organizing personal and team tasks",
    imageUrl: "/images/task-manager.png", // Replace with actual image path
    glow: "shadow-green-500/50",
  },
];

export const ProjectCards = () => {
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
      className="grid grid-cols-1 gap-1 sm:px-6 lg:px-6 px-3 sm:py-4 py-2 lg:py-4 "
    >
      {services.map((service) => (
        <Link key={service.id} href={`/projects/${service.id}`} passHref>
          <div
           
            className={`relative bg-white dark:hover:bg-white/10 dark:bg-[#373737] dark:text-white rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r group ${service.glow} border cursor-pointer`}
          >
            {/* Image - Displayed instead of icon */}
            <div 
            className="w-14 h-14 lg:flex sm:flex hidden items-center justify-center rounded-lg overflow-hidden bg-gradient-to-r dark:bg-black/50 bg-white dark:border-none border group-hover:opacity-90 transition-all shrink-0">
              <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Image on Mobile - Separate layout */}
            <div className="flex justify-between lg:hidden sm:hidden w-full">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-r bg-black/50 group-hover:opacity-80 transition-all shrink-0">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              <ChevronRight className="lg:hidden sm:hidden mt-2 sm:mt-0 sm:ml-auto text-gray-500 dark:text-gray-300 text-xl transition-all group-hover:text-gray-700 dark:group-hover:text-white" />
            </div>

            {/* Text Content */}
            <div className="mt-2 sm:mt-0 sm:ml-4 flex flex-col flex-grow text-start sm:text-left">
              <h3 className="text-base sm:text-xl lg:text-xl font-semibold">{service.title}</h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>

            {/* Right Arrow */}
            <ChevronRight className="hidden lg:block sm:block mt-2 sm:mt-0 sm:ml-auto text-gray-500 dark:text-gray-300 text-xl transition-all group-hover:text-gray-700 dark:group-hover:text-white" />
          </div>
        </Link>
      ))}
    </motion.div>
  );
};
