import { ArrowUpRight } from "lucide-react";
import React from "react";

import GithubIcon from "@/components/ui/GithubIcon";
import { personal } from "@/data/personal";

const Github = () => {
  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="border border-[#28282c] bg-[#0C0C0F] px-6 py-[4.5rem] text-white"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        {/* Icon + text */}
        <div className="flex items-start gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[#28282c] bg-[#070709] text-white">
            <GithubIcon className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-green-400">
              Beyond the build
            </p>
            <h2
              id="github-heading"
              className="mt-2 text-[28px] font-medium leading-tight tracking-tight sm:text-[34px]"
            >
              Code, Experiments &amp; Open Source
            </h2>
            <p className="mt-2 text-[15px] leading-6 text-zinc-400">
              Explore my GitHub repositories, experiments, and frontend
              projects.
            </p>
          </div>
        </div>

        {/* Action */}
        <a
          href={personal.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 shrink-0 items-center gap-2.5 rounded-md border border-[#28282c] bg-[#070709] px-7 text-xs font-semibold text-white transition-colors hover:bg-white/5"
        >
          View GitHub
          <ArrowUpRight color="#ffffff" size={12} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Github;