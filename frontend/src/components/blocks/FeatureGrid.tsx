interface Feature {
  title: string;
  description: string;
}

interface Props {
  title: string;
  features: Feature[];
}

export default function FeatureGrid({
  title,
  features,
}: Props) {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold">
        {title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500"
          >
            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}