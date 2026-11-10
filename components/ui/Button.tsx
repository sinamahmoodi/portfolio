import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "nav";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  download?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-sm bg-[#4ade80] px-5 py-2.5 text-sm font-semibold text-[#052e16] hover:bg-[#86efac]",
  outline:
    "rounded-sm border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5",
  nav: "rounded-sm border border-white/25 bg-[#0b0b0d] px-3.5 py-[7px] text-[13px] font-medium text-white hover:border-white/40 hover:bg-white/5",
};

export default function Button({
  href,
  download,
  children,
  variant = "primary",
  external = false,

  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-colors",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
