import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-sm text-white/50">This page could not be found.</p>
      <Link href="/" className="text-sm text-[#4ade80] hover:underline">
        Back home
      </Link>
    </div>
  );
}
