import React from "react";

type Pillar = {
  number: string;
  title: string;
  description: string;
};

const pillars: Pillar[] = [
  { number: "01", title: "Foundations", description: "React applications" },
  { number: "02", title: "Systems", description: "Reusable UI architecture" },
  { number: "03", title: "Growth", description: "Scalable frontend work" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border border-[#28282c] bg-[#0C0C0F] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-[1216px] items-start gap-10 lg:grid-cols-[4fr_5fr] lg:gap-0">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">01 / About</p>
          <h2 id="about-heading" className="max-w-md text-4xl font-medium leading-[1.17] tracking-tight sm:text-5xl">
            About Sina Mahmoodi
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-zinc-300">
            Front-End Engineer building thoughtful, reliable web experiences with React, TypeScript, and Next.js.
          </p>
        </div>
        <div>
          <p className="text-xl leading-9 sm:text-2xl">
            I’m Sina Mahmoodi, a Front-End Engineer with professional experience building React applications and reusable UI systems.
          </p>
          <p className="mt-8 text-base leading-7 text-zinc-400">
            My work spans TypeScript, state management, API integration, responsive interfaces, accessibility, and maintainable frontend architecture across company environments and independent projects.
          </p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {pillars.map(({ number, title, description }) => (
              <li key={number} className="border-t border-zinc-800 pt-6">
                <span className="text-[11px] text-green-400">{number}</span>
                <h3 className="mt-3 text-[15px] font-bold">{title}</h3>
                <p className="mt-1.5 text-[13px] text-zinc-500">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
