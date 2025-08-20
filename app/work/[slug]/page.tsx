import projects from "@/constants/project"
import ProjectClient from "./project-client"

import { notFound } from 'next/navigation'; // for App Router
// or import { notFound } from 'next/router'; // for Pages Router

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);
  
  // Handle case where project is not found
  if (!project) {
    notFound(); // This will show a 404 page
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

  const nextProject = projects[nextIndex];
  const prevProject = projects[prevIndex];

  return (
    <ProjectClient 
      project={project} // TypeScript now knows this is not undefined
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
}