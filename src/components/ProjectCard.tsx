import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";


function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C17.5 4 18.5 4.3 18.5 4.3c.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.7c0 .4.2.7.8.6a11.5 11.5 0 0 0 7.8-10.8C23.4 5.8 18.3.7 12 .7Z" />
    </svg>
  );
}


type ProjectCardProps = {
  project: {
    id: string;
    title: string;
    image: string;
    tech: string[];
    description: string;

    demo?: string;
    github?: string;
    paper?: string;
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group grid gap-6 rounded-xl p-4 transition hover:bg-slate-100 md:grid-cols-[200px_1fr]">
    {/* <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
     */}
     <div className="relative aspect-video overflow-hidden rounded-xl bg-transparent">
    
<Image
    src={project.image}
    alt={project.title}
    fill
    quality={100}
    className="object-contain"
/>
    </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-2 leading-relaxed text-slate-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4">

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </Link>
          )}

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              <ExternalLink size={16} />
              Demo
            </Link>
          )}

          {project.paper && (
            <Link
              href={project.paper}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              <FileText size={16} />
              Paper
            </Link>
          )}

        </div>

      </div>
    </article>
  );
}