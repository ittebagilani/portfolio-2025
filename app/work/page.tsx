"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Lenis from "lenis";

type ProjectType = "fullstack" | "frontend" | "mobile";

interface Project {
  title: string;
  src?: string;
  color?: string;
  type: ProjectType;
  url: string;
  description?: string;
}

const allProjects: Project[] = [
  {
    title: "DSA Quest",
    // src: "dsaquest.png",
    // color: "#000",
    type: "fullstack",
    url: "https://dsaquest.com/",
    description: "A gamified way to learn DSA.",
  },
  {
    title: "Niyyah",
    // src: "dsaquest.png",
    // color: "#000",
    type: "mobile",
    url: "https://v0-niyyah-landing-page.vercel.app",
    description: "Guilt-free daily prayer tracker.",
  },
  {
    title: "Sukoon",
    // src: "dsaquest.png",
    // color: "#000",
    type: "mobile",
    url: "https://dsaquest.com/",
    description: "A simple daily journal app that comforts your soul with Islam.",
  },
  
  {
    title: "Tempest AI",
    src: "tempest.png",
    color: "#000",
    type: "fullstack",
    url: "https://tempestai.vercel.app/",
    description: "AI-powered platform for content generation",
  },
  {
    title: "Layers",
    src: "layers.png",
    color: "#8C8C8C",
    type: "frontend",
    url: "https://saas-landing-page-v2-git-main-itteba-gs-projects.vercel.app/",
    description: "Modern SaaS landing page",
  },
  {
    title: "Zen",
    src: "zen.png",
    color: "#EFE8D3",
    type: "frontend",
    url: "https://saas-landing-page-v1-git-main-itteba-gs-projects.vercel.app/",
    description: "Minimalist productivity app",
  },
  {
    title: "New Reality",
    src: "new_reality.png",
    color: "#706D63",
    type: "frontend",
    url: "https://project-07-ten.vercel.app/",
    description: "Interactive web experience",
  },
  {
    title: "ELEM3NT",
    src: "elem3nt.png",
    color: "#000",
    type: "frontend",
    url: "https://project-06-rosy.vercel.app/",
    description: "Elemental design showcase",
  },
  {
    title: "T27",
    src: "t27.png",
    color: "#8C8C8C",
    type: "frontend",
    url: "https://project-05-beta.vercel.app/",
    description: "Creative portfolio template",
  },
];

export default function WorkPage() {
  const [selectedFilter, setSelectedFilter] =
    useState<ProjectType | "all">("all");
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(allProjects);

  useEffect(() => {
    
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
  }, []);

  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => project.type === selectedFilter)
      );
    }
  }, [selectedFilter]);

  const filterButtons: { label: string; value: ProjectType | "all" }[] = [
    { label: "All", value: "all" },
    { label: "Fullstack", value: "fullstack" },
    { label: "Frontend", value: "frontend" },
    { label: "Mobile", value: "mobile" },
  ];

  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-12 xl:px-20 py-16 max-w-[2000px] mx-auto">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center text-lg mt-20 hover:opacity-60 transition-opacity"
      >
        ← Back
      </Link>

      {/* Title */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-[150px] font-light tracking-tight leading-[1.1] mb-16">
        All Work
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-20">
        {filterButtons.map((button) => (
          <button
            key={button.value}
            onClick={() => setSelectedFilter(button.value)}
            className={`px-6 py-2 rounded-full font-light transition-all cursor-pointer ${
              selectedFilter === button.value
                ? "bg-black text-white"
                : "border border-black hover:bg-gray-100"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div>
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-t border-gray-300 py-20 transition-opacity hover:opacity-60"
            style={{
              borderBottomWidth:
                index === filteredProjects.length - 1 ? "1px" : "0",
            }}
          >
            <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-32 items-center">
              {/* Left */}
              <div>
                {/* Type (de-emphasized) */}
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                  {project.type}
                </p>

                {/* Title */}
                <h2 className="text-4xl md:text-6xl xl:text-7xl font-light transition-transform group-hover:-translate-x-3">
                  {project.title}
                </h2>

                {project.description && (
                  <p className="text-gray-600 mt-3 max-w-xl">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Arrow */}
              <div className="justify-self-end">
                <span className="text-[64px] md:text-[96px] font-light leading-none transition-transform group-hover:translate-x-4">
                  →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Empty */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-24">
          <p className="text-2xl text-gray-400">
            No projects found for this filter
          </p>
        </div>
      )}
    </main>
  );
}
