"use client"; 
import HeroScetion from "@/components/HeroScetion"; 
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import HireMeSection from "@/components/HireMeSection";
import TestimonialSection from "@/components/TestimonialSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div
      className={`dark:selection:bg-[#212121] selection:bg-[#cac6c6]   mx-auto w-[90%] max-w-6xl mb-2 lg:mt-24 mt-20 lg:px-4  sm:px-4 lg:pt-4  sm:pt-4 lg:pb-2  sm:pb-2 px-1 py-2 dark:border-none border rounded-lg backdrop-blur-md dark:bg-[#242124]/50  bg-white `}
    >
      <section className="home  scroll-mt-48 max-h-[600px] ">
        <HeroScetion />
      </section>
      <section className="skills  scroll-mt-24 dark:bg-[#2c2c2c] bg-[#FDFDFD] rounded-lg mt-6 mx-2 lg:mx-0 sm:mx-0 sm:mt-14 lg:mt-0   border">
        <SkillsSection />
      </section>
      <section className="projects scroll-mt-24 dark:bg-[#2c2c2c] bg-[#FDFDFD] rounded-lg mt-2 mx-2 lg:mx-0 sm:mx-0 sm:mt-2 lg:mt-2 border">
        <ProjectsSection />
      </section>
      
      <section className="dark:bg-[#2c2c2c]  bg-[#FDFDFD] rounded-lg mt-2 pb-0 lg:pb-12 sm:pb-8 mx-2 lg:mx-0 sm:mx-0 sm:mt-2 lg:mt-2 border">
        <TestimonialSection />
      </section>
      <section className="hire-me   scroll-mt-24 dark:bg-[#2c2c2c] bg-[#FDFDFD] rounded-lg mt-2 pb-0 lg:pb-8 sm:pb-8 mx-2 lg:mx-0 sm:mx-0 sm:mt-2 lg:mt-2 border">
        <HireMeSection />
      </section>
      <section className="dark:bg-[#2c2c2c]  bg-[#FDFDFD] dark:border-none border rounded-lg   pb-0  mx-2 lg:mx-0 sm:mx-0 sm:mt-2 lg:mt-2  ">
        <FooterSection />
      </section>

      
    </div>
  );
}
