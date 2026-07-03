interface Props {
  variant: "info" | "success" | "warning";
  title: string;
  text: string;
}

const styles = {
  info: "border-cyan-500 bg-cyan-500/10",
  success: "border-green-500 bg-green-500/10",
  warning: "border-yellow-500 bg-yellow-500/10",
};

export default function Callout({
  variant,
  title,
  text,
}: Props) {
  return (
    <section
      className={`rounded-2xl border p-6 ${styles[variant]}`}
    >
      <h3 className="mb-2 text-xl font-bold">
        {title}
      </h3>

      <p className="leading-7 text-zinc-300">
        {text}
      </p>
    </section>
  );
}