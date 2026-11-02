import { Mail } from "lucide-react";
import React from "react";

import GithubIcon from "@/components/ui/GithubIcon";
import { personal } from "@/data/personal";

import ContactForm from "../ContactForm";

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  {
    label: "GitHub",
    href: personal.githubUrl,
    external: true,
    icon: <GithubIcon className="h-4 w-4" />,
  },
  {
    label: "LinkedIn",
    href: "#", // TODO: your LinkedIn URL
    external: true,
    icon: <LinkedinIcon />,
  },
  {
    label: "Email",
    href: "mailto:you@example.com", // TODO: your email address
    external: false,
    icon: <Mail size={16} aria-hidden="true" />,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border border-[#28282c] bg-[#0C0C0F] px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-[1100px] items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,578px)] lg:gap-0">
        {/* Left: intro + social links */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-green-400">
            05 / Contact
          </p>
          <h2
            id="contact-heading"
            className="max-w-[420px] text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl"
          >
            Let’s build something great.
          </h2>
          <p className="mt-4 max-w-[380px] text-[15px] leading-[26px] text-zinc-400">
            Interested in working together or discussing a frontend project?
          </p>

          <ul className="mt-8 flex items-center gap-3">
            {socials.map(({ label, href, external, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[#28282c] bg-[#08080a] text-white transition-colors hover:border-green-400 hover:text-green-400"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: email form (separate component) */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;