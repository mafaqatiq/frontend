import React, { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaCode, FaFolderOpen, FaHandshake } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { icon: <FaBriefcase />, endVal: 4, label: "Experience" },
  { icon: <FaCode />, endVal: 7, label: "Skills" },
  { icon: <FaFolderOpen />, endVal: 18, label: "Projects" },
  { icon: <FaHandshake />, endVal: 25, label: "Clients" },
];

const CountSection = () => {
  const counters = useRef<(HTMLSpanElement | null)[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView || hasAnimated) return;

    const interval = 1500;
    counters.current.forEach((el, index) => {
      if (!el) return;
      let start = 0;
      const end = stats[index].endVal;
      const duration = Math.floor(interval / end);
      const counter = setInterval(() => {
        start += 1;
        el.textContent = `${start}`;
        if (start === end) clearInterval(counter);
      }, duration);
    });

    setHasAnimated(true);
  }, [inView, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-wrap   gap-3 w-full max-w-6xl mx-auto py-0 lg:justify-start  sm:justify-start justify-center">
      {stats.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="w-32 h-32 flex pt-2 pb-2 flex-col justify-around border items-center bg-white hover:bg-[#fdfdfd] dark:hover:bg-[#353434] dark:bg-[#373737] rounded-lg border-b-[10px] border-green-700 text-white shadow-lg text-center"
        >
          <div className="text-3xl text-green-700">{item.icon}</div>
          <span
            ref={(el) => {
              counters.current[idx] = el;
            }}
            className="text-2xl dark:text-gray-300 text-gray-600 font-semibold"
          >
            0
          </span>
          <span className="dark:text-gray-300 text-gray-600 text-base">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountSection;
