import Link from "next/link";
import projects from "@/components/work/projects";

export default function Work() {
    return (
        <ul className="projects-list">
            {projects.map((project) => (
                <li key={project.id}>
                    <div className="link">
                        
                        <Link href={`/work/${project.slug}`} className="text-6xl">{project.title}</Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}