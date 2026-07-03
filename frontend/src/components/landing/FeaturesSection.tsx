export function FeaturesSection() {
  const features = [
    {
      title: "Interactive Learning System",
      description:
        "Structured chapters executed as real runtime components. Not static content but live educational architecture.",
    },
    {
      title: "Production-Grade Backend Architecture",
      description:
        "FastAPI + SQLAlchemy structured using service-layer design, mirroring real-world backend systems.",
    },
    {
      title: "Seamless Full-Stack Integration",
      description:
        "Frontend dynamically consumes backend APIs with real-time synchronization and state consistency.",
    },
    {
      title: "Database-Driven UI Rendering",
      description:
        "UI is not hardcoded it is generated directly from relational database structures and block models.",
    },
    {
      title: "CRUD + Real Analytics Engine",
      description:
        "Inventory system evolves into analytical dashboard using SQL aggregation (COUNT, SUM, computed fields).",
    },
    {
      title: "Scalable System Design Pattern",
      description:
        "Strict separation of concerns: routes, services, schemas, models designed for maintainability and scaling.",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-zinc-950 px-6 py-28"
    >
      {/* Ambient background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm tracking-[0.3em] text-cyan-400 uppercase">
            System Capabilities
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white leading-tight">
            Built like a real production system,
            <br />
            designed for learning by doing.
          </h2>

          <p className="mt-5 text-zinc-400 leading-relaxed">
            Every feature in DBVerse is intentionally designed to simulate real backend
            engineering workflows from database design to API orchestration and UI rendering.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-zinc-900/70"
            >
              {/* index number */}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="h-px flex-1 bg-zinc-800 group-hover:bg-cyan-500/30 transition" />
              </div>

              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>

              {/* accent line */}
              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

              {/* glow edge effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}