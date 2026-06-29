import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-gray-800 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-4 text-gray-400 leading-relaxed">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={project.github}
          target="_blank"
          className="text-blue-400 hover:text-blue-300"
        >
          View on GitHub →
        </Link>
      </div>
    </article>
  );
}