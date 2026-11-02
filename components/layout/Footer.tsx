import { ArrowUpRight } from "lucide-react";
import React from "react";

import { personal } from "@/data/personal";

const name = "Sina Mahmoodi";

type FooterLink = {
  label: string;
  /** Leave out to render plain text instead of a link. */
  href?: string;
};

const links: FooterLink[] = [
  { label: "GitHub", href: personal.githubUrl },
  { label: "LinkedIn", href: "#" }, // TODO: your LinkedIn URL
  { label: "Email coming soon" }, // TODO: set href "mailto:..." and rename to "Email"
];

const Footer = () => {
  return (
    // No background on purpose: the global grid background shows through.
    <footer className="px-6 py-9 text-white">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Name + tagline */}
          <div>
            <p className="text-lg font-medium leading-[26px]">
              {name}
              <span className="text-zinc-400">.</span>
            </p>
            <p className="mt-2 max-w-[420px] text-[13.5px] leading-[19px] text-zinc-400">
              Front-End Engineer focused on React, TypeScript, and modern web
              experiences.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-5 text-[13.5px] text-zinc-400">
              {links.map(({ label, href }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                    >
                      {label}
                      <ArrowUpRight size={10} aria-hidden="true" />
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-9 border-t border-[#28282c] pt-[22px]">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;