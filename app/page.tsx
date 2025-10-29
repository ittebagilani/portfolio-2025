"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/hero/hero";
import Footer from "@/components/footer";
import LabPage from "./lab/page";
import About from "@/components/about/about";
import FooterStickyWrapper from "@/components/footer/sticky-footer-wrapper";

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
      <About />
      <LabPage />
      <Footer />
      {/* <FooterStickyWrapper /> */}

    </>
  );
}
