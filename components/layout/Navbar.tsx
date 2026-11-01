import Link from "next/link";
import Button from "@/components/ui/Button";
import GithubIcon from "@/components/ui/GithubIcon";
import { NAV_LINKS } from "@/lib/constants";
import { personal } from "@/data/personal";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link href="/" className="text-[15px] font-semibold tracking-tight text-white">
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

        <Button href={personal.githubUrl} variant="nav" external className="shrink-0">
          <GithubIcon className="h-[15px] w-[15px]" />
          GitHub
        </Button>
      </nav>
    </header>
  );
}
