import Section from "@/components/ui/Section";

export default function ArchitectureDiagram() {
  return (
    <Section title="🏗 Application Architecture">
      <div className="flex flex-col items-center gap-5">

        <div className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black">
          🌐 Browser
        </div>

        ↓

        <div className="rounded-xl bg-green-500 px-8 py-4 font-bold text-black">
          🐍 FastAPI
        </div>

        ↓

        <div className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-black">
          🗄 PostgreSQL
        </div>

      </div>
    </Section>
  );
}