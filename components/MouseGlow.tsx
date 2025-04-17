"use client";
import { useEffect, useRef, useState } from "react";

export default function MouseGlow() {
  const [visible, setVisible] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  // Update target position on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate glow towards cursor
  useEffect(() => {
    const animate = () => {
      const speed = 0.15; // smaller = smoother
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * speed;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * speed;

      if (glowRef.current) {
        glowRef.current.style.left = `${currentPos.current.x - 20}px`;
        glowRef.current.style.top = `${currentPos.current.y - 20}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={glowRef}
      className={`fixed pointer-events-none lg:block hidden   z-50 transition-opacity duration-300 ease-out ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      style={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        opacity: 0.6,
        border: "2px solid gray", 
      }}
    />
  );
}
