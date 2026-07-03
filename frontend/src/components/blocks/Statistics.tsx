interface Stat {
  label: string;
  value: string;
}

interface Props {
  title: string;
  stats: Stat[];
}

export default function Statistics({
  title,
  stats,
}: Props) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        {title}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <p className="text-4xl font-bold text-cyan-400">
              {stat.value}
            </p>

            <p className="mt-2 text-zinc-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}