"use client";

import styles from "./style.module.css";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Define the Project type based on your usage
interface Project {
  src: string;
  name: string;
  client: string;
  description: string;
  year: number; // Changed to number to match your data
}

// Define the component props
interface DoubleProps {
  projects: [Project, Project]; // Exactly 2 projects
  reversed?: boolean; // Optional boolean prop
}

export default function Double({ projects, reversed }: DoubleProps) {
  const firstImage = useRef<HTMLDivElement>(null);
  const secondImage = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  let requestAnimationFrameId: number | null = null;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Skip mouse interaction on mobile
    if (isMobile) return;

    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if(!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  }

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + (xPercentDelta * speed)

    const firstImagePercent = 66.66 - (xPercent * 0.33);
    const secondImagePercent = 33.33 + (xPercent * 0.33);
    
    // Safe null checks before accessing style properties
    if (firstImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`;
    }
    if (secondImage.current) {
      secondImage.current.style.width = `${secondImagePercent}%`;
    }

    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      if (requestAnimationFrameId) {
        window.cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      }
    } else {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  }

  // Add safety checks
  if (!projects || projects.length < 2 || !projects[0] || !projects[1]) {
    console.error('Double component requires exactly 2 valid project objects');
    return <div>Error: Invalid projects data</div>;
  }

  // Mobile layout - simple vertical stack
  if (isMobile) {
    return (
      <div className={styles.doubleMobile}>
        <div className={styles.imageContainerMobile}>
          <div className={styles.stretchyWrapperMobile}>
            <Image src={`/images/${projects[0].src}`} fill alt="image" />
          </div>
          <div className={styles.bodyMobile}>
            <h3>{projects[0].name}</h3>
            <h3>{projects[0].description}</h3>
            <h3>{projects[0].year}</h3>
          </div>
        </div>

        <div className={styles.imageContainerMobile}>
          <div className={styles.stretchyWrapperMobile}>
            <Image src={`/images/${projects[1].src}`} fill alt="image" />
          </div>
          <div className={styles.bodyMobile}>
            <h3>{projects[1].name}</h3>
            <h3>{projects[1].description}</h3>
            <h3>{projects[1].year}</h3>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout - interactive mouse behavior
  return (
    <div className={styles.double} onMouseMove={manageMouseMove}>
      <div ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Image src={`/images/${projects[0].src}`} fill alt="image" />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <h3>{projects[0].description}</h3>
          <h3>{projects[0].year}</h3>
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Image src={`/images/${projects[1].src}`} fill alt="image" />
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <h3>{projects[1].description}</h3>
          <h3>{projects[1].year}</h3>
        </div>
      </div>
    </div>
  );
}