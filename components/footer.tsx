import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div
      className="relative h-[100vh] text-white flex"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      {/* <div className="min-h-screen w-1/2 relative">
        {/* <Image
          src={"/images/hero-pfp.jpg"}
          fill
          alt="pfp"
          className="object-cover"
        /> 
      </div> */}
      <div className="min-h-screen w-1/2">
        <div
          className={`text-black font-light text-4xl md:text-6xl lg:text-9xl flex flex-col justify-center items-center h-full px-20 text-center`}
        >
          {/* Creative Fullstack */}
          <motion.div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl text-left leading-[1] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl font-light tracking-tight">
              Creative <br /> Fullstack <br /> Developer
            </h2>
          </motion.div>
          
          <motion.div className="mb-4 sm:mb-6 md:mb-8 absolute right-20">
            <p className="text-3xl flex font-light tracking-tight">
              I make websites feel like games.
            </p>
          </motion.div>

          {/* Currently section 
            <motion.div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium uppercase tracking-wide opacity-80">
                currently
              </h3>
            </motion.div>

            {/* Open to work  
            <motion.div className="mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-tight">
                open to work
              </h3>
            </motion.div>

            {/* Based in Toronto
            <motion.div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium uppercase tracking-wide opacity-80">
                based in toronto
              </p>
            </motion.div>

            {/* Footer 
            <motion.div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium uppercase tracking-widest opacity-60">
                folio c 2025
              </p>
            </motion.div>
             */}
        </div>
      </div>
    </div>
  );
}
