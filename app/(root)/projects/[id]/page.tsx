"use client";
import { useParams } from "next/navigation";
import { sampleProjects } from "@/components/ProjectCardsProjectPage"; 
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const ProjectPage = () => {
  const { id } = useParams();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const project = sampleProjects.find((p) => p.id === id);

  if (!project) {
    return <div className="text-center text-white">Project not found.</div>;
  }

  const { title, detail, problem, solution, technologies, githubUrl, videoUrl } = project;

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="dark:selection:bg-[#212121]  selection:bg-slate-400  mx-auto w-[90%] max-w-6xl mb-2 lg:mt-24 mt-20 lg:px-4 sm:px-4 lg:pt-4 sm:pt-4 lg:pb-3 sm:pb-2 px-1 py-2 dark:border-none border rounded-lg backdrop-blur-md dark:bg-[#242124]/50 bg-white"
    >
      <section className="skills scroll-mt-24 dark:bg-[#2c2c2c] bg-[#FDFDFD] rounded-lg mt-2 mx-2 lg:mx-0 sm:mx-0 sm:mt-0 lg:mt-0 border">
        <div className="w-full px-6 py-8 ">
          <div className="flex">
          <h1 className="lg:text-3xl  sm:text-2xl text-xl font-bold mb-2">{title}</h1>
          {githubUrl && (
  <Link
    href={githubUrl as Url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block transition-transform transform hover:-translate-y-0.5 hover:translate-x-0.5"
  >
    <ExternalLink
      className="dark:text-blue-500 ml-.5 text-[#4D4DF5] hover:text-[#4D4DF5]/90"
      width={16}
      height={16}
    />
  </Link>
)}
          </div>
          <p className=" text-sm lg:text-base text-gray-600 dark:text-white  mb-6">{detail}</p>

          {/* Embedded YouTube Video */}
          <div className="relative w-full aspect-w-16 aspect-h-9">
            {videoUrl ? (
              <iframe
                className="w-full lg:h-[480px] sm:h-[300px] h-[200px] border rounded-xl"
                src={videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <p className="text-center">No video available</p>
            )}
          </div>

          <div className="mt-6">
          <h1 className="lg:text-2xl  sm:text-xl text-xl font-bold mb-1">The Problems to Solve</h1>
          <p className=" text-sm lg:text-base text-gray-600 dark:text-white  mb-6">{problem}</p>
          <h1 className="lg:text-2xl  sm:text-xl text-xl font-bold mb-1">Our Solution</h1>
          <p className=" text-sm lg:text-base text-gray-600 dark:text-white  mb-6">{solution}</p>
            <h2 className="text-xl   font-bold">Technologies Used</h2>
            <ul className="flex gap-2 mt-2 flex-wrap">
              {technologies.map((tech, index) => (
                <li key={index} className="flex text-xs lg:text-sm sm:text-sm items-center gap-2  dark:border-none hover:bg-[#efeeee]  dark:bg-[#484747] text-black border dark:text-white lg:px-3 px-3 mr-1 sm:m-0 lg:m-0 py-2 my-1 rounded-lg transition-all duration-300 dark:hover:bg-[#585858]">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectPage;
