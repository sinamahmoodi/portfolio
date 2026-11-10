"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import GithubIcon from "@/components/ui/GithubIcon";
import { NAV_LINKS } from "@/lib/constants";
import { personal } from "@/data/personal";
import { DownloadIcon, MenuIcon, XIcon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (open) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <nav className="relative z-50 mx-auto flex max-w-6xl items-center justify-between gap-4 bg-black px-6 py-5 md:px-10">
        <Link
          href="/"
          onClick={close}
          className="shrink-0 whitespace-nowrap text-[15px] font-semibold tracking-tight text-white"
        >
          {personal.name}
          <span className="text-[#4ade80]">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#8a8a93] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden gap-3 md:flex">
          <Button
            href={personal.githubUrl}
            variant="nav"
            external
            className="shrink-0"
          >
            <GithubIcon className="h-[15px] w-[15px]" />
            GitHub
          </Button>
          <Button
            href="/sinamahmoodi.pdf"
            variant="nav"
            external
            className="shrink-0"
            download
          >
            <DownloadIcon className="h-[15px] w-[15px]" />
            Download Resume
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? (
            <XIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 touch-none overflow-hidden overscroll-none bg-black px-6 pb-8 pt-24 md:hidden"
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-white/5 py-3.5 text-[15px] text-[#8a8a93] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <Button
              href={personal.githubUrl}
              variant="nav"
              external
              className="w-full justify-center"
            >
              <GithubIcon className="h-[15px] w-[15px]" />
              GitHub
            </Button>
            <Button
              href="/sinamahmoodi.pdf"
              variant="nav"
              external
              className="w-full justify-center"
              download
            >
              <DownloadIcon className="h-[15px] w-[15px]" />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
