import { Sparkles } from "lucide-react";
import React from "react";

const topics = [
  "React",
  "TypeScript",
  "Next.js",
  "Frontend Architecture",
  "Accessibility",
  "Design Systems",
  "Performance",
];

const Learning = () => {
  return (
    // No background on purpose: the global grid background shows through.
    <section
      id="learning"
      aria-labelledby="learning-heading"
      className="px-6 py-[4.5rem] text-white lg:py-20 "
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        {/* Icon + text */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-green-400">
            <Sparkles size={16} aria-hidden="true" />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-green-400">
              Currently learning
            </p>
            <h2
              id="learning-heading"
              className="mt-2 text-[26px] font-medium leading-tight tracking-tight"
            >
              Deepening the craft.
            </h2>
          </div>
        </div>

        {/* Topics */}
        <ul className="flex flex-wrap gap-2 md:max-w-fit md:justify-end ">
          {topics.map((topic) => (
            <li
              key={topic}
              className="rounded-md border border-[#2a2a2f] bg-[#101012] px-2.5 py-[5px] text-[11px] font-medium leading-4 text-zinc-100"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Learning;