export default function MiniQuiz() {
  return (
    <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <h2 className="text-2xl font-semibold">
        🧠 Quick Check
      </h2>

      <p className="mt-4">
        Which statement best describes a database?
      </p>

      <div className="mt-6 grid gap-4">
        <button className="rounded-xl border border-zinc-700 p-4 text-left hover:border-cyan-400">
          A collection of organized data
        </button>

        <button className="rounded-xl border border-zinc-700 p-4 text-left hover:border-cyan-400">
          A programming language
        </button>

        <button className="rounded-xl border border-zinc-700 p-4 text-left hover:border-cyan-400">
          A web browser
        </button>

        <button className="rounded-xl border border-zinc-700 p-4 text-left hover:border-cyan-400">
          An operating system
        </button>
      </div>
    </section>
  );
}