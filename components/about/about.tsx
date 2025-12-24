"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section className="min-h-screen -mt-10 px-6 sm:px-10 md:px-20 py-20 w-full flex flex-col justify-center items-center text-black">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center text-center space-y-3 md:space-y-4"
      >
        <motion.h2
          variants={item}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight"
        >
          Creative Fullstack Developer
        </motion.h2>

        <motion.h3
          variants={item}
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight"
        >
          3rd Year Software Student
        </motion.h3>


      </motion.div>
    </section>
  );
}