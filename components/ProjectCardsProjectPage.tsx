"use client";
import { MoveUpRight, Play } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrls?: string[];
  githubUrl?: string;
}

const sampleProjects: ProjectCardProps[] = [
  {
    id: "1",
    title: "E-Commerce Web Application",
    description: "An advanced AI-based tool that creates custom images using deep learning algorithms",
    technologies: ["Python", "FastAPI", "Next.js"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    imageUrls: ["/Capture.PNG", "/ecom.jpeg"],
  },
  {
    id: "2",
    title: "AI-Powered Image Generator",
    description: "An advanced AI-based tool that creates custom images using deep learning algorithms.",
    technologies: ["Python", "TensorFlow", "Next.js"],
    githubUrl: "https://github.com/username/ai-image-generator",
    imageUrls: ["/Capture.PNG"],
  },
  {
    id: "3",
    title: "Task Management System",
    description: "An advanced AI-based tool that creates custom images using deep learning algorithms",
    technologies: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/username/task-manager",
    imageUrls: ["/ok.png", "/preview.PNG"],
  },
  {
    id: "4",
    title: "AI-Powered Audio Transcription",
    description: "An advanced AI-based tool that creates custom images using deep learning algorithms",
    technologies: ["Python", "Whisper", "AI"],
    githubUrl: "https://github.com/username/task-manager",
    imageUrls: ["/Capture.PNG"],
  },
];


const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  technologies,
  imageUrls = [],
  githubUrl,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + imageUrls.length) % imageUrls.length
    );
  };

  return (
    <div className="w-full rounded-xl justify-start items-center space-y-2    lg:gap-2 lg:flex  overflow-hidden lg:py-2 sm:pt-4 pt-2 sm:pb-5 pb-4 px-2 bg-[#373737] hover:bg-[#353434]">
      <div
        className="relative lg:max-w-md w-full lg:h-52  sm:h-40 h-36 rounded-lg flex  items-center justify-center  opacity-80"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {imageUrls.length > 0 ? (
          <>
            <motion.img
              key={currentImageIndex} // Key change triggers re-render & animation
              src={imageUrls[currentImageIndex]}
              alt={title}
              className="w-full h-full object-fill rounded-xl hover:opacity-90"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            {imageUrls.length > 1 && isHovered && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 bg-black/50 text-white p-2 rounded-full"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 bg-black/50 text-white p-2 rounded-full"
                >
                  <FaArrowRight />
                </button>
              </>
            )}
          </>
        ) : (
          <p className="text-white text-lg">Project image</p>
        )}
      </div>

      <div className="max-w-xl" >
        <div className="px-2  ">
          <h3 className="text-white text-sm sm:text-lg lg:text-xl font-semibold">
            {title}
          </h3>
          <p className="text-gray-250 text-xs sm:text-sm lg:text-base">
            {description.split("br1.").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </p>

          <div className="mt-2 flex flex-wrap lg:gap-2 sm:gap-2">
            {technologies.map((tech, index) => (
              <button
                key={index}
                disabled
                className="flex text-xs lg:text-xs sm:text-xs items-center gap-2 bg-[#484747] text-white lg:px-3 px-3 mr-1 sm:m-0 lg:m-0 py-2 my-1 rounded-lg transition-all duration-300 hover:bg-[#585858]"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="flex  space-x-4 px-2 mt-4">
          <Link href="/" rel="noopener noreferrer">
            <div className="lg:w-10 lg:h-10 sm:w-10 sm:h-10 w-9 h-9 flex items-center justify-center dark:hover:bg-black/40 rounded-lg overflow-hidden bg-gradient-to-r dark:bg-black/50 bg-black/30 group-hover:opacity-80 transition-all">
              <Play className="sm:text-2xl lg:text-3xl text-white" />
            </div>
          </Link>

          {githubUrl && (
            <Link
              href={githubUrl as Url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 lg:px-8 sm:px-6 px-5 py-2 text-white bg-black/50 dark:hover:bg-black/40 border-white/10 shadow-lg rounded-lg transition-all duration-300 ease-in-out"
            >
              <FaGithub className="lg:text-2xl sm:text-2xl text-base" />
              <span className="lg:text-sm sm:text-sm text-sm font-medium">
                GitHub
              </span>
            </Link>
          )}

          <Link href={`/projects/${id}`} rel="noopener noreferrer">
            <div className="lg:w-10 lg:h-10 sm:w-10 sm:h-10 w-9 h-9 flex items-center justify-center dark:hover:bg-black/40 rounded-lg overflow-hidden bg-gradient-to-r dark:bg-black/50 bg-black/30 group-hover:opacity-80 transition-all">
              <MoveUpRight className="text-1xl sm:text-2xl lg:text-3xl text-white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectsGrid: React.FC<{
  searchQuery?: string;
  selectedTech?: string[];
  limit?: number;
}> = ({ searchQuery = "", selectedTech = [], limit }) => {
  const filteredProjects = sampleProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTech =
      selectedTech.length === 0 ||
      selectedTech.every((tech) =>
        project.technologies
          .map((t) => t.toLowerCase())
          .includes(tech.toLowerCase())
      );

    return matchesSearch && matchesTech;
  });

  // Apply limit if it's provided
  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <div className="container mx-auto py-4 lg:px-6 sm:px-6 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:gap-2 gap-3">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
        ) : (
          <p className="text-white text-center col-span-3">
            No projects found!
          </p>
        )}
      </div>
    </div>
  );
};

export { sampleProjects };
export default ProjectsGrid;
