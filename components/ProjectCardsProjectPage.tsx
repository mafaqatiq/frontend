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
  detail?: string;
  problem?: string;
  solution?: string;
}

const sampleProjects: ProjectCardProps[] = [
  {
    id: "1",
    title: "Musify",
    description: "A web-based music player for streaming, searching, exploring songs, and creating playlists.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    imageUrls: [ "/musify_2.PNG", "/musify_3.PNG"],
    videoUrl: "https://www.youtube.com/embed/qH4KnJ1SStw?si=drJprgikCePcgx0b",
    detail: "Musify is a modern and user-friendly music streaming platform that provides seamless music discovery, search, and playlist creation. Users can explore trending music, create personalized playlists, and enjoy a smooth playback experience with an intuitive interface. Built with Next.js and TypeScript, it ensures high performance and scalability, making it a competitive alternative to mainstream music streaming services. The platform also integrates advanced audio streaming capabilities, ensuring minimal buffering and high-quality playback across devices.",
    problem: "Existing music platforms often suffer from cluttered interfaces, intrusive advertisements, and limited personalized features. Users struggle with discovering new music that aligns with their preferences, and many platforms lack efficient playlist management tools. Additionally, slow performance and unoptimized UI can lead to a frustrating user experience. Many platforms also fail to provide offline listening options, which limits accessibility for users with unstable internet connections.",
    solution: "Musify solves these issues by offering an intuitive UI, an optimized search algorithm, and smart playlist management. It incorporates fast music retrieval, personalized recommendations, and an ad-free listening experience. The app is lightweight, responsive, and provides users with a smooth music streaming journey without unnecessary distractions. Additionally, Musify includes offline playback functionality, allowing users to download their favorite songs and playlists for uninterrupted listening. The platform also uses machine learning to analyze user preferences and deliver tailored music recommendations, enhancing user engagement.",
  },
  {
    id: "2",
    title: "NR Payment Tracker",
    description: "A payment tracking app to monitor requests, statuses, history, and transaction details.",
    technologies: ["Python", "FastAPI", "Next.js"],
    githubUrl: "https://github.com/username/ai-image-generator",
    imageUrls: ["/nr_payment_1.PNG", "/nr_payment_2.PNG", "/nr_payment_3.PNG", "/nr_payment_4.PNG"],
    videoUrl: "https://www.youtube.com/embed/pQV4sDJzyA8?si=hDfZHo_GoKSEQqr1",
    detail: "NR Payment Tracker is a comprehensive solution designed for businesses and freelancers to manage and track payments efficiently. It allows users to create and monitor payment requests, view transaction history, and receive real-time status updates. Built with Python's FastAPI and a Next.js frontend, it offers high-speed processing and a smooth user experience for payment management. The system also integrates with popular payment gateways, enabling seamless transactions and automated reconciliation.",
    problem: "Manual payment tracking is prone to human errors, missed transactions, and lack of organization. Businesses and freelancers often struggle with keeping records of payments, leading to disputes, financial mismanagement, and delays in receiving payments. Additionally, the lack of real-time updates and centralized tracking systems makes it difficult to monitor cash flow and outstanding invoices effectively.",
    solution: "NR Payment Tracker automates the entire payment tracking process, categorizing transactions and ensuring accurate record-keeping. It integrates real-time notifications for status updates and allows users to generate detailed reports, reducing errors and improving financial transparency. The platform also supports multi-currency transactions and provides a dashboard for visualizing cash flow, helping businesses make informed financial decisions. With its secure API integrations, NR Payment Tracker ensures data privacy and compliance with financial regulations.",
  },
  {
    id: "3",
    title: "FUDO",
    description: "A fast-food ordering platform for seamless browsing, ordering, management, and role-based user access.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "https://github.com/username/task-manager",
    imageUrls: ["/fudo_1.PNG", "/fudo_2.PNG", "/fudo_3.PNG", "/fudo_4.PNG"],
    videoUrl: "https://www.youtube.com/embed/jpsZNVHsjr4?si=E8BRW75VftsrA_tb",
    detail: "FUDO is an online food ordering system designed for fast-food restaurants and takeout businesses. It allows customers to browse the menu, place orders online, and track order status in real-time. The system also includes an admin panel for restaurant owners to manage menu items, orders, and users effectively. FUDO supports multiple payment methods, including credit cards, digital wallets, and cash on delivery, ensuring flexibility for customers. The platform is optimized for mobile devices, providing a seamless experience for users on the go.",
    problem: "Many small food businesses lack digital solutions for order management, relying on manual order-taking, which can lead to miscommunication, delays, and operational inefficiencies. Additionally, customers expect a smooth online ordering experience, which many traditional restaurants fail to provide. The absence of real-time order tracking and limited payment options further frustrate customers, leading to lost sales and negative reviews.",
    solution: "FUDO streamlines the food ordering process by providing an intuitive online platform where customers can easily place and track orders. It features role-based access for customers and administrators, ensuring secure and efficient management of restaurant operations. The system also optimizes order processing, reducing wait times and improving customer satisfaction. FUDO includes a real-time order tracking feature, allowing customers to monitor their orders from preparation to delivery. Additionally, the platform integrates with popular delivery services, expanding the restaurant's reach and improving delivery efficiency.",
  },
  {
    id: "4",
    title: "Smart Invoice Extraction",
    description: "An AI-powered system for invoice annotation, data extraction, validation, and storage.",
    technologies: ["Django", "Whisper AI", "Python"],
    githubUrl: "https://github.com/username/task-manager",
    imageUrls: ["/invoice_1.PNG", "/invoice_2.PNG", "/invoice_3.PNG"],
    videoUrl: "https://www.youtube.com/embed/zVM24tfqX0A?si=dNhKHg_CV3S8RRyM",
    detail: "Smart Invoice Extraction is an AI-powered tool designed to automate invoice processing. Using advanced machine learning models, it extracts essential details such as invoice number, date, total amount, and vendor information. The system validates the extracted data, ensuring accuracy before storing it securely in a database. The platform supports multiple invoice formats, including PDFs, scanned images, and digital invoices, making it versatile for various business needs. It also integrates with accounting software, enabling seamless data transfer and reducing manual intervention.",
    problem: "Manual invoice processing is inefficient, time-consuming, and error-prone. Businesses dealing with large volumes of invoices struggle to keep up with data entry, leading to financial discrepancies, delayed payments, and administrative burdens. Additionally, the lack of a centralized system for invoice management makes it difficult to retrieve and analyze historical data, hindering financial planning and decision-making.",
    solution: "Smart Invoice Extraction leverages AI to automate invoice scanning and data extraction, reducing manual effort and eliminating errors. The system ensures seamless validation of invoice data and provides a structured, searchable storage system, significantly improving efficiency and accuracy in financial record-keeping. The platform also includes a dashboard for visualizing invoice trends and generating financial reports, helping businesses gain insights into their spending patterns. With its robust security features, Smart Invoice Extraction ensures data privacy and compliance with industry standards.",
  },
  {
    id: "5",
    title: "Retail Billing System",
    description: "A user-friendly retail billing system with quick transactions, record-keeping, and Gmail invoicing.",
    technologies: ["Python", "Tkinter", "Threading"],
    githubUrl: "https://github.com/username/task-manager",
    imageUrls: ["/retail_1.PNG", "/retail_2.PNG"],
    videoUrl: "https://www.youtube.com/embed/cBypXNPfrys?si=aaHX-sN81cpzvAsI",
    detail: "Retail Billing System is an easy-to-use desktop application that enables small retail stores to process sales transactions efficiently. It includes features like automated invoice generation, customer billing, and real-time record-keeping. The system is built with Python's Tkinter, making it lightweight and fast for daily retail operations. It supports barcode scanning for quick product lookup and integrates with Gmail for sending invoices directly to customers. The platform also includes inventory management features, helping retailers track stock levels and reorder products automatically.",
    problem: "Traditional retail stores often rely on manual cash registers or outdated billing systems that do not provide automated record-keeping. This results in slow checkout processes, misplaced transaction records, and errors in calculating total sales. Additionally, the lack of inventory management tools leads to stockouts and overstocking, affecting profitability and customer satisfaction.",
    solution: "Retail Billing System modernizes retail checkout by automating invoice generation and integrating record-keeping features. It supports multiple payment methods and ensures that transaction records are stored securely. Additionally, the system allows invoices to be emailed directly to customers via Gmail, improving efficiency and customer satisfaction. The platform includes an inventory management module that tracks stock levels in real-time and sends alerts for low stock, helping retailers maintain optimal inventory levels. With its user-friendly interface and robust features, Retail Billing System enhances operational efficiency and customer experience.",
  },
];


 

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  technologies,
  imageUrls = [],
  githubUrl,
  videoUrl,  
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
          <h3 className="dark:text-white text-black text-base sm:text-lg lg:text-xl font-semibold">
            {title}
          </h3>
          <p className="text-gray-250 text-sm sm:text-sm lg:text-base">
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
