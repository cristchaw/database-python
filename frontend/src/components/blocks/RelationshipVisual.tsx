interface Relation {
  title: string;
  description: string;
  example: string;
}

interface Props {
  relations: Relation[];
}

export default function RelationshipVisual({
  relations,
}: Props) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          Database Relationships
        </h2>

        <p className="mt-2 text-zinc-400">
          Tables become powerful when they are connected together.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {relations.map((relation) => (
          <div
            key={relation.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="text-xl font-bold text-cyan-400">
              {relation.title}
            </h3>

            <p className="mt-3 text-zinc-400">
              {relation.description}
            </p>

            <div className="mt-6 rounded-lg bg-zinc-800 p-4">
              <p className="text-sm text-zinc-500">
                Example
              </p>

              <p className="mt-2 font-mono text-lg">
                {relation.example}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}