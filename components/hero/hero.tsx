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
        ease: "easeOut" as const, // Use predefined easing or cast as const
      },
    },
  };

  const [windowsWidth, setWindowsWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowsWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial values
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
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
            // Only enable pointer events on desktop
            pointerEvents: isMobile ? 'none' : 'auto'
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
      className={`min-h-[100svh] flex flex-col items-center justify-center text-center px-4 py-8 sm:py-12 md:py-16 ${styles.container}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div 
        className={styles.grid}
        style={{
          // Disable pointer events on the grid container for mobile
          pointerEvents: isMobile ? 'none' : 'auto'
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
      <div className={styles.body}>
        {/* Main Name */}
        <motion.div className="mb-6 sm:mb-8 md:mb-12" variants={itemVariants} style={{y: translateY}}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 2xl:text-[180px] leading-[0.8] ">
            itteba gilani
          </h1>
        </motion.div>
        
        <motion.div className="absolute -top-20 mb-6 sm:mb-8 md:mb-12" variants={itemVariants} style={{y: translateY}}>
          <h1 className="text-xl leading-[0.8] ">
            open to work
          </h1>
        </motion.div>

        
        <motion.div className="absolute right-10 top-70 mb-6 sm:mb-8 md:mb-12" variants={itemVariants} style={{y: translateY}}>
          <h1 className="text-xl leading-[0.8] ">
            based in toronto
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;