interface Relation {
  title: string;
  description: string;
  example: string;
}

interface Props {
  relations: Relation[];
}

export default function RelationshipCards({
  relations,
}: Props) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          Database Relationships
        </h2>

        <p className="text-zinc-400">
          Relationships connect tables together and eliminate duplicated data.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {relations.map((relation) => (
          <div
            key={relation.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="text-xl font-bold text-cyan-400">
              {relation.title}
            </h3>

            <p className="mt-3 text-zinc-400">
              {relation.description}
            </p>

            <div className="mt-5 rounded-lg bg-zinc-800 p-3 text-sm text-zinc-300">
              <span className="font-semibold">
                Example
              </span>

              <br />

              {relation.example}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}