export default function SQLiteJourney() {
  const advantages = [
    {
      title: "Built into Python",
      description:
        "Python already includes the sqlite3 module, so no extra installation is required.",
    },
    {
      title: "Single File Database",
      description:
        "The entire database is stored inside one .db file that is easy to copy and share.",
    },
    {
      title: "Lightweight",
      description:
        "SQLite is fast, small, and perfect for learning or building small applications.",
    },
    {
      title: "Cross Platform",
      description:
        "Runs on Windows, Linux, and macOS without changing your code.",
    },
  ];

  return (
    <section className="space-y-24">

      {/* ================= HERO ================= */}

      <section className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-zinc-900 p-12">

        <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
          SQLite + Python
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Build Your First Database
          <br />
          with Python
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Before building APIs or web applications, every developer needs to
          understand how Python stores and retrieves data.

          SQLite is the perfect starting point because everything happens
          locally inside one simple database file.
        </p>

      </section>

      {/* ================= WHAT IS SQLITE ================= */}

      <section>

        <div className="mb-10">

          <span className="text-cyan-400 font-semibold">
            FOUNDATION
          </span>

          <h2 className="mt-2 text-4xl font-bold">
            What is SQLite?
          </h2>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="space-y-6">

            <p className="leading-8 text-zinc-400">

              SQLite is a lightweight Relational Database Management System
              (RDBMS) that stores all data inside a single database file.

            </p>

            <p className="leading-8 text-zinc-400">

              Unlike MySQL or PostgreSQL, SQLite does not require a server.

              Everything runs directly inside your application, making it
              incredibly simple to use.

            </p>

            <p className="leading-8 text-zinc-400">

              Because of its simplicity, SQLite is widely used for education,
              prototypes, desktop software, mobile applications, and embedded
              systems.

            </p>

          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h3 className="text-xl font-semibold">
              Think of SQLite like...
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-xl bg-zinc-800 p-5">
                📄 Microsoft Word stores documents inside one file.
              </div>

              <div className="rounded-xl bg-zinc-800 p-5">
                📊 Excel stores spreadsheets inside one file.
              </div>

              <div className="rounded-xl border border-cyan-500 bg-cyan-500/10 p-5">
                🗄 SQLite stores an entire database inside one
                <span className="font-bold text-cyan-300"> .db </span>
                file.
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY SQLITE ================= */}

      <section>

        <div className="mb-10">

          <span className="text-cyan-400 font-semibold">
            WHY SQLITE?
          </span>

          <h2 className="mt-2 text-4xl font-bold">
            Why Developers Love SQLite
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {advantages.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition hover:border-cyan-500"
            >

              <h3 className="text-xl font-semibold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= PYTHON <-> SQLITE ================= */}

      <section className="space-y-10">

        <div>

          <span className="font-semibold text-cyan-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-2 text-4xl font-bold">
            How Python Communicates with SQLite
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-zinc-400">
            Every database operation follows exactly the same process.
            Python does not talk directly to the database file.
            Instead, it communicates through the built-in
            <span className="font-semibold text-white"> sqlite3 </span>
            module.
          </p>

        </div>

        <div className="overflow-x-auto">

          <div className="flex min-w-max items-center gap-5">

            {[
              {
                title: "Import",
                code: "import sqlite3",
              },
              {
                title: "Connect",
                code: "connect()",
              },
              {
                title: "Cursor",
                code: "cursor()",
              },
              {
                title: "Execute",
                code: "execute()",
              },
              {
                title: "Database",
                code: "SQLite",
              },
              {
                title: "Result",
                code: "fetchall()",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex items-center gap-5"
              >
                <div className="w-44 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center">

                  <p className="text-sm text-cyan-400">
                    {item.title}
                  </p>

                  <h3 className="mt-3 font-mono text-lg">
                    {item.code}
                  </h3>

                </div>

                {index !== 5 && (
                  <div className="text-3xl text-cyan-500">
                    →
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="space-y-6">

        <h2 className="text-3xl font-bold">
          Step by Step
        </h2>

        <div className="overflow-hidden rounded-2xl border border-zinc-800">

          <table className="w-full">

            <thead className="bg-zinc-900">

              <tr>

                <th className="p-4 text-left">
                  Step
                </th>

                <th className="p-4 text-left">
                  Description
                </th>

              </tr>

            </thead>

            <tbody>

              {[
                [
                  "Import sqlite3",
                  "Loads Python's built-in SQLite library."
                ],

                [
                  "Connect",
                  "Opens an existing database or creates a new one."
                ],

                [
                  "Cursor",
                  "Creates an object used to send SQL commands."
                ],

                [
                  "Execute",
                  "Runs SQL statements such as CREATE, INSERT, SELECT, UPDATE, or DELETE."
                ],

                [
                  "Fetch",
                  "Retrieves data returned by SELECT queries."
                ],

                [
                  "Commit",
                  "Permanently saves changes to the database."
                ],

                [
                  "Close",
                  "Ends the database connection safely."
                ]

              ].map(([title, desc]) => (

                <tr
                  key={title}
                  className="border-t border-zinc-800"
                >

                  <td className="p-4 font-semibold text-cyan-400">
                    {title}
                  </td>

                  <td className="p-4 text-zinc-400">
                    {desc}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

    </section>
  );
}

