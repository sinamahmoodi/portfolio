import React from "react";

type Job = {
  company: string;
  role: string;
  highlights: string[];
};

const jobs: Job[] = [
  {
    company: "Hooshmand Sepehr",
    role: "Junior React Developer / Programmer",
    highlights: [
      "React-based internal applications",
      "Administrative dashboards and cheque management systems",
      "Reusable UI components and data-heavy interfaces",
      "API integration and improvements to existing frontend architecture",
    ],
  },
  {
    company: "Chargoon",
    role: "Junior React Developer / Programmer",
    highlights: [
      "React development",
      "Reusable component implementation",
      "Frontend UI delivery within an existing application architecture",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 h-3 w-3 shrink-0 text-green-400"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border border-[#28282c] bg-[#0C0C0F] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section header */}
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">
          03 / Experience
        </p>
        <h2
          id="experience-heading"
          className="text-4xl font-medium leading-[1.17] tracking-tight sm:text-5xl"
        >
          Professional experience.
        </h2>
        <p className="mt-5 max-w-[640px] text-[15px] leading-[26px] text-zinc-400">
          Frontend work shaped by real application constraints, established
          systems, and collaborative environments.
        </p>

        {/* Jobs */}
        <ol className="mt-12">
          {jobs.map(({ company, role, highlights }, index) => (
            <li
              key={company}
              className="grid grid-cols-[40px_1fr] gap-y-6 border-t border-[#28282c] py-8 last:border-b lg:grid-cols-[72px_minmax(0,1fr)_minmax(0,1.54fr)] lg:gap-y-0"
            >
              <span className="text-[11px] leading-4 text-[#8b9bb4]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-[22px] font-medium leading-7">{company}</h3>
                <p className="mt-1 text-[15px] leading-[22px] text-green-400">
                  {role}
                </p>
              </div>

              <ul className="col-start-2 flex flex-col gap-[11px] lg:col-start-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] leading-5 text-zinc-400"
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;