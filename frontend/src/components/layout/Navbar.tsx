import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="font-bold">DBVerse</h1>

        <div className="flex gap-6 text-sm text-zinc-400">
          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/features"
            className="hover:text-white transition"
          >
            Features
          </Link>

          <Link
            href="/chapters"
            className="hover:text-white transition"
          >
            Chapters
          </Link>

          <Link
            href="/about"
            className="hover:text-white transition"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}