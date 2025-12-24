"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/hero/hero";
import Footer from "@/components/footer";
import About from "@/components/about/about";
import Work from "@/components/work/work";

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
      {/* <About /> */}
      <Work />
      <Footer />
    </>
  );
}
