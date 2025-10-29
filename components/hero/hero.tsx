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
        ease: "easeOut" as const,
      },
    },
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
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          key={index}
          onMouseEnter={(e) => {
            if (e.target instanceof HTMLElement && !isMobile) {
              colorize(e.target);
            }
          }}
          style={{
            pointerEvents: isMobile ? "none" : "auto",
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
      className={`flex flex-col items-start md:items-center justify-center px-6 sm:px-10 lg:px-20 py-8 sm:py-12 md:py-16 min-h-screen ${styles.container}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={styles.grid}
        style={{
          pointerEvents: isMobile ? "none" : "auto",
        }}
      >
        {windowsWidth > 0 &&
          [...Array(20).keys()].map((_, index) => {
            return (
              <div key={"b_" + index} className={styles.column}>
                {getBlocks()}
              </div>
            );
          })}
      </div>
      <div className={`${styles.body}`}>
        {/* Main Name */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-12"
          variants={itemVariants}
          style={{ y: translateY }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 2xl:text-[180px] leading-[0.8] text-left md:text-center">
            Itteba Gilani
          </h1>
        </motion.div>

        {/* Open to work - left justified on mobile, absolute on larger screens */}
        <motion.div
          className="mb-4 md:mb-0 md:absolute md:-top-20"
          variants={itemVariants}
          style={{ y: translateY }}
        >
          <h1 className="text-xl leading-[0.8] text-left md:text-center">open to work</h1>
        </motion.div>

        {/* Location - left justified on mobile, absolute on larger screens */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-0 md:absolute md:right-50 md:top-60"
          variants={itemVariants}
          style={{ y: translateY }}
        >
          <h1 className="text-xl leading-[0.8] text-left md:text-center">toronto, on</h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;