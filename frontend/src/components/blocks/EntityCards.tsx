interface Entity {
  title: string;
  description: string;
  color?: string;
}

interface Props {
  entities: Entity[];
}

export default function EntityCard({
  entities,
}: Props) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">
          Database Components
        </h2>

        <p className="mt-2 text-zinc-400">
          Every relational database is built from
          several fundamental building blocks.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {entities.map((entity) => (
          <div
            key={entity.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500"
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              {entity.title}
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              {entity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}