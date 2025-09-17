import projects from "../../../components/work/projects";
import ProjectClient from "./project-client";

// Type definitions
interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  images: string[];
}

// Define the props for the page, matching Next.js expectations
interface ProjectPageProps {
  params: { slug: string }; // Directly define as an object, not a Promise
}

export default async function Work({ params }: ProjectPageProps) {
  const { slug } = params; // No need to await, as params is already resolved
  const project = projects.find((p: Project) => p.slug === slug);
  const currentIndex = projects.findIndex((p: Project) => p.slug === slug);

  // Handle case where project is not found
  if (!project || currentIndex === -1) {
    return <div>Project not found</div>;
  }

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