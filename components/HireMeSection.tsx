"use client"; // Ensure this component runs on the client side

import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";
import { Button } from "./ui/button";
import { useInView } from "react-intersection-observer";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation"; // Use 'next/navigation' instead of 'next/router'
import { useToast } from "@/hooks/use-toast";

const HireMeSection = () => {
  const { ref: getInTouchRef, inView: getInTouchInView } = useInView({ triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true });
  const formElementRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { toast } = useToast();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formElementRef.current) return;

    try {
      await emailjs.sendForm(
        "service_id", // Replace with your EmailJS service ID
        "template_id", // Replace with your EmailJS template ID
        formElementRef.current,
        "YnsIj2jXnkSigC0hW" // Replace with your EmailJS public key
      );

      toast({
        title: "Success",
        description: "Message sent successfully! ✅",
      });

      formElementRef.current.reset(); // Reset form after successful submission
      router.push("/"); // Redirect to homepage
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again. ❌",
        variant: "destructive",
      });
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="flex-col pt-2 lg:pt-2 sm:pt-4">
      <div className="flex justify-between sm:mx-6 lg:mx-6 lg:py-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center px-4 sm:px-0 lg:px-0 py-0"
        >
          <span className="relative flex justify-center items-center w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 dark:bg-gray-500 bg-gray-500 rounded-full lg:mr-2 mr-2 animate-pulse before:content-[''] before:absolute before:w-2 before:h-2 lg:before:w-4 lg:before:h-4 before:rounded-full before:bg-gray-500 before:opacity-50 before:animate-wave"></span>
          <span className="lg:ml-1.5 sm:text-base lg:text-lg text-xs font-semibold text-[#959595] dark:text-[#b5b5b5]">
            Hire Me
          </span>
        </motion.div>
      </div>

      {/* Updated layout for sm: screens */}
      <div className="flex flex-col lg:flex-row  w-full gap-4 p-1 mt-4 mb-4">
        {/* "Get In Touch" Section */}
        <motion.div
          ref={getInTouchRef}
          initial={{ opacity: 0, x: -50 }}
          animate={getInTouchInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center ml-2"
        >
          <div className="flex flex-col items-center lg:items-start  justify-center lg:ml-6 sm:ml-0 lg:text-start sm:text-center text-center">
            {/* Centered "Get In Touch" text for all screens */}
            <h1 className="my-2 text-2xl sm:text-4xl lg:text-5xl font-bold  ">
              Get In Touch
            </h1>
            <p className="hidden sm:block  lg:block lg:text-base lg:mb-3 sm:mb-0  text-sm text-[#7c7c7c] dark:text-[#b5b5b5] max-w-2xl mx-auto">
              Need a developer to turn your vision into reality? <br></br> Let’s
              connect and bring your project to life.
            </p>
            <p className="block lg:hidden sm:hidden lg:text-base mb-3 text-sm text-[#7c7c7c] dark:text-[#b5b5b5] max-w-2xl mx-auto">
              Let’s connect and bring your project to life.
            </p>
            {/* Social Media Icons */}
            <div className="sm:mt-4 lg:mt-0">
              <SocialMediaIcons />
            </div>
          </div>
        </motion.div>

        {/* Form section */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: 50 }}
          animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center mx-2 sm:mr-0 lg:mr-6 text-sm lg:text-base sm:mt-6 lg:mt-0"
        >
          <div className="dark:bg-[#373737] border hover:shadow-lg lg:p-4 sm:p-4 px-3 py-4 rounded-lg shadow-md w-full max-w-md">
            <form
              ref={formElementRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="w-full px-4 py-2.5 sm:py-2 dark:bg-[#2c2c2c] bg-[#f4f3f3] dark:text-white text-black rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="w-full px-4 py-2.5 sm:py-2 dark:bg-[#2c2c2c] bg-[#f4f3f3] dark:text-white text-black rounded-lg"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-2 sm:py-1 dark:bg-[#2c2c2c] bg-[#f4f3f3] dark:text-white text-black rounded-lg"
                required
              ></textarea>

              <Button
                type="submit"
                className="w-full dark:bg-[#454346] bg-[#4D4DF5] hover:bg-[#4D4DF5]/90 dark:hover:bg-[#555355] text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HireMeSection;
