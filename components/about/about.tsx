import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="relative text-white flex"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      {/* <div className="min-h-screen w-1/2 relative">
        <Image
          src={"/images/hero-pfp.jpg"}
          fill
          alt="pfp"
          className="object-cover"
        />
      </div> */}
      <div className="min-h-[70vh] w-full lg:w-1/2 mb-40">
        <div
          className={`text-black font-light flex flex-col lg:flex-row lg:justify-center lg:items-center h-full px-20 py-8 sm:py-12 md:py-16`}
        >
          {/* Creative Fullstack */}
          <motion.div className="mb-6 md:mb-8 lg:mb-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-9xl font-light tracking-tight leading-[1.1] text-left">
              Creative <br /> Fullstack <br /> Developer
            </h2>
          </motion.div>

          <motion.div className="lg:absolute lg:right-20">
            <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-left">
              I make websites feel like games.

            </p>

            {/* <Image src={'/images/pfp.jpg'} width={500} height={500} alt="pfp" className="rounded-xl shadow-2xl"/> */}

          </motion.div>
        </div>
      </div>
    </div>
  );
}