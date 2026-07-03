export default function InventoryJourney() {
  return (
    <section className="space-y-24">

      {/* ================= INTRODUCTION ================= */}

      <section>

        <span className="font-semibold text-cyan-400">
          FINAL PROJECT
        </span>

        <h2 className="mt-2 text-4xl font-bold">
          Bringing Everything Together
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
          Throughout this workshop, you've learned the fundamental concepts of
          databases, relational models, SQLite, Python, and CRUD operations.
          This Inventory Management System combines all of those concepts into
          one complete application.
        </p>

        <p className="mt-4 max-w-4xl leading-8 text-zinc-400">
          Rather than interacting directly with a database, users use a web
          interface to manage product information. Behind the scenes, multiple
          technologies work together to process every request safely and
          efficiently.
        </p>

      </section>

      {/* ================= APPLICATION PURPOSE ================= */}

      <section>

        <span className="font-semibold text-cyan-400">
          APPLICATION OVERVIEW
        </span>

        <h2 className="mt-2 text-4xl font-bold">
          What Does This Application Do?
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              Product Management
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Store product information such as names, prices, stock quantities,
              and categories inside a structured database.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              Complete CRUD
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Users can create, view, update, and delete product data through a
              simple and intuitive interface.
            </p>
          </div>

        </div>

      </section>

      {/* ================= TECHNOLOGY STACK ================= */}

      <section>

        <span className="font-semibold text-cyan-400">
          TECHNOLOGY STACK
        </span>

        <h2 className="mt-2 text-4xl font-bold">
          How Is It Built?
        </h2>

        <div className="mt-10 space-y-5">

          {[
            {
              title: "Next.js",
              description:
                "Provides the user interface where users interact with the application."
            },
            {
              title: "FastAPI",
              description:
                "Receives requests from the frontend and processes business logic."
            },
            {
              title: "SQLAlchemy",
              description:
                "Acts as an Object Relational Mapper (ORM), allowing Python objects to communicate with the database without writing raw SQL for every operation."
            },
            {
              title: "SQLite",
              description:
                "Stores all application data permanently inside a lightweight database file."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* ================= REQUEST FLOW ================= */}

      <section>

        <span className="font-semibold text-cyan-400">
          APPLICATION FLOW
        </span>

        <h2 className="mt-2 text-4xl font-bold">
          How Does It Work?
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
          Every action performed by the user follows the same request cycle.
          The frontend sends an HTTP request to the backend, the backend
          processes the request, communicates with the database, and finally
          returns the result to be displayed on the screen.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">

          {[
            "User",
            "Next.js",
            "FastAPI",
            "SQLAlchemy",
            "SQLite",
            "Response"
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-4">

              <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-4">
                {item}
              </div>

              {index < 5 && (
                <span className="text-2xl text-cyan-400">→</span>
              )}

            </div>
          ))}

        </div>

      </section>

      {/* ================= CONCLUSION ================= */}

      <section className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10">

        <h2 className="text-3xl font-bold">
          What You've Accomplished
        </h2>

        <p className="mt-6 leading-8 text-zinc-400">
          By completing this workshop, you've learned how modern applications
          manage data—from understanding databases and SQL to building a
          full-stack application with Python and Next.js.
        </p>

        <p className="mt-4 leading-8 text-zinc-400">
          The Inventory Management System demonstrates how these technologies
          work together to provide a complete solution for storing, managing,
          and presenting data through a web application.
        </p>

      </section>

    </section>
  );
}