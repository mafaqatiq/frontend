"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { CirclePlus, Dock, Home, SquareDashedBottomCode } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [active, setActive] = useState("home"); // Default active button

  const handleScroll = (sectionId: string, name: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(name); // Update active state
  };

  return (
    <nav
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl mx-auto lg:px-10 my-4 p-2.5 lg:p-4 rounded-lg backdrop-blur-md 
      dark:bg-[#242124]/50 dark:border-none border bg-white/70 z-50"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-3">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${active === "home" ? "bg-[#373737] text-white" : ""}`}
            onClick={() => handleScroll(".home", "home")}
          >
            <Home className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${active === "skills" ? "bg-[#373737] text-white" : ""}`}
            onClick={() => handleScroll(".skills", "skills")}
          >
            <Dock className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${active === "projects" ? "bg-[#373737] text-white" : ""}`}
            onClick={() => handleScroll(".projects", "projects")}
          >
            <SquareDashedBottomCode className="h-8 w-8" />
          </Button>
        </div>
        <div className="flex items-center gap-1 lg:gap-3">
          <ModeToggle />
          <Button className="w-24 ml-1" onClick={() => handleScroll(".hire-me", "hire-me")}>
            <CirclePlus /> Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
}
