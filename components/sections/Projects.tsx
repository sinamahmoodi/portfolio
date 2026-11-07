import React from "react";

import GithubIcon from "@/components/ui/GithubIcon";
import { CASE_STUDIES } from "@/data/projeact";
import CaseStudyButton from "../CaseStudyButton";
import Button from "../ui/Button";
import { personal } from "@/data/personal";

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

const outlineBtn =
  "inline-flex h-7 items-center gap-1.5 rounded-md border border-[#28282c] px-3 text-[11px] font-semibold text-white transition-colors hover:bg-white/5";

const Projects = () => {
  const projects = Object.entries(CASE_STUDIES);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">
          04 / Selected Work
        </p>

        <h2
          id="projects-heading"
          className="text-4xl font-medium leading-[1.17] tracking-tight sm:text-5xl"
        >
          Projects built for real use.
        </h2>

        <p className="mt-5 text-[15px] leading-[26px] text-zinc-400">
          A selection of product, enterprise, and component engineering work.
        </p>

        <ul className="mt-14 flex flex-col gap-8">
          {projects.map(([slug, data]) => {
            const project = data.card;
            const image = data.gallery[0]?.src;

            return (
              <li key={slug}>
                <article className="grid overflow-hidden rounded-xl border border-[#28282c] bg-[#0f0f11] transition-colors duration-200 focus-within:border-green-600/50 hover:border-green-600/50 lg:min-h-[440px] lg:grid-cols-[1.27fr_1fr]">
                  {/* Image */}
                  <div className="relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-[#1b1a22] to-[#121216] lg:aspect-auto">
                    {image && (
                      <img
                        src={image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="h-auto max-h-full w-full object-contain"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 lg:p-11">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-green-400">
                      {project.label}
                    </p>

                    <h3 className="mt-4 text-[28px] font-medium leading-tight tracking-tight sm:text-[34px]">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[25px] text-zinc-400">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {data.stack.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-[2px] border-l border-green-400 bg-[#17171a] px-2 py-1 text-[10px] leading-[14px] text-zinc-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <CaseStudyButton title={project.title} slug={slug} />

                      {project.githubUrl && (
                        <Button
                          href={project.githubUrl}
                          variant="nav"
                          external
                          className={outlineBtn}
                        >
                          <GithubIcon className="h-[15px] w-[15px]" />
                          GitHub
                        </Button>
                      )}

                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          variant="nav"
                          external
                          className={outlineBtn}
                        >
                          Live website
                          <ArrowUpRight />
                        </Button>
                      )}

                      {project.privateLabel && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] text-zinc-400">
                          <LockIcon />
                          {project.privateLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
