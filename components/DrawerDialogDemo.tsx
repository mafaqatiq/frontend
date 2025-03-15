import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Loader2 } from "lucide-react"; // Import a loading spinner

interface DrawerDialogDemoProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoUrl: string;
}

export function DrawerDialogDemo({ open, onOpenChange, videoUrl }: DrawerDialogDemoProps) {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isLoading, setIsLoading] = React.useState(true); // Track loading state

  const handleVideoLoaded = () => {
    setIsLoading(false); // Video has loaded
  };

  const handleVideoError = () => {
    setIsLoading(false); // Handle error state if needed
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="backdrop-blur-md dark:bg-[#242124]/50 sm:max-w-[680px] lg:max-w-[780px]">
          <DialogHeader>
            <DialogTitle>Project Preview</DialogTitle>
          </DialogHeader>
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[400px] relative">
            {isLoading && ( // Show loading spinner while video is loading
              <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]/50">
                <Loader2 className="h-8 w-8 animate-spin text-white" />
              </div>
            )}
            <video
              muted
              autoPlay
              className="w-full rounded-sm h-full"
              onLoadedData={handleVideoLoaded} // Trigger when video is loaded
              onError={handleVideoError} // Handle errors
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="backdrop-blur-md dark:bg-[#242124]/50 h-[50vh] sm:h-[70vh] lg:h-[60vh]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Project Preview</DrawerTitle>
        </DrawerHeader>
        <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[20vh] px-4 relative">
          {isLoading && ( // Show loading spinner while video is loading
            <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]/50">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
            </div>
          )}
          <video
            muted
            autoPlay
            className="w-full h-full"
            onLoadedData={handleVideoLoaded} // Trigger when video is loaded
            onError={handleVideoError} // Handle errors
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}