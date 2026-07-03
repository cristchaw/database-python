import Section from "@/components/ui/Section";

interface CodeBlockProps {
  language: string;
  code: string;
}

export default function CodeBlock({
  language,
  code,
}: CodeBlockProps) {
  async function copyCode() {
    await navigator.clipboard.writeText(code);
  }

  return (
    <Section title={`💻 ${language} Example`}>
      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3">
          <span className="text-sm text-zinc-400">
            {language}
          </span>

          <button
            onClick={copyCode}
            className="text-sm text-cyan-400 hover:text-cyan-300"
          >
            Copy
          </button>
        </div>

        <pre className="min-w-max rounded-b-xl bg-black p-5 font-mono text-sm leading-7 text-green-400">
          <code>{code}</code>
        </pre>
      </div>
    </Section>
  );
}