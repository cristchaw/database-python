export default function CRUDJourney() {
  const operations = [
    {
      title: "Create",
      sql: "INSERT",
      color: "bg-green-500/10 border-green-500/30 text-green-400",
      description:
        "Create is used to add new information into the database. Whenever a new record is saved, the database performs an INSERT operation.",
      example:
        "Examples include registering a new user, adding a product, creating an order, or submitting a form.",
      code: `INSERT INTO students(name, major)
VALUES ('John', 'Informatics');`,
    },
    {
      title: "Read",
      sql: "SELECT",
      color: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      description:
        "Read retrieves information that has already been stored. This is the most frequently used database operation because applications constantly display data to users.",
      example:
        "Examples include viewing products, displaying student data, searching for books, or opening a user profile.",
      code: `SELECT *
FROM students;`,
    },
    {
      title: "Update",
      sql: "UPDATE",
      color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
      description:
        "Update modifies existing records without creating new ones. Only the specified fields are changed while the remaining data stays the same.",
      example:
        "Examples include changing stock, updating a profile, editing product prices, or correcting student information.",
      code: `UPDATE students
SET major='Computer Science'
WHERE id=1;`,
    },
    {
      title: "Delete",
      sql: "DELETE",
      color: "bg-red-500/10 border-red-500/30 text-red-400",
      description:
        "Delete permanently removes data from the database. Once deleted and committed, the record cannot be recovered unless a backup exists.",
      example:
        "Examples include removing inactive users, deleting products, canceling orders, or deleting posts.",
      code: `DELETE FROM students
WHERE id=1;`,
    },
  ];

  return (
    <section className="space-y-20">

      {/* WHAT IS CRUD */}

      <section>

        <span className="font-semibold text-cyan-400">
          FOUNDATION
        </span>

        <h2 className="mt-2 text-4xl font-bold">
          What is CRUD?
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
          CRUD stands for <strong>Create</strong>, <strong>Read</strong>,
          <strong> Update</strong>, and <strong>Delete</strong>.
          These four operations represent everything an application can do
          with data stored inside a database.
        </p>

        <p className="mt-4 max-w-4xl leading-8 text-zinc-400">
          Whether you are using Instagram, Tokopedia, WhatsApp, or an
          Inventory Management System, every interaction with data is
          performed using one of these four operations.
        </p>

      </section>

      {/* CRUD OVERVIEW */}

      <section>

        <h2 className="text-3xl font-bold">
          The Four CRUD Operations
        </h2>

        <div className="mt-8 grid gap-8">

          {operations.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
            >

              <div className="flex flex-wrap items-center gap-4">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <span
                  className={`rounded-full border px-4 py-1 text-sm font-semibold ${item.color}`}
                >
                  SQL : {item.sql}
                </span>

              </div>

              <p className="mt-6 leading-8 text-zinc-400">
                {item.description}
              </p>

              <div className="mt-6 rounded-xl bg-zinc-950 p-5">

                <p className="mb-3 text-sm font-semibold text-cyan-400">
                  SQL Example
                </p>

                <pre className="overflow-x-auto text-sm">
                  <code>{item.code}</code>
                </pre>

              </div>

              <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-5">

                <p className="font-semibold text-white">
                  Real-world Example
                </p>

                <p className="mt-2 text-zinc-400">
                  {item.example}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* WORKFLOW */}

      <section>

        <span className="font-semibold text-cyan-400">
          DATA FLOW
        </span>

        <h2 className="mt-2 text-4xl font-bold">
          CRUD Workflow
        </h2>

        <p className="mt-4 max-w-4xl leading-8 text-zinc-400">
          Every CRUD operation follows the same communication process.
          The user performs an action, Python receives the request,
          executes an SQL command through SQLite, updates the database,
          and finally returns the result back to the application.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">

          {[
            "User Action",
            "Python",
            "sqlite3",
            "SQL Query",
            "SQLite Database",
            "Result",
          ].map((step, index) => (
            <div key={step} className="flex items-center gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-4 font-medium">
                {step}
              </div>

              {index < 5 && (
                <span className="text-2xl text-cyan-400">→</span>
              )}
            </div>
          ))}

        </div>

      </section>

    </section>
  );
}