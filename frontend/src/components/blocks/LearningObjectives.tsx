import Section from "@/components/ui/Section";

interface LearningObjectivesProps {
  objectives: string[];
}

export default function LearningObjectives({
  objectives,
}: LearningObjectivesProps) {
  return (
    <Section title="🎯 Learning Objectives">
      <div className="space-y-4">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-cyan-500/40"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500 font-semibold text-black">
              ✓
            </div>

            <p className="text-zinc-200">
              {objective}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}