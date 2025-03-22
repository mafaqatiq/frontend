"use client";
import { MoveUpRight, Play } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { DrawerDialogDemo } from "./DrawerDialogDemo";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrls?: string[];
  githubUrl?: string;
  videoUrl?: string;
}

const sampleProjects: ProjectCardProps[] = [
  {
    id: "1",
    title: "Musify",
    description: "A web-based music player for streaming, searching, exploring songs, and creating playlists.",
    technologies: ["Python", "FastAPI", "Next.js"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    imageUrls: [ "/musify_2.PNG", "/musify_3.PNG",],
    videoUrl: "https://www.youtube.com/embed/qH4KnJ1SStw?si=drJprgikCePcgx0b",
  },
  {
    id: "2",
    title: "Payment Tracking App",
    description: "A payment tracking app to monitor requests, statuses, history, and transaction details.",
    technologies: ["Python", "TensorFlow", "Next.js"],
    githubUrl: "https://github.com/username/ai-image-generator",
    imageUrls: ["/nr_payment_1.PNG", "/nr_payment_2.PNG", "/nr_payment_3.PNG", "/nr_payment_4.PNG"],
    videoUrl: "https://www.youtube.com/embed/pQV4sDJzyA8?si=hDfZHo_GoKSEQqr1",
  },
  {
    id: "3",
    title: "Food Ordering Wesbite",
    description: "A fast-food ordering platform for seamless browsing, ordering, management, and role-based user access.",
    technologies: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/username/task-manager",
    imageUrls: ["/fudo_1.PNG", "/fudo_2.PNG", "/fudo_3.PNG", "/fudo_4.PNG"],
    videoUrl: "https://www.youtube.com/embed/jpsZNVHsjr4?si=E8BRW75VftsrA_tb",
  },
  {
    id: "4",
    title: "Smart Invoice Extraction",
    description: "An AI-powered system for invoice annotation, data extraction, validation, and storage.",
    technologies: ["Python", "Whisper", "AI"],
    githubUrl: "https://github.com/username/task-manager",
    imageUrls: ["/invoice_1.PNG", "/invoice_2.PNG", "/invoice_3.PNG"],
    videoUrl: "/videos/ecommerce.mp4",
  },
  {
    id: "5",
    title: "E-Commerce App",
    description: "A shopping app with fashion products, cart, deals, flash sales, and order tracking.",
    technologies: ["Python", "Whisper", "AI"],
    githubUrl: "https://github.com/username/task-manager",
    imageUrls: ["/1.PNG", "/2.PNG", "/3.PNG"],
    videoUrl: "/videos/ecommerce.mp4",
  },
  {
    id: "6",
    title: "Retail Billing System",
    description: "A user-friendly retail billing system with quick transactions, record-keeping, and Gmail invoicing.",
    technologies: ["Python", "Whisper", "AI"],
    githubUrl: "https://github.com/username/task-manager",
    imageUrls: ["/retail_1.PNG", "/retail_2.PNG"],
    videoUrl: "/videos/ecommerce.mp4",
  }, 
];
 

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  technologies,
  imageUrls = [],
  githubUrl,
  videoUrl, // Add this line
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Add this line

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + imageUrls.length) % imageUrls.length
    );
  };

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
      className="w-full rounded-xl justify-start items-center space-y-2 lg:gap-2 lg:flex overflow-hidden lg:py-2 sm:pt-4 pt-2 sm:pb-5 pb-4 px-2 dark:bg-[#373737] bg-white  dark:border-none border dark:hover:bg-[#353434]"
    >
      <div
        className="relative lg:max-w-md w-full lg:h-52 sm:h-40 h-44 rounded-lg flex items-center justify-center  "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {imageUrls.length > 0 ? (
          <>
            <motion.img
              key={currentImageIndex}
              src={imageUrls[currentImageIndex]}
              alt={title}
              className="w-full h-full object-fill rounded-xl  hover:opacity-90"
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
          <p className="dark:text-white text-black text-lg">Project image</p>
        )}
      </div>

      <div className="max-w-xl">
        <div className="px-2">
          <h3 className="dark:text-white text-black text-sm sm:text-lg lg:text-xl font-semibold">
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
                className="flex text-xs lg:text-xs sm:text-xs items-center gap-2  dark:border-none hover:bg-[#efeeee]  dark:bg-[#484747] text-black border dark:text-white lg:px-3 px-3 mr-1 sm:m-0 lg:m-0 py-2 my-1 rounded-lg transition-all duration-300 dark:hover:bg-[#585858]"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="flex sm:justify-center justify-center lg:justify-start sm:space-x-2  space-x-2 lg:space-x-2 px-2 mt-4">
          <button onClick={() => setIsModalOpen(true)}> {/* Update this line */}
            <div className="lg:w-12 lg:h-9 sm:w-12 sm:h-9 w-12 h-9 flex items-center justify-center hover:bg-[#efeeee] border-black/30 border dark:border-none bg-[#FDFDFD] dark:hover:bg-black/40 rounded-lg overflow-hidden bg-gradient-to-r dark:bg-black/50  group-hover:opacity-80 transition-all">
              <Play className="dark:text-white text-black size-5" />
            </div>
          </button>

          {githubUrl && (
            <Link
              href={githubUrl as Url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center h-9 lg:flex-grow-0 gap-2 lg:px-8 flex-1 justify-center  text-white bg-[#4D4DF5] hover:bg-[#4D4DF5]/95  dark:hover:bg-black/40 dark:bg-black/50  border-white/10 shadow-lg rounded-lg transition-all duration-300 ease-in-out"
            >
              <FaGithub className="lg:text-xl sm:text-xl text-base" />
              <span className="lg:text-sm sm:text-sm text-sm font-medium">
                GitHub
              </span>
            </Link>
          )}

          <Link href={`/projects/${id}`} rel="noopener noreferrer">
            <div className="lg:w-12 lg:h-9 sm:w-10 sm:h-9 w-12 h-9 flex items-center justify-center hover:bg-[#efeeee] border-black/30 border dark:border-none dark:hover:bg-black/40 rounded-lg overflow-hidden bg-gradient-to-r dark:bg-black/50 bg-[#FDFDFD] group-hover:opacity-80 transition-all">
              <MoveUpRight className="dark:text-white text-black size-5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Add the modal component */}
      <DrawerDialogDemo
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        videoUrl={videoUrl || ""} // Pass the videoUrl here
      />
    </motion.div>
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
    <div className="container mx-auto pb-4 lg:px-6 sm:px-6 px-2 ">
      <p className="lg:text-3xl  sm:text-2xl text-xl font-bold lg:pt-2 sm:pt-2 pgt-1 px-2 pb-1">
        My Works
      </p> 
      <p className=" text-gray-600 dark:text-white text-sm lg:text-base px-2">
      Discover my portfolio, where purposeful interfaces meet captivating design. My work strives to enhance experiences and inspire.

            </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:gap-2 gap-3 pt-6">
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
