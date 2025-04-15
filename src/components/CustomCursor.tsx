"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    document.querySelectorAll("a, button, .hover-target").forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      animate={{
        x: position.x - 20,
        y: position.y - 20,
        scale: hovered ? 2 : 1,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div
        className="w-20 h-20 rounded-full border-2 border-[#0D47A1]/20 bg-[#0D47A1]/20"
      />
    </motion.div>
  );
};

export default CustomCursor;
