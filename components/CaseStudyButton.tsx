
"use client";

import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CodeXml,
  Images,
  Layers,
  Sparkles,
  User,
  X,
} from "lucide-react";

import Image from "next/image";
import React from "react";

import {
  CASE_STUDIES,
  type CaseStudyData,
} from "@/data/projeact";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

type CaseStudyButtonProps = {
  title: string;
  slug: string;
};

type CaseStudyModalProps = {
  title: string;
  data: CaseStudyData;
  onClose: () => void;
};

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-green-400">
    {children}
  </p>
);

/* -------------------------------------------------------------------------- */
/*                                    Modal                                   */
/* -------------------------------------------------------------------------- */

const CaseStudyModal = ({
  title,
  data,
  onClose,
}: CaseStudyModalProps) => {
  const [active, setActive] = React.useState(0);

  const slides = data.gallery;
  const total = slides.length;

  const slide = slides[active];

  const prev = () => {
    setActive((current) => (current - 1 + total) % total);
  };

  const next = () => {
    setActive((current) => (current + 1) % total);
  };

  /* ------------------------------ Keyboard -------------------------------- */

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        setActive((current) => (current - 1 + total) % total);
      }

      if (event.key === "ArrowRight") {
        setActive((current) => (current + 1) % total);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);

      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, total]);

  /* ------------------------------ Empty Data ------------------------------ */

  if (!slide) {
    return null;
  }

  /* -------------------------------- Render -------------------------------- */

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${title} case study`}
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#08080A] text-white shadow-2xl"
      >
        {/* ---------------------------------------------------------------- */}
        {/* Header                                                           */}
        {/* ---------------------------------------------------------------- */}

        <header className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#08080A]/95 px-5 py-4 backdrop-blur">
          <div className="flex items-center gap-2 text-xs">
            <Layers className="size-3.5 text-green-400" />

            <span className="text-zinc-400">
              Selected work
            </span>

            <span className="text-zinc-600">
              /
            </span>

            <span className="font-semibold text-white">
              {title}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study"
            className="rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
          </button>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* Scrollable Content                                               */}
        {/* ---------------------------------------------------------------- */}

        <div className="overflow-y-auto overscroll-contain">
          <div className="mx-auto max-w-4xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16">

            {/* ------------------------------------------------------------ */}
            {/* Intro                                                        */}
            {/* ------------------------------------------------------------ */}

            <Eyebrow>
              Featured project
            </Eyebrow>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {title}
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-400">
              {data.overview.description}
            </p>

            {/* ------------------------------------------------------------ */}
            {/* Gallery                                                      */}
            {/* ------------------------------------------------------------ */}

            <div className="mt-12 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Images className="size-4 text-green-400" />

                Project gallery
              </div>

              <span className="text-xs text-zinc-500">
                Project screenshots
              </span>
            </div>

            {/* Main Image */}

            <div className="relative mt-4 aspect-[12/5] overflow-hidden rounded-lg border border-white/15 bg-[#0F0F12]">
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.label}
                fill
                sizes="(min-width: 896px) 832px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Image Caption + Navigation */}

            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold">
                  {slide.label}
                </h3>

                <p className="mt-1 text-xs leading-6 text-zinc-400">
                  {slide.caption}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span className="text-xs tabular-nums text-zinc-400">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>

                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="flex size-8 items-center justify-center rounded-md border border-white/15 transition-colors hover:bg-white/5"
                >
                  <ChevronLeft className="size-4" />
                </button>

                <button
                  onClick={next}
                  aria-label="Next image"
                  className="flex size-8 items-center justify-center rounded-md border border-white/15 transition-colors hover:bg-white/5"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* Thumbnails                                                   */}
            {/* ------------------------------------------------------------ */}

            <div className="mt-4 grid grid-cols-3 gap-3">
              {slides.map((item, index) => (
                <button
                  key={item.src}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${item.label}`}
                  aria-current={index === active}
                  className={`group overflow-hidden rounded-md border text-left transition-colors ${
                    index === active
                      ? "border-green-400"
                      : "border-white/15 hover:border-white/40"
                  }`}
                >
                  <div className="relative aspect-[2/1] bg-[#0F0F12]">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      sizes="270px"
                      className="object-cover"
                    />
                  </div>

                  <div
                    className={`bg-[#0F0F12] px-3 py-2 text-xs ${
                      index === active
                        ? "font-medium text-green-400"
                        : "text-zinc-400"
                    }`}
                  >
                    {item.label}
                  </div>
                </button>
              ))}
            </div>

            {/* ------------------------------------------------------------ */}
            {/* Project Information                                          */}
            {/* ------------------------------------------------------------ */}

            <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 md:gap-0">

              {/* Left Column */}

              <div className="md:pr-10">
                <Eyebrow>
                  01 / The project
                </Eyebrow>

                {/* Overview */}

                <h3 className="mt-5 text-base font-semibold">
                  {data.overview.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {data.overview.description}
                </p>

                {/* Problem */}

                <h3 className="mt-8 text-base font-semibold">
                  {data.problem.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {data.problem.description}
                </p>

                {/* Approach */}

                <h3 className="mt-8 text-base font-semibold">
                  {data.approach.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {data.approach.description}
                </p>

                {/* Features */}

                <div className="mt-10 border-t border-white/10 pt-8">
                  <h3 className="text-base font-semibold">
                    Key features
                  </h3>

                  <ul className="mt-5 space-y-3.5">
                    {data.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-zinc-400"
                      >
                        <Check className="size-3.5 shrink-0 text-green-400" />

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}

              <div className="md:border-l md:border-white/10 md:pl-8">

                <Eyebrow>
                  02 / My contribution
                </Eyebrow>

                <h3 className="mt-5 flex items-center gap-2 text-lg font-semibold">
                  <User className="size-4 text-green-400" />

                  My role
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  My contributions to the design, development, and implementation of this project.
                </p>

                <ul className="mt-4 space-y-3">
                  {data.contributions.map((contribution) => (
                    <li
                      key={contribution}
                      className="relative pl-4 text-sm leading-6 text-zinc-400 before:absolute before:left-0 before:top-2.5 before:size-1 before:rounded-full before:bg-green-400"
                    >
                      {contribution}
                    </li>
                  ))}
                </ul>

                {/* -------------------------------------------------------- */}
                {/* Technology Stack                                         */}
                {/* -------------------------------------------------------- */}

                <div className="mt-8 border-t border-white/10 pt-8">
                  <Eyebrow>
                    03 / Built with
                  </Eyebrow>

                  <h3 className="mt-5 flex items-center gap-2 text-lg font-semibold">
                    <CodeXml className="size-4 text-green-400" />

                    Technology stack
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {data.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-zinc-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* AI-assisted Workflow                                        */}
            {/* ------------------------------------------------------------ */}

            {data.aiTools.length > 0 && (
              <section className="mt-12 border-t border-white/10 pt-8">
                <Eyebrow>
                  04 / AI-assisted workflow
                </Eyebrow>

                <h3 className="mt-5 flex items-center gap-2 text-lg font-semibold">
                  <Sparkles className="size-4 text-purple-400" />

                  AI tools &amp; how I used them
                </h3>

                <div className="mt-6 border-b border-white/10">
                  {data.aiTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="grid gap-1 border-t border-white/10 py-5 sm:grid-cols-[153px_1fr] sm:gap-0"
                    >
                      <span className="text-sm font-semibold">
                        {tool.name}
                      </span>

                      <span className="text-sm leading-6 text-zinc-400">
                        {tool.use}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-6 text-zinc-500">
                  AI-assisted suggestions were reviewed, adapted, and verified against the project requirements.
                </p>
              </section>
            )}

            {/* ------------------------------------------------------------ */}
            {/* Reflections                                                  */}
            {/* ------------------------------------------------------------ */}

            <section className="mt-12 border-t border-white/10 pt-8">
              <Eyebrow>
                05 / Reflections
              </Eyebrow>

              <div className="mt-6 grid gap-8 sm:grid-cols-2">

                {/* Challenge */}

                <div>
                  <h3 className="text-lg font-semibold">
                    {data.reflections.challenge.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {data.reflections.challenge.description}
                  </p>
                </div>

                {/* Learning */}

                <div>
                  <h3 className="text-lg font-semibold">
                    {data.reflections.learned.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {data.reflections.learned.description}
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                    Button                                  */
/* -------------------------------------------------------------------------- */

const CaseStudyButton = ({
  title,
  slug,
}: CaseStudyButtonProps) => {
  const [openModal, setOpenModal] = React.useState(false);

  const data = CASE_STUDIES[slug];

  const handleClose = React.useCallback(() => {
    setOpenModal(false);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-green-400 transition-colors hover:text-green-300"
      >
        View case study

        <ArrowUpRight className="size-3.5" />
      </button>

      {openModal && (
        <CaseStudyModal
          title={title}
          data={data}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default CaseStudyButton;
