export function ChaptersSection() {
  const chapters = [
    {
      number: "01",
      title: "Introduction to Databases",
      desc: "Understand what a database is and why it powers modern applications.",
    },
    {
      number: "02",
      title: "SQL Fundamentals",
      desc: "Learn how to structure, query, and manipulate relational data.",
    },
    {
      number: "03",
      title: "Python Database Connection",
      desc: "Connect Python applications to SQLite using SQLAlchemy ORM.",
    },
    {
      number: "04",
      title: "Building REST APIs",
      desc: "Design and implement backend APIs using FastAPI architecture.",
    },
    {
      number: "05",
      title: "Inventory System Project",
      desc: "Combine everything into a real-world full-stack application.",
    },
  ];

  return (
    <section
      id="chapters"
      className="relative overflow-hidden bg-zinc-950 px-6 py-28"
    >
      {/* Ambient background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Learning Path
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl">
            A structured progression from database fundamentals
            to building a complete full-stack inventory system.
          </p>
        </div>

        <div className="space-y-4">
          {chapters.map((ch) => (
            <div
              key={ch.number}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-cyan-500/50 hover:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs tracking-widest text-zinc-500">
                    CHAPTER {ch.number}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                    {ch.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {ch.desc}
                  </p>
                </div>

                <div className="text-zinc-700 text-xl font-bold group-hover:text-cyan-500 transition">
                  {ch.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}