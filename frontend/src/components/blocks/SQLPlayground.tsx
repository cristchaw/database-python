interface Example {
  keyword: string;
  description: string;
  sql: string;
}

interface Props {
  examples: Example[];
}

export default function SQLPlayground({
  examples,
}: Props) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          SQL Fundamentals
        </h2>

        <p className="mt-2 text-zinc-400">
          These are the SQL commands you'll use most frequently when working
          with relational databases.
        </p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div
            key={example.keyword}
            className="overflow-hidden rounded-2xl border border-zinc-800"
          >
            <div className="border-b border-zinc-800 bg-zinc-900 px-6 py-4">
              <h3 className="text-xl font-bold text-cyan-400">
                {example.keyword}
              </h3>

              <p className="mt-1 text-zinc-400">
                {example.description}
              </p>
            </div>

            <pre className="overflow-x-auto bg-black p-6 text-sm text-green-400">
              <code>{example.sql}</code>
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
}