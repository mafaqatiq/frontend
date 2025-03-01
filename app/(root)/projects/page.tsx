"use client";
import React, { useState, useEffect } from "react";
import ProjectCards from "@/components/ProjectCards";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techTags = [
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "Python",
  "Django",
  "Tailwind",
  "SQL",
  "Tkinter",
  "PyQt",
  "AI",
];

const Projects = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(""); // Stores user input but doesn't trigger search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

 const handleSearch = () => {
  setSearchQuery(inputValue);
  router.replace(`?search=${inputValue}`); // No history stacking
};

const handleClear = () => {
  setSearchQuery("");
  setInputValue("");
  setSelectedTech([]);
  router.replace("?"); // Ensures no history stacking
};

  

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const { ref, inView } = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div className="selection:bg-[#212121] mx-auto w-[90%] max-w-6xl mb-2 lg:mt-24 mt-20 lg:px-4 sm:px-4 lg:pt-4 sm:pt-4 lg:pb-2 sm:pb-2 px-1 py-2 dark:border-none border rounded-lg backdrop-blur-md dark:bg-[#242124]/50 bg-white">
      <section className="dark:bg-[#2c2c2c] bg-[#FDFDFD] rounded-lg mt-6 py-4 mx-2 lg:mx-0 sm:mx-0 sm:mt-14 lg:mt-0 border">
        {/* Search Bar */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center px-4 lg:ml-6 sm:ml-6 ml-0 sm:px-0 lg:px-0 py-1"
        >
          <span
            className="relative flex justify-center items-center w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 dark:bg-gray-500 bg-[#5a5959] rounded-full 
          lg:mr-2 mr-2 animate-pulse before:content-[''] before:absolute before:w-2 before:h-2 lg:before:w-4 lg:before:h-4 before:rounded-full before:bg-gray-500 before:opacity-50 before:animate-wave"
          ></span>
          <span className="lg:ml-1.5 sm:text-base lg:text-2xl text-sm font-semibold text-[#5a5959] dark:text-[#b5b5b5]">
            My Projects
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-1 lg:pr-2 sm:pr-2 pr-1 p-1 lg:mx-6 sm:mx-6 mx-2 lg:my-2 sm:my-2 my-0 lg:mt-6 sm:mt-6 mt-4 rounded-xl bg-[#373737]"
        >
          <input
            type="text"
            placeholder="Search projects"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full lg:px-4 sm:px-4 px-2 py-2 text-xs lg:text-base sm:text-base  rounded-lg bg-transparent text-white focus:outline-none border-none"
          />

          <button
            onClick={handleSearch}
            className="lg:p-2 sm:p-2 p-1.5 text-white bg-black/60 hover:bg-black/70 rounded-lg transition"
          >
            <Search size={18} className="sm:text-2xl lg:text-3xl text-white" />
          </button>

          <button
            onClick={handleClear}
            className="lg:p-2 sm:p-2 p-1.5 text-white bg-black/60 hover:bg-black/70 rounded-lg transition"
          >
            <X size={18} className="sm:text-2xl lg:text-3xl text-white" />
          </button>
        </motion.div>

        {/* Technology Filter Tags */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex lg:gap-3 sm:gap-3 gap-2 py-2 lg:mx-6 sm:mx-6 mx-2 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        >
          {techTags.map((tech) => (
            <label key={tech} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTech.includes(tech)}
                onChange={() => toggleTech(tech)}
                className="lg:w-4 lg:h-4 sm:h-4 sm:w-4 w-3 h-3"
              />
              <span className="flex text-xs lg:text-sm sm:text-xs items-center gap-2 bg-[#484747] text-white lg:px-3 px-2 mr-1 sm:m-0 lg:m-0 py-1.5 my-1 rounded-lg transition-all duration-300 hover:bg-[#585858]">
                {tech}
              </span>
            </label>
          ))}
        </motion.div>

        {/* Project Cards with Search Query and Tech Filter */}
        <ProjectCards searchQuery={searchQuery} selectedTech={selectedTech} />
      </section>
    </div>
  );
};

export default Projects;
