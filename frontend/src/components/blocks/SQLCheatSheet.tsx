const sqlCommands = [
  {
    keyword: "SELECT",
    desc: "Retrieve data",
  },
  {
    keyword: "INSERT",
    desc: "Insert new data",
  },
  {
    keyword: "UPDATE",
    desc: "Modify existing data",
  },
  {
    keyword: "DELETE",
    desc: "Delete records",
  },
  {
    keyword: "CREATE TABLE",
    desc: "Create a table",
  },
];

export default function SQLCheatSheet() {
  return (
    <section>

      <h2 className="text-3xl font-bold">
        SQL Fundamentals
      </h2>

      <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800">

        <table className="w-full">

          <thead className="bg-zinc-900">

            <tr>

              <th className="p-4 text-left">
                Command
              </th>

              <th className="p-4 text-left">
                Description
              </th>

            </tr>

          </thead>

          <tbody>

            {sqlCommands.map((sql) => (

              <tr
                key={sql.keyword}
                className="border-t border-zinc-800"
              >

                <td className="p-4 font-mono text-cyan-400">
                  {sql.keyword}
                </td>

                <td className="p-4 text-zinc-400">
                  {sql.desc}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}