import Section from "@/components/ui/Section";

interface ComparisonProps {
  leftTitle: string;
  rightTitle: string;

  leftItems: string[];
  rightItems: string[];
}

export default function Comparison({
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
}: ComparisonProps) {
  return (
    <Section title="📊 Comparison">
      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-xl border border-red-500/20 bg-zinc-900 p-5">
          <h3 className="mb-5 text-xl font-semibold text-red-400">
            {leftTitle}
          </h3>

          <div className="space-y-3">
            {leftItems.map((item) => (
              <div
                key={item}
                className="rounded-lg bg-zinc-950 p-3"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-zinc-900 p-5">
          <h3 className="mb-5 text-xl font-semibold text-cyan-400">
            {rightTitle}
          </h3>

          <div className="space-y-3">
            {rightItems.map((item) => (
              <div
                key={item}
                className="rounded-lg bg-zinc-950 p-3"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}