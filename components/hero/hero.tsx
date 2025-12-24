"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const [windowsWidth, setWindowsWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowsWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, idx) => (
      <div
        key={idx}
        onMouseEnter={(e) => {
          if (e.target instanceof HTMLElement && !isMobile) e.target.style.backgroundColor = "black";
          setTimeout(() => {
            if (e.target instanceof HTMLElement) e.target.style.backgroundColor = "transparent";
          }, 300);
        }}
        style={{ pointerEvents: isMobile ? "none" : "auto" }}
      ></div>
    ));
  };

  return (
    <motion.div
      ref={container}
      style={{ opacity }}
      className={`flex flex-col items-center justify-center px-6 md:px-20 py-10 min-h-screen ${styles.container}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.grid} style={{ pointerEvents: isMobile ? "none" : "auto" }}>
        {windowsWidth > 0 &&
          [...Array(20).keys()].map((_, i) => (
            <div key={"b_" + i} className={styles.column}>
              {getBlocks()}
            </div>
          ))}
      </div>

      <div className={styles.body}>
        <motion.div className="mb-4 md:mb-6" variants={itemVariants} style={{ y: translateY }}>
          <h1 className="text-6xl md:text-8xl xl:text-[160px] leading-[0.8] text-center">Itteba Gilani</h1>
        </motion.div>

        <motion.div
          className="mb-2 md:absolute md:-top-16"
          variants={itemVariants}
          style={{ y: translateY }}
        >
          <h1 className="text-lg md:text-xl text-center">open to work</h1>
        </motion.div>

        <motion.div
          className="mb-2 md:absolute md:right-0 md:top-40"
          variants={itemVariants}
          style={{ y: translateY }}
        >
          <h1 className="text-lg md:text-xl text-center">toronto, on</h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
