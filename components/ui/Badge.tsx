import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0c0c0e] px-2.5 py-1 text-xs text-white/90 shadow-lg",
        className,
      )}
    >
      {children}
    </span>
  );
}
