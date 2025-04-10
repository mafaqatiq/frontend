import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react"; 
import { MoveRight } from "lucide-react";
import { ProjectCards } from "./ProjectCards";

const ProjectsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <>
      <div className="flex-col  pt-2 lg:pt-2 sm:pt-4">
        <div className="flex justify-between sm:mx-6 lg:mx-6 lg:pt-4">
          <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center px-4 sm:px-0 lg:px-0 py-1"
          >
            <span
              className="relative flex justify-center items-center w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 dark:bg-gray-500 bg-[#5a5959] rounded-full 
                  lg:mr-2 mr-2 animate-pulse before:content-[''] before:absolute before:w-2 before:h-2 lg:before:w-4 lg:before:h-4 before:rounded-full before:bg-gray-500 before:opacity-50 before:animate-wave"
            ></span>
            <span className="lg:ml-1.5 sm:text-base  lg:text-lg text-xs font-semibold text-[#5a5959] dark:text-[#b5b5b5]">
              Projects
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <button 
              onClick={() => (window.location.href = "/projects")}
              className="flex text-xs lg:text-sm sm:text-sm items-center gap-2 dark:bg-[#373737] bg-[#4D4DF5] hover:bg-[#4D4DF5]/90 text-white px-3 mx-3 sm:m-0 lg:m-0 py-2 rounded-lg transition-all duration-300 dark:hover:bg-[#484747]"
            >
              View All
              <MoveRight className="w-3.5 h-4" />
            </button> 
          </motion.div>
        </div>
        <ProjectCards />
      </div>
    </>
  );
};

export default ProjectsSection;
