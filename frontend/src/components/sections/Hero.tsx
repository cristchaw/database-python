import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
      <span className="mb-6 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
        Workshop • Mastering Database System with Python
      </span>

      <h1 className="max-w-5xl text-center text-6xl font-bold tracking-tight">
        Learn Database Systems
        <br />
        with <span className="text-cyan-400">Python</span>
      </h1>

      <p className="mt-8 max-w-2xl text-center text-lg leading-8 text-zinc-400">
        An interactive learning platform that demonstrates how real-world
        applications store, retrieve, and manage data using Python and
        relational databases.
      </p>

      <Link
        href="/learn"
        className="group relative mt-12 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-4 text-lg font-semibold text-black shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40 active:scale-[0.98]"
      >
        {/* subtle glow */}
        <span className="absolute inset-0 -z-10 rounded-full bg-white/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

        {/* shimmer effect */}
        <span className="absolute inset-0 -z-10 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

        Start Learning
      </Link>
    </section>
  );
}