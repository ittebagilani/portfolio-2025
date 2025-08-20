import Link from "next/link";
import projects from "@/constants/project"

export default function Projects() {
    return (
        <ul className="projects-list">
            {projects.map((project) => (
                <li key={project.id}>
                    <div className="link">
                        
                        <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}