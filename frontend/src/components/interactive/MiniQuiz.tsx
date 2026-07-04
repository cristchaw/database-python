interface Props {
  question: string;
  options: string[];
  answer: string;
}

export default function MiniQuiz({
  question,
  options,
  answer,
}: Props) {
  return (
    <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <h2 className="text-2xl font-semibold">
        🧠 Quick Check
      </h2>

      <p className="mt-4">{question}</p>

      <div className="mt-6 grid gap-4">
        {options.map((opt) => (
          <button
            key={opt}
            className="rounded-xl border border-zinc-700 p-4 text-left hover:border-cyan-400"
          >
            {opt}
          </button>
        ))}
      </div>
    </section>
  );
}