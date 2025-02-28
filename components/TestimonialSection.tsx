import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson", 
      rating: 5,
      text: "The team exceeded expectations from start to finish. They brought great ideas, executed flawlessly, and improved our vision in ways we hadn’t imagined possible."
    },
    {
      id: 2,
      name: "Michael Chen", 
      rating: 5,
      text: "From concept to execution, the level of professionalism was outstanding. They not only delivered what we asked for but improved upon our initial ideas."
    },
    {
      id: 3,
      name: "Emily Rodriguez", 
      rating: 4,
      text: "Their expertise and creativity turned our project into something better than expected. Communication was smooth, and they provided valuable insights at every stage."
    },
    {
      id: 4,
      name: "David Patel", 
      rating: 5,
      text: "Exceptional service from start to end. They understood our needs, provided unique solutions, and ensured our final product was polished, effective, and visually appealing."
    },
    {
      id: 5,
      name: "Jessica Williams", 
      rating: 5,
      text: "They delivered not just a product, but a complete experience. Their support, professionalism, and dedication to excellence made our journey smooth and truly rewarding."
    }
  ];
  

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleCards]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - visibleCards : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (testimonials.length - visibleCards + 1)
    );
  };

  const renderStars = (rating: number) => (
    <div className="flex items-center space-x-1">
      <span className="text-yellow-400 font-semibold">{rating}</span>
      <Star size={18} className="text-yellow-400 fill-yellow-400" />
    </div>
  );
  
  

  return (
    <section className="lg:px-4 sm:px-4 px-1 pb-4 lg:pb-0 sm:pb-0">
        <div className="flex justify-between py-3 sm:py-4 sm:mx-6 lg:mx-6 lg:py-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center px-4 sm:px-0 lg:px-0 py-0 sm:py-0"
        >
          <span
            className="relative flex justify-center items-center w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 dark:bg-gray-500 bg-[#5a5959] rounded-full 
                  lg:mr-2 mr-2 animate-pulse before:content-[''] before:absolute before:w-2 before:h-2 lg:before:w-4 lg:before:h-4 before:rounded-full before:bg-gray-500 before:opacity-50 before:animate-wave"
          ></span>
          <span className="lg:ml-1.5 sm:text-base lg:text-lg text-xs font-semibold text-[#5a5959] dark:text-[#b5b5b5]">
            Testimonials
          </span>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto lg:mt-6 sm:mt-2">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
         className="text-center lg:mb-12 hidden lg:block sm:block sm:mb-8">
          <h2 className="lg:text-4xl text-lg  sm:text-3xl font-bold mb-2">What Our Clients Say</h2>
          <p className="dark:text-[#b5b5b5] text-[#5a5959] text-base max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experiences working with us.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
         className="text-center lg:mb-12 mb-4 sm:mb-8 block lg:hidden sm:hidden">
          <h2 className="lg:text-4xl text-lg  sm:text-3xl font-bold mb-1 mt-2 ">What Our Clients Say</h2>
          <p className="dark:text-[#b5b5b5] text-[#5a5959] text-sm max-w-2xl mx-auto px-4">
              Here's what our clients have to say about us
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-center lg:space-x-4 sm:space-x-2">
            <button
              onClick={prevSlide}
              className="dark:bg-white/10 bg-[#5a5959] text-white hover:bg-[#7b7979] lg:p-3 sm:p-2 hidden lg:block sm:block rounded-full shadow-lg dark:hover:bg-white/20 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="w-full max-w-4xl overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
                }}
              >
               {testimonials.map((testimonial) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }} 
    whileInView={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.5 }}
    key={testimonial.id}
    className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2"
  >
    <div className="rounded-lg p-6 dark:bg-[#373737] bg-[#f9f6f6]  shadow-lg h-full flex flex-col justify-between">
      <div className="relative mb-4">
        <Quote size={32} className="absolute -left-2 -top-2 dark:text-gray-600 text-black opacity-20" />
      </div>
      <p className="dark:text-gray-100 text-black/80 italic text-sm sm:text-md lg:text-base flex-grow">
        "{testimonial.text}"
      </p>
      <div className="flex items-center lg:text-md sm:text-sm text-sm  justify-between text-center lg:mt-4 sm:mt-4 mt-2">
        <div className="flex items-center">
          <h4 className="font-bold dark:text-white text-black/80 ">{testimonial.name}</h4>
        </div>
        {renderStars(testimonial.rating)}
      </div>
    </div>
  </motion.div>
))}

              </div>
            </div>
            <button
              onClick={nextSlide}
              className="bg-[#5a5959] text-white hover:bg-[#7b7979]  dark:bg-white/10 lg:p-3 sm:p-2 hidden lg:block sm:block  rounded-full shadow-lg dark:hover:bg-white/20 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
         </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
