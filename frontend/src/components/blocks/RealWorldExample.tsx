interface Props {
  title: string;
  app: string;
  scenario: string;
}

export default function RealWorldExample({
  title,
  app,
  scenario,
}: Props) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="mb-4 text-3xl font-bold">
        {title}
      </h2>

      <div className="space-y-3 text-lg">
        <p>
          <span className="font-semibold text-cyan-400">
            Application:
          </span>{" "}
          {app}
        </p>

        <p className="leading-8 text-zinc-300">
          {scenario}
        </p>
      </div>
    </section>
  );
}