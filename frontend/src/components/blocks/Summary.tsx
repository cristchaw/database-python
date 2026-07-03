interface Props {
  points: string[];
}

export default function Summary({
  points,
}: Props) {
  return (
    <section className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
      <h2 className="text-3xl font-bold">
        Chapter Summary
      </h2>

      <div className="mt-6 space-y-4">
        {points.map((point) => (
          <div
            key={point}
            className="flex items-start gap-3"
          >
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-green-400" />

            <p className="text-zinc-300">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}