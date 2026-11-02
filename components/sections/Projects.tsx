import React from "react";

import GithubIcon from "@/components/ui/GithubIcon";

type Project = {
  slug: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  /** Image path or URL, e.g. "/images/safesub.png". Leave "" for an empty panel. */
  image: string;
  imageAlt: string;
  caseStudyUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  /** Shown with a lock icon when the project has no public links. */
  privateLabel?: string;
};

const projects: Project[] = [
  {
    slug: "safesub",
    label: "Featured product",
    title: "SafeSub",
    description:
      "A modern subscription marketplace for digital services, designed with a premium SaaS-style experience.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "Redux Toolkit",
    ],
    image: "/images/safesub.png", // TODO: add the SafeSub image path
    imageAlt: "SafeSub storefront preview",
    caseStudyUrl: "#", // TODO
    githubUrl: "#", // TODO
    liveUrl: "#", // TODO
  },
  {
    slug: "cheque-management",
    label: "Enterprise application",
    title: "Cheque Management System",
    description:
      "An enterprise administrative web application for managing cheque-related workflows and operations.",
    tags: ["React", "JavaScript", "Ant Design", "REST API"],
    image: "/images/chqpnl.png", // TODO: add the Cheque Management image path
    imageAlt: "Cheque Management System dashboard preview",
    caseStudyUrl: "#", // TODO
    privateLabel: "Professional Project",
  },
  {
    slug: "SafeSubPanel",
    label: "UI engineering",
    title: "SafeSubPanel",
    description:
      "Reusable React and TypeScript components designed for data-heavy business applications.",
    tags: ["React", "TypeScript", "Component Architecture", "Charts"],
    image: "", // TODO: add the component work image path
    imageAlt: "Reusable chart and select components preview",
    caseStudyUrl: "#", // TODO
    privateLabel: "Professional Experience",
  },
];

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

const outlineButton =
  "inline-flex h-7 items-center gap-1.5 rounded-md border border-[#28282c] px-3 text-[11px] font-semibold text-white transition-colors hover:bg-white/5";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section header */}
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

        {/* Project cards */}
        <ul className="mt-14 flex flex-col gap-8">
          {projects.map((project) => (
            <li key={project.slug}>
              <article className="grid overflow-hidden rounded-xl border border-[#28282c] bg-[#0f0f11] transition-colors duration-200 focus-within:border-green-600/50 hover:border-green-600/50 lg:min-h-[440px] lg:grid-cols-[1.27fr_1fr]">
                {/* Image panel: stays empty until you set `image` */}
                <div className="relative flex items-center justify-center aspect-[16/10] bg-gradient-to-br from-[#1b1a22] to-[#121216] lg:aspect-auto">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="h-[80%] w-[90%]  object-contain"
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

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-[2px] border-l border-green-400 bg-[#17171a] px-2 py-1 text-[10px] leading-[14px] text-zinc-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={project.caseStudyUrl}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-green-400 transition-colors hover:text-green-300"
                    >
                      View case study
                      <ArrowUpRight />
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={outlineButton}
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={outlineButton}
                      >
                        Live website
                        <ArrowUpRight />
                      </a>
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
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
