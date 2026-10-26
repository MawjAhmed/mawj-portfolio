"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(project.image);

  const images = project.images?.length
    ? project.images
    : [project.image];

  return (
    <article className="overflow-hidden rounded-3xl border border-[#e8ded0] bg-[#fbf8f2] text-[#49382c] shadow-[0_20px_60px_rgba(73,56,44,0.07)]">
      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
        {/* Project information */}
        <div className="flex flex-col justify-center">
          <span className="mb-5 w-fit rounded-full border border-[#d9c7b1] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#876b50]">
            {project.category}
          </span>

          <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h3>

          <p className="mt-3 text-lg leading-relaxed text-[#876b50]">
            {project.subtitle}
          </p>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#6f6256] sm:text-base">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-[#eee5d9] px-3 py-2 text-xs font-medium text-[#654d39]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#49382c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#72563f]"
              >
                View Source Code ↗
              </a>
            )}
          </div>

          <p className="mt-6 text-xs leading-6 text-[#907d69]">
            Research-oriented project · Preliminary funding approval
          </p>
        </div>

        {/* Project screenshots */}
        <div className="min-w-0">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-[#e4d8c9] bg-white shadow-sm">
            <Image
              src={activeImage}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          {images.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  aria-label={`Show project screenshot ${index + 1}`}
                  aria-pressed={activeImage === image}
                  className={`relative aspect-4/3 overflow-hidden rounded-xl border-2 bg-white transition ${
                    activeImage === image
                      ? "border-[#987653]"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 33vw, 16vw"
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}