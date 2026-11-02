import React from "react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GithubIcon from "@/components/ui/GithubIcon";
import { personal } from "@/data/personal";
import { heroStack } from "@/data/skills";

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

/* Code editor window */
function CodeWindow() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:translate-y-3">

      {/* Green background glow */}
      <div className="pointer-events-none absolute -inset-8 hidden rounded-[2rem] bg-[radial-gradient(circle_at_85%_45%,rgba(74,222,128,0.13),transparent_55%)] lg:block" />

      {/* TypeScript badge */}
      <Badge className="absolute -left-3 top-[60%] z-20 hidden border border-white/10 bg-[#111113] px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.45)] lg:inline-flex">
        <span className="rounded-[4px] bg-[#16161a] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#4ade80]">
          TS
        </span>
        <span className="pr-1 text-[11px] font-bold text-white/80">
          TypeScript
        </span>
      </Badge>

      {/* React badge */}
      <Badge className="absolute -right-2 top-[18%] z-20 hidden border border-[#4ade80]/20 bg-[#111113] px-3 py-2 text-[#4ade80] shadow-xl lg:inline-flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
        <span className="text-[11px]">React</span>
      </Badge>

      {/* Next badge */}
      <Badge className="absolute -right-1 bottom-[-3%] z-20 hidden border border-white/10 bg-[#111113] px-3 py-2 shadow-xl lg:inline-flex">
        <span className="text-[10px] text-[#4ade80]">▲</span>
        <span className="text-[11px] text-white/90">Next.js</span>
      </Badge>

      {/* Main editor */}
      <div className="relative overflow-hidden rounded-lg border border-[#29292e] bg-[#101012] shadow-[0_25px_70px_rgba(0,0,0,0.4)]">

        {/* Editor header */}
        <div className="flex h-[45px] items-center border-b border-[#29292e] px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#29292e]" />
            <span className="h-2 w-2 rounded-full bg-[#29292e]" />
            <span className="h-2 w-2 rounded-full bg-[#29292e]" />
          </div>

          <p className="flex-1 text-center font-mono text-[11px] text-[#8b9bb4]">
            portfolio.tsx
          </p>

          <span className="h-1 w-1 rounded-full bg-[#4ade80]" />
        </div>

        {/* Code content */}
        <div className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-[28px]">

          <CodeLine n={1}>
            <Kw>const</Kw> <span className="text-white">craft</span>{" "}
            <Op>=</Op> <Op>{"{"}</Op>
          </CodeLine>

          <CodeLine n={2}>
            {"  "}
            <span className="text-white">stack</span>
            <Op>:</Op> <Op>{"["}</Op>
            <Str>&apos;React&apos;</Str>
            <Op>,</Op> <Str>&apos;TS&apos;</Str>
            <Op>{"]"}</Op>
            <Op>,</Op>
          </CodeLine>

          <CodeLine n={3}>
            {"  "}
            <span className="text-white">principles</span>
            <Op>:</Op> <Op>{"["}</Op>
          </CodeLine>

          <CodeLine n={4}>
            {"    "}
            <Str>&apos;clarity&apos;</Str>
            <Op>,</Op>
          </CodeLine>

          <CodeLine n={5}>
            {"    "}
            <Str>&apos;quality&apos;</Str>
            <Op>,</Op>
          </CodeLine>

          <CodeLine n={6}>
            {"    "}
            <Str>&apos;scale&apos;</Str>
          </CodeLine>

          <CodeLine n={7}>
            {"  "}
            <Op>{"]"}</Op>
          </CodeLine>

          <CodeLine n={8}>
            <Op>{"}"}</Op>
          </CodeLine>

          <CodeLine n={9} />
          <CodeLine n={10} />

          <CodeLine n={11}>
            <Kw>export</Kw> <Kw>default</Kw> <Fn>build</Fn>
            <Op>(</Op>
            <span className="text-white">craft</span>
            <Op>)</Op>
            <Op>;</Op>
          </CodeLine>

          <CodeLine n={12} />
        </div>

        {/* Editor footer */}
        <div className="flex h-9 items-center gap-2 px-4 font-mono text-[10px] text-[#85858e]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
          Ready to build
        </div>
      </div>
    </div>
  );
}

/* Code line */
function CodeLine({
  n,
  children,
}: {
  n: number;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid min-h-[28px] grid-cols-[2rem_1fr] gap-4">
      <span className="select-none text-right text-[#55555f]">
        {n}
      </span>

      <div className="whitespace-pre">
        {children}
      </div>
    </div>
  );
}

/* Syntax colors */
function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-[#e879f9]">{children}</span>;
}

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-[#fb923c]">{children}</span>;
}

function Op({ children }: { children: React.ReactNode }) {
  return <span className="text-white/45">{children}</span>;
}

function Fn({ children }: { children: React.ReactNode }) {
  return <span className="text-[#4ade80]">{children}</span>;
}

/* Hero section */
export default function Hero() {
  return (
    // Outer wrapper: fills the viewport and vertically centers the content.
    // If you have a fixed/sticky navbar, use min-h-[calc(100svh-4rem)]
    // (replace 4rem with your navbar height).
    <section className="flex min-h-svh items-center">
      <div className="mx-auto grid w-full max-w-[1216px] items-center gap-16 px-6 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">

        {/* Left content */}
        <div className="min-w-0">

          {/* Availability status */}
          <p className="mb-6 flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[#4ade80] uppercase xl:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            {personal.status}
          </p>

          {/* Main title */}
          <h1 className="max-w-[620px] text-[36px] leading-[1.08] font-semibold tracking-[-0.035em] text-white sm:text-[56px] lg:text-[64px] lg:leading-[1.1] xl:text-[68px]">
            Building modern{" "}
            <br className="hidden sm:block" />
            web experiences{" "}
            <br className="hidden sm:block" />
            with <span className="text-[#4ade80]">React</span>
            <span className="text-white"> &amp; </span>
            <br className="hidden sm:block" />
            TypeScript.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[540px] text-[15px] leading-[30px] text-pretty text-[#9a9aa3] xl:max-w-[600px] xl:text-[18px] xl:leading-8">
            {personal.summary}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects">
              View Projects
              <ArrowRight />
            </Button>

            <Button href={personal.githubUrl} variant="outline" external>
              <GithubIcon className="h-4 w-4" />
              View GitHub
              <ArrowUpRight />
            </Button>
          </div>

          {/* Technology stack */}
          <ul className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            {heroStack.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-[12px] text-white/40"
              >
                <span className="font-mono text-[#4ade80]">
                  {"{ }"}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right code editor */}
        <CodeWindow />
      </div>
    </section>
  );
}