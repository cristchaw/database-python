interface Props {
  title: string;
  subtitle: string;
}

export default function Hero({
  title,
  subtitle,
}: Props) {
  return (
    <section className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 via-zinc-900 to-zinc-950 p-10">
      <span className="text-sm font-medium uppercase tracking-widest text-cyan-400">
        DBVerse
      </span>

      <h1 className="mt-4 text-5xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        {subtitle}
      </p>
    </section>
  );
}