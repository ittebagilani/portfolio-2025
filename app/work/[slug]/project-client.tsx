"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface Project {
  slug: string;
  title: string;
  description: string;
  images?: string[];
}

export default function ProjectClient({ 
  project, 
  nextProject, 
  prevProject 
}: { 
  project: Project; 
  nextProject: Project; 
  prevProject: Project; 
}) {
  const router = useRouter();
  const projectNavRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const projectDescriptionRef = useRef<HTMLParagraphElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const nextProjectProgressBarRef = useRef<HTMLDivElement>(null);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldUpdateProgress, setShouldUpdateProgress] = useState(true);
  const transitionStartedRef = useRef(false);
  const currentProjectRef = useRef(project.slug);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  
  // Global transition flag to prevent any ScrollTrigger activity
  const isInTransition = () => isTransitioning || transitionStartedRef.current;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Preload current project images
    if (project.images) {
      project.images.forEach((imageSrc: any) => {
        const img = new Image();
        img.src = imageSrc;
      });
    }

    // Preload next and previous project images for instant navigation
    if (nextProject.images) {
      nextProject.images.forEach((imageSrc: string) => {
        const img = new Image();
        img.src = imageSrc;
      });
    }

    if (prevProject.images) {
      prevProject.images.forEach((imageSrc: string) => {
        const img = new Image();
        img.src = imageSrc;
      });
    }

    // Initialize Lenis smooth scrolling with optimized settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
      // Performance optimizations for first load
      lerp: 0.05, // More responsive on first load
      wheelMultiplier: 1.2, // Slightly faster wheel response
      // Reduce CPU usage
      syncTouch: false,
      syncTouchLerp: 0.1,
      // Better first-load performance
      smoothWheel: true,
    });

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Wait for refs to be available
    if (projectNavRef.current && projectDescriptionRef.current) {
      // Set initial state
      gsap.set(projectNavRef.current, {
        opacity: 0,
        y: -100,
      });

      gsap.set(projectDescriptionRef.current, {
        opacity: 0,
      });

      // Animate project nav
      gsap.to(projectNavRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });

      // Animate project description
      gsap.to(projectDescriptionRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    }

    const navScrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        console.log("Scroll progress:", self.progress);
        if (progressBarRef.current) {
          gsap.set(progressBarRef.current, {
            scaleX: self.progress,
          });
        }
      },
    });

        const footerScrollTrigger = ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 3}px`,
      pin: true,
      pinSpacing: true,
                    onEnter: () => {
         console.log("Footer trigger entered - hiding nav");
         if (projectNavRef.current && !isInTransition()) {
           gsap.to(projectNavRef.current, {
             y: -100,
             duration: 0.5,
             ease: "power2.inOut",
           });
         }
       },
       onLeaveBack: () => {
         console.log("Footer trigger left back - showing nav");
         if (projectNavRef.current && !isInTransition()) {
           gsap.to(projectNavRef.current, {
             y: 0,
             duration: 0.5,
             ease: "power2.inOut",
           });
         }
       },
       onUpdate: (self) => {
         // Don't update progress if transitioning
         if (isInTransition()) {
           return;
         }

        if (nextProjectProgressBarRef.current && shouldUpdateProgress) {
          gsap.set(nextProjectProgressBarRef.current, {
            scaleX: self.progress,
          });
        }

        if (self.progress >= 1 && !isTransitioning && shouldUpdateProgress && !transitionStartedRef.current) {
          // Prevent multiple triggers
          transitionStartedRef.current = true;
          setShouldUpdateProgress(false);
          setIsTransitioning(true);

          // Completely kill the ScrollTrigger to prevent any more callbacks
          footerScrollTrigger.kill();
          
          // Disable Lenis scrolling during transition
          lenis.stop();
          
          // Disable all ScrollTrigger updates globally during transition
          ScrollTrigger.update = () => {};

          // Check if we're still on the same project
          if (currentProjectRef.current !== project.slug) {
            return; // Don't navigate if project has already changed
          }

          const tl = gsap.timeline();

          tl.set(nextProjectProgressBarRef.current, {
            scaleX: 1,
          });

          tl.to(
            [
              footerRef.current?.querySelector(".project-footer-copy"),
              footerRef.current?.querySelector(".next-project-progress"),
            ],
            {
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
            }
          );

          tl.call(() => {
            // Use router.push for client-side navigation without page refresh
            router.push(`/work/${nextProject.slug}`);
          });
        }
      },
    });

    // Store the ScrollTrigger reference
    scrollTriggerRef.current = footerScrollTrigger;

    // Cleanup function
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      navScrollTrigger.kill();
      footerScrollTrigger.kill();
      transitionStartedRef.current = false;
      scrollTriggerRef.current = null;
    };
  }, []);

  // Reset transition state when project changes
  useEffect(() => {
    if (currentProjectRef.current !== project.slug) {
      currentProjectRef.current = project.slug;
      setIsTransitioning(false);
      setShouldUpdateProgress(true);
      transitionStartedRef.current = false;
    }
  }, [project.slug]);

  return (
    <div className="project-page">
      <div className="project-nav" ref={projectNavRef}>
        <div className="link">
          <span>&#8592;&nbsp;</span>
          <Link href={`/work/${prevProject.slug}`}>Previous</Link>
        </div>

        <div className="project-page-scroll-progress">
          <div
            className="project-page-scroll-progress-bar"
            ref={progressBarRef}
          ></div>
          {project.title}
        </div>

        <div className="link">
          <span>&#8594;&nbsp;</span>
          <Link href={`/work/${nextProject.slug}`}>Next</Link>
        </div>
      </div>
      <div className="project-hero">
        <h1>{project.title}</h1>

        <p ref={projectDescriptionRef} id="project-description">
          {project.description}
        </p>
      </div>
      <div className="project-images">
        {project.images &&
                project.images.map((image: string, index: number) => (
        <div className="project-img" key={index}>
          <img 
            src={image} 
            alt="" 
            loading={index < 2 ? "eager" : "lazy"}
            onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.style.opacity = "1";
            }}
                style={{
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
            </div>
          ))}
      </div>
      <div className="project-footer" ref={footerRef}>
        <h1>{nextProject.title}</h1>

        <div className="project-footer-copy">
          <p>Next Project</p>
        </div>

        <div className="next-project-progress">
          <div className="next-project-progress-bar" ref={nextProjectProgressBarRef}></div>
        </div>
      </div>
    </div>
  );
}
