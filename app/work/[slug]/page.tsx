import projects from "@/constants/project"
import ProjectClient from "./project-client"

import { notFound } from 'next/navigation';
import projects from "@/constants/project";
import ProjectClient from "./project-client";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params; // Await the params Promise
  
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

  const nextProject = projects[nextIndex];
  const prevProject = projects[prevIndex];

  return (
    <ProjectClient 
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
}