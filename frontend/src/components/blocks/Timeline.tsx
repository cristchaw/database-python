interface Step {
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
}

export default function Timeline({ steps }: Props) {
  return (
    <section>
      <h2 className="text-3xl font-bold">
        Data Journey
      </h2>

      <div className="mt-8 space-y-6">
        {steps.map((step, index) => (
          <div
            key={`${index}-${step.title}`}
            className="flex gap-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              {index + 1}
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-2 text-zinc-400">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}