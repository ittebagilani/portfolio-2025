"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

import "./menu.css";

// Remove home from menu links since it's now in the top left
const menuLinks = [
  { path: "/", label: "HOME" },
  // { path: "/work", label: "WORK" },
  { path: "/lab", label: "LAB" },
  { path: "/contact", label: "TALK" },
];

const Menu = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  // const router = useTransitionRouter();
  const pathname = usePathname();

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Ensure component is mounted before running GSAP animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!isMounted) return;

      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container, dependencies: [isMounted] }
  );

  useEffect(() => {
    if (!isMounted || !tl.current) return;

    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen, isMounted]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        {/* <div className="menu-home">
          <Link href="/">
            <p>HOME</p>
          </Link>
        </div> */}
        
        <div className="menu-open" onClick={toggleMenu}>
          <p>MENU</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-close" onClick={toggleMenu}>
            <p>CLOSE</p>
          </div>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link mb-4">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col text-[15px] font-medium">
              <Link
                href="https://x.com/iittebagilanii"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </Link>
              <Link
                href="https://www.linkedin.com/in/itteba-gilani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/ittebagilani"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
              <Link href="https://itteba.substack.com/" rel="noopener noreferrer" target="_blank">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;