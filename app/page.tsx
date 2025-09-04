"use client";
import { StaticImageData } from "next/image";
import { useEffect } from "react";
import Lenis from "lenis";
import { MotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Hero from "@/components/hero/hero";
import Footer from "@/components/footer";



export default function Home() {
  // const container = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });


  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>

      <Hero />
      <Footer />
      {/* <Projects projects={[]} />  */}
      {/* <div ref={container}>
        <Slide
          src={Picture1}
          left={"-40%"}
          direction={"left"}
          progress={scrollYProgress}
        />
        <Slide
          src={Picture2}
          left={"-25%"}
          direction={"right"}
          progress={scrollYProgress}
        />
        <Slide
          src={Picture3}
          left={"-75%"}
          direction={"left"}
          progress={scrollYProgress}
        />*/}
    </>
  );
}

interface SlideProps {
  src: StaticImageData;
  left: string;
  direction: "left" | "right";
  progress: MotionValue<number>;
}

const Slide = (props: SlideProps) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = ({ src }: { src: StaticImageData }) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[7.5vw]">AVAILABLE FOR WORK</p>
      {/* <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span> */}
    </div>
  );
};
