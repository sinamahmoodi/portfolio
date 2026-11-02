import React from "react";

type IconName = "code" | "network" | "figma";

type SkillGroup = {
  title: string;
  icon: IconName;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "code",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Architecture & Development",
    icon: "network",
    items: [
      "Component Architecture",
      "Reusable Components",
      "State Management",
      "API Integration",
      "Responsive Design",
      "Accessibility",
      "Code Quality",
    ],
  },
  {
    title: "Tools",
    icon: "figma",
    items: ["Git", "GitLab", "GitHub", "REST APIs", "Figma"],
  },
];

/* Icon paths (24x24, stroke based) */
const iconPaths: Record<IconName, React.ReactNode> = {
  code: (
    <>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </>
  ),
  network: (
    <>
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </>
  ),
  figma: (
    <>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </>
  ),
};

function GroupIcon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

const Skills = () => {
  return (
    // No background on purpose: the global grid background shows through.
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="px-6 py-24 text-white lg:py-28"
    >
      <div className="mx-auto max-w-[1216px]">
        {/* Section header */}
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">
          02 / Skills
        </p>
        <h2
          id="skills-heading"
          className="text-4xl font-medium leading-[1.17] tracking-tight sm:text-5xl"
        >
          A practical frontend toolkit.
        </h2>
        <p className="mt-5 max-w-3xl text-base text-zinc-400">
          Technologies and practices I use to turn product requirements into
          dependable interfaces.
        </p>

        {/* Skill groups */}
        <ul className="mt-14 grid overflow-hidden rounded-xl border border-[#29292e] bg-[#101012] lg:grid-cols-3">
          {skillGroups.map(({ title, icon, items }) => (
            <li
              key={title}
              className="border-b border-[#29292e] p-8 last:border-b-0 lg:min-h-[286px] lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[#29292e] bg-[#0b0b0d] text-green-400">
                  <GroupIcon name={icon} />
                </span>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[#2a2a2f] bg-[#16161a] px-3 py-2 text-xs font-medium leading-4 text-zinc-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;