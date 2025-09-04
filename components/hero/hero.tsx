import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";
import { Oranienbaum } from "next/font/google";

const oranienbaum = Oranienbaum({
  weight: "400"
})


const Hero = () => {
  const container = useRef(null);
  

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Fade out effect
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  // Container variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Child variants for individual elements
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  const [windowsWidth, seteWindowsWidth] = useState(0);

  useEffect(() => {
    seteWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          key={index}
          onMouseEnter={(e) => {
            colorize(e.target as HTMLElement);
          }}
        ></div>
      );
    });
  };

  const colorize = (el: HTMLElement) => {
    el.style.backgroundColor = "black";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  return (
    <motion.div
      ref={container}
      style={{ opacity }}
      className={`min-h-[100svh] flex flex-col items-center justify-center text-center px-4 py-8 sm:py-12 md:py-16 ${styles.container} ${oranienbaum.className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.grid}>
        {windowsWidth > 0 &&
          [...Array(20).keys()].map((_, index) => {
            return (
              <div key={"b_" + index} className={styles.column}>
                {getBlocks()}
              </div>
            );
          })}
      </div>
      <div className={styles.body}>
        {/* Main Name */}
        <motion.div className="mb-6 sm:mb-8 md:mb-12" variants={itemVariants} style={{translateY: translateY}}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 2xl:text-[130px] leading-[0.8] uppercase tracking-tight">
            itteba gilani
          </h1>
        </motion.div>

{/*
        {/* Creative Fullstack 
        <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[0.85] uppercase tracking-tight">
            creative fullstack
          </h2>
        </motion.div>

        {/* Developer with asterisks 
        <motion.div className="mb-8 sm:mb-12 md:mb-16" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[0.85] uppercase tracking-tight">
            <span className="opacity-70">*</span> developer{" "}
            <span className="opacity-70">*</span>
          </h2>
        </motion.div>

        {/* Currently section 
      <motion.div
      className="mb-4 sm:mb-6"
      variants={itemVariants}
      >
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium uppercase tracking-wide opacity-80">
      currently
      </h3>
      </motion.div>
      
      {/* Open to work  
      <motion.div
      className="mb-6 sm:mb-8 md:mb-10"
      variants={itemVariants}
      >
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-tight">
      open to work
      </h3>
      </motion.div> 

        {/* Based in Toronto 
        <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium uppercase tracking-wide opacity-80">
            based in toronto
          </p>
        </motion.div>

        {/* Footer 
        <motion.div variants={itemVariants}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium uppercase tracking-widest opacity-60">
            folio c 2025
          </p>
        </motion.div>
        */}
      </div>
    </motion.div>
  );
};

export default Hero;
