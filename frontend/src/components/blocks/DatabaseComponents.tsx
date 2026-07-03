interface TableData {
  columns: string[];
  rows: (string | number)[][];
  primaryKey: string;
  foreignKey: string;
}

interface Explanation {
  title: string;
  description: string;
}

interface Props {
  table: TableData;
  explanations: Explanation[];
}

export default function DatabaseComponents({
  table,
  explanations,
}: Props) {
  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold">
          Database Components
        </h2>

        <p className="mt-2 text-zinc-400">
          Let's identify the fundamental parts of a relational database using
          a real Products table.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800">
        <table className="w-full border-collapse">
          <thead className="bg-zinc-900">
            <tr>
              {table.columns.map((column) => (
                <th
                  key={column}
                  className="border border-zinc-800 px-4 py-3 text-left"
                >
                  {column}

                  {column === table.primaryKey && (
                    <span className="ml-2 rounded bg-green-600 px-2 py-1 text-xs">
                      PK
                    </span>
                  )}

                  {column === table.foreignKey && (
                    <span className="ml-2 rounded bg-blue-600 px-2 py-1 text-xs">
                      FK
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {table.rows.map((row, index) => (
              <tr key={index} className="hover:bg-zinc-900">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className="border border-zinc-800 px-4 py-3"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {explanations.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
          >
            <h3 className="font-semibold text-cyan-400">
              {item.title}
            </h3>

            <p className="mt-2 text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}