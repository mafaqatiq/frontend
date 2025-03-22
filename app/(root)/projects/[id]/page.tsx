"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { sampleProjects } from "@/components/ProjectCardsProjectPage";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ProjectPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = sampleProjects.find((p) => p.id === id);

  if (!project) {
    return <div className="text-center text-white">Project not found.</div>;
  }

  const {
    title,
    description,
    technologies,
    imageUrls = [],
    githubUrl,
  } = project;

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
      className="selection:bg-[#212121] mx-auto w-[90%] max-w-6xl mb-2 lg:mt-24 mt-20 lg:px-4 sm:px-4 lg:pt-4 sm:pt-4 lg:pb-2 sm:pb-2 px-1 py-2 dark:border-none border rounded-lg backdrop-blur-md dark:bg-[#242124]/50 bg-white"
    >
      <section className="skills scroll-mt-24 dark:bg-[#2c2c2c] bg-[#FDFDFD] rounded-lg mt-6 mx-2 lg:mx-0 sm:mx-0 sm:mt-14 lg:mt-0 border">
        <div className="w-full px-6 py-8 text-white">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="relative w-full h-96 mx-auto">
            {imageUrls.length > 0 ? (
              <>
                <Image
                  src={imageUrls[currentImageIndex]}
                  alt={title}
                  width={800}
                  height={400}
                  className="w-full h-96 object-fill rounded-xl opacity-80"
                />
                {imageUrls.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
                    >
                      <FaArrowRight />
                    </button>
                  </>
                )}
              </>
            ) : (
              <p className="text-center">No image available</p>
            )}
          </div>
          <div className="mt-6">
            <p className="text-lg">{description}</p>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Technologies Used</h2>
              <ul className="flex gap-2 mt-2 flex-wrap">
                {technologies.map((tech, index) => (
                  <li key={index} className="px-3 py-1 bg-gray-700 rounded-lg">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {githubUrl && (
            <div className="mt-6">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectPage;
