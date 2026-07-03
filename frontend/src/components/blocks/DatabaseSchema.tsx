interface Table {
  name: string;
  columns: string[];
}

interface Props {
  tables: Table[];
}

export default function DatabaseSchema({
  tables,
}: Props) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          Database Schema
        </h2>

        <p className="mt-2 text-zinc-400">
          A relational database stores data in multiple connected tables.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {tables.map((table) => (
          <div
            key={table.name}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="mb-4 text-xl font-bold text-cyan-400">
              {table.name}
            </h3>

            <ul className="space-y-2">
              {table.columns.map((column) => (
                <li
                  key={column}
                  className="rounded bg-zinc-800 px-3 py-2"
                >
                  {column}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}