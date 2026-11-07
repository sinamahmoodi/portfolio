import Link from "next/link";
import { personal } from "@/data/personal";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#4ade80]">
        Sina Mahmoodi
      </p>

      <h1
        className="mt-4 text-7xl font-bold leading-none tracking-tight text-white sm:text-8xl"
        aria-label="404"
      >
        4<span className="text-[#4ade80]">0</span>4
      </h1>

      <h2 className="mt-6 text-xl font-semibold text-white">Page not found</h2>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back to the portfolio.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-md bg-[#4ade80] px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#6ee7a0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]"
        >
          Back to home
        </Link>

        <a
          href={personal.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
        >
          View GitHub
        </a>
      </div>
    </main>
  );
}