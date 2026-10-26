import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f7f3ec] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#987653]">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#49382c] sm:text-6xl">
            Projects that bring ideas to life.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#796b5d]">
            A selection of projects showcasing my work in software
            engineering, web development, and AI-powered applications.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}