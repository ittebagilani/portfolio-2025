"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/hero/hero";
import Footer from "@/components/footer";

export default function Home() {

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
      {/* <HeroNew /> */}
      <Footer />
    </>
  );
}
