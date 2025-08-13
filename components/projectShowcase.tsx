"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: string;
  project: string;
  client: string;
  category: string;
  year: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectShowcaseProps) {
  const componentRef = useRef<HTMLDivElement>(null);

  // Mock projects data as fallback
  const mockProjects: Project[] = [
    {
      id: "1",
      project: "A collective of creative thinkers making things",
      category: "Art Direction",
      client: "XYZ Sports",
      year: "2024"
    },
    {
      id: "2",
      project: "Digital brand experience for modern lifestyle",
      category: "Web Design",
      client: "ABC Corporation",
      year: "2023"
    },
    {
      id: "3",
      project: "Immersive visual identity system",
      category: "Branding",
      client: "DEF Studios",
      year: "2024"
    },
    {
      id: "4",
      project: "Motion graphics for advertising campaign",
      category: "Animation",
      client: "GHI Agency",
      year: "2023"
    },
    {
      id: "5",
      project: "Interactive product showcase platform",
      category: "Development",
      client: "JKL Tech",
      year: "2024"
    }
  ];

  // Use provided projects or fallback to mock data
  const projectsData = projects || mockProjects;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dark overlay animation
    //   gsap.to("#overlay-dark", {
    //     duration: 2,
    //     top: "-100%",
    //     ease: "power3.inOut",
    //     delay: 4
    //   });

      // Divider animations
      gsap.from(".divider", {
        duration: 3,
        scaleX: 0,
        ease: "power3.inOut",
        delay: 0.5,
        stagger: {
          amount: 0.8
        }
      });

      // Column animations
      gsap.from(".row > .col", {
        duration: 2,
        opacity: 0,
        y: 40,
        ease: "power3.inOut",
        delay: 2,
        stagger: {
          amount: 1.5
        }
      });
    });

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef}>
      <div id="overlay-dark"></div>
      <div className="content">
        <div className="nav row">
          <div className="col">project</div>
          <div className="col">category</div>
          <div className="col">client</div>
          <div className="col">year</div>
        </div>
        <div className="divider nav-divider"></div>
        
        {/* Dynamically render projects */}
        {projectsData.map((project) => (
          <div key={project.id}>
            <div className="row">
              <div className="col">{project.project}</div>
              <div className="col">{project.category}</div>
              <div className="col">{project.client}</div>
              <div className="col">{project.year}</div>
            </div>
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
}