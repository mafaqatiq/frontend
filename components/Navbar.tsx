"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { CirclePlus, CircleUserRound, Dock, Home } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route to highlight active button

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  const handleScroll = () => {
    const section = document.querySelector(".hire-me");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl mx-auto lg:px-4 my-4 p-2.5 lg:p-4 rounded-lg backdrop-blur-md 
      dark:bg-[#242124]/50 dark:border-none border bg-white/70 z-50"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 lg:gap-3">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${pathname === "/" ? "bg-[#373737] text-white " : ""}`}
            onClick={() => handleRedirect("/")}
          >
            <Home className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${pathname === "/profile" ? "bg-[#373737] text-white" : ""}`}
            onClick={() => handleRedirect("/profile")}
          >
            <CircleUserRound className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${pathname === "/projects" ? "bg-[#373737] text-white" : ""}`}
            onClick={() => handleRedirect("/projects")}
          >
            <Dock className="h-8 w-8" />
          </Button>
        </div>
        <div className="flex items-center gap-1 lg:gap-3">
          <ModeToggle />
          <Button className="w-24 ml-1" onClick={handleScroll}>
            <CirclePlus className="h-5 w-5" /> Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
}
